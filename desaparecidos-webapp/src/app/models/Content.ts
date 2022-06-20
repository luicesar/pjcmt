import { UltimaOcorrencia } from "./UltimaOcorrencia";

export interface Content {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string;
  ultimaOcorrencia: UltimaOcorrencia;
}
