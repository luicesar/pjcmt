/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DesaparecidoService } from './desaparecido.service';

describe('Service: Desaparecido', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesaparecidoService]
    });
  });

  it('should ...', inject([DesaparecidoService], (service: DesaparecidoService) => {
    expect(service).toBeTruthy();
  }));
});
