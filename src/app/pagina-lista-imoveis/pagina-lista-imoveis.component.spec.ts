import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaListaImoveisComponent } from './pagina-lista-imoveis.component';

describe('PaginaListaImoveisComponent', () => {
  let component: PaginaListaImoveisComponent;
  let fixture: ComponentFixture<PaginaListaImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaListaImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaListaImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
