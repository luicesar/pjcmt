import { OcorrenciaEntrevDesapDTO } from "./OcorrenciaEntrevDesapDTO";

export interface UltimaOcorrencia {
  dtDesaparecimento: Date;
  dataLocalizacao?: any;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO;
  listaCartaz?: any;
  ocoId: number;
}
