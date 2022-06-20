import { Component, OnInit,TemplateRef  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desaparecidos } from 'src/app/models/Desaparecidos';
import { DesaparecidoService } from 'src/app/services/desaparecido.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-desaparecidos-detalhe',
  templateUrl: './desaparecidos-detalhe.component.html',
  styleUrls: ['./desaparecidos-detalhe.component.css']
})
export class DesaparecidosDetalheComponent implements OnInit {

  public desaparecidoId: any;
  public desaparecido = {} as Desaparecidos;

  public larguraImagem: number = 200;
  public margemImagem: number = 2;
  public exibirImagem: boolean = true;
  public whatsUrl: string = "https://wa.me/?text=";
  public faceUrl: string = "https://www.facebook.com/sharer/sharer.php?u=";

  modalRef: BsModalRef;

  public registerForm: FormGroup;

  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();

  get f(): any {
    return this.registerForm.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private desaparecidoService: DesaparecidoService,
    private modalService: BsModalService,
    private localeService: BsLocaleService,
    ) {
      this.localeService.use('pt-br');
    }

  public ngOnInit() {
    this.getDesaparecidos();
    this.ConfigData();
    this.validation();
  }

  public ConfigData(): void{
    this.minDate.setDate(this.minDate.getDate() - 1);
      this.maxDate.setDate(this.maxDate.getDate() + 7);
      this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  public getDesaparecidos(): void {
    this.desaparecidoId = this.activatedRouter.snapshot.paramMap.get('id');
    let desaparecidoId = parseInt(this.desaparecidoId);
    this.desaparecidoService.getDesaparecido(desaparecidoId).subscribe({
      next: (response: Desaparecidos) => {
        console.log('Desaparecidos(0): ', response)
        this.desaparecido = response;
      },
      error: (error: any) => {
        console.error('Erro na api', error.message);
      }
    });
  }

  public voltar(): void {
    this.router.navigate([`desaparecidos/lista`]);
  }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  get bsConfig(): any {
    return {
      adaptivePosition: true,
      dateInputFormat: 'DD/MM/YYYY',
      containerClass: 'theme-default',
      showWeekNumbers: false,
    };
  }

  public validation(): void {
    this.registerForm = this.fb.group({
      ocoId: [0, null],
      dataVisualizacao: ['', Validators.required],
      descricao: ['', [Validators.required]],
      arquivoAnexo: ['', null],
      informacao: ['', Validators.required]
    });
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  public resetForm(): void {
    this.registerForm.reset();
  }

  public salvar():void {

    const formData = new FormData();
    formData.append('ocoId', this.desaparecido.ultimaOcorrencia.ocoId.toString());
    formData.append('data',this.registerForm.get('dataVisualizacao')?.value );
    formData.append('descricao',this.registerForm.get('descricao')?.value );
    formData.append('file', this.registerForm.get('arquivoAnexo')?.value);
    formData.append('informacao',this.registerForm.get('informacao')?.value );

    this.desaparecidoService.postDesaparecido(formData).subscribe({
      next: (response: any) => {
        //this.desaparecido = response;
        alert('Dados Gravados Com Sucesso.')
      },
      error: (error: any) => {
        console.error('Erro na api', error.message);
      }
    });

    this.modalRef.hide();
  }

  public onFileSelect(event:any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get('file')?.setValue(file);
    }
  }

}
