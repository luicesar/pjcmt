import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { HttpClientModule} from '@angular/common/http';
import { DesaparecidosComponent } from './desaparecidos.component';
import { DesaparecidosListaComponent } from './desaparecidos-lista/desaparecidos-lista.component';
import { DesaparecidosDetalheComponent } from './desaparecidos-detalhe/desaparecidos-detalhe.component';
import { DesaparecidoService } from 'src/app/services/desaparecido.service';
import { PaginationPipePipe } from 'src/app/pipe/pagination-pipe.pipe';
import { DateTimeFormatPipePipe } from 'src/app/helps/DateTimeFormatPipe.pipe';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';

const routes: Routes = [
  { path: 'lista', component: DesaparecidosListaComponent },
  { path: 'detalhe/:id', component: DesaparecidosDetalheComponent },
];

defineLocale('pt-br', ptBrLocale);

@NgModule({
  declarations:[
    DesaparecidosComponent,
    DesaparecidosListaComponent,
    DesaparecidosDetalheComponent,
    PaginationPipePipe,
    DateTimeFormatPipePipe,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CollapseModule,
    TooltipModule,
    PaginationModule.forRoot(),
    ModalModule.forChild(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [DesaparecidoService,BsModalService, BsDatepickerConfig ]
})
export class DesaparecidosModule { }
