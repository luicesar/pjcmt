import { Component, OnInit } from '@angular/core';
import { Desaparecidos } from '../../../models/Desaparecidos';
import { ListaPessoasDesaparecidas } from '../../../models/ListaPessoasDesaparecidas';
import { DesaparecidoService } from '../../../services/desaparecido.service';
import  *  as  data  from  '../../../../api/desaparecidos.json';
import { Router } from '@angular/router';
import { Pagination } from 'src/app/models/Pagination';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-desaparecidos-lista',
  templateUrl: './desaparecidos-lista.component.html',
  styleUrls: ['./desaparecidos-lista.component.css']
})
export class DesaparecidosListaComponent implements OnInit {

  public desaparecidos: Desaparecidos[] = [];
  public desaparecidosLocal: any = [];
  public larguraImagem: number = 150;
  public margemImagem: number = 2;
  public exibirImagem: boolean = true;

  public pagination = {} as Pagination;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private desaparecidoService: DesaparecidoService) { }

  public ngOnInit(): void {
    this.pagination = {
      currentPage: 0,
      itemsPerPage: 10,
      totalItems: 0,
    } as Pagination;

    this.validation();
    this.getDesaparecidos(this.pagination.currentPage);
  }

  public validation(): void {
    this.form = this.fb.group({
      pesquisa: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  get f(): any {
    return this.form?.controls;
  }

  public alterarImagem(): void {
    this.exibirImagem = !this.exibirImagem;
  }

  public getDesaparecidos(currentPage: number): void {
      this.desaparecidoService.getListaDesaparecidos(
                      this.form.get('pesquisa')?.value,
                      currentPage,
                      this.pagination.itemsPerPage).subscribe({
        next: (response: ListaPessoasDesaparecidas) => {

          this.pagination.totalItems = response.totalElements;
          this.pagination.totalPages = response.totalPages;
          this.desaparecidos = response.content;
        },
        error: (error: any) => {
          console.error('Erro na api', error.message);
          this.getDesaparecidosLocal();
        }
      });
  }

  public getDesaparecidosLocal(): void {
    this.desaparecidosLocal = data;
    this.desaparecidos = this.desaparecidosLocal.content;
    console.log('Desaparecidos(Local): ', this.desaparecidosLocal.content)
  }

  public detalheDesaparecido(id: number): void {
    this.router.navigate([`desaparecidos/detalhe/${id}`]);
  }

  public pageChanged(event: any): void {
    this.getDesaparecidos(event.page-1);
  }

}
