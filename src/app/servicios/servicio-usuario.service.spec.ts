import { TestBed } from '@angular/core/testing';

import { ServicioUsuarioService } from './servicio-usuario.service';

describe('ServicioUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioUsuarioService = TestBed.get(ServicioUsuarioService);
    expect(service).toBeTruthy();
  });
});
