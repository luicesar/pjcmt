import { UltimaOcorrencia } from "./UltimaOcorrencia";

export interface Desaparecidos {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto?: any;
  ultimaOcorrencia: UltimaOcorrencia;
}
