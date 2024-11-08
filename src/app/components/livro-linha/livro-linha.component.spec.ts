import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroLinhaComponent } from './livro-linha.component';

describe('LivroLinhaComponent', () => {
  let component: LivroLinhaComponent;
  let fixture: ComponentFixture<LivroLinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroLinhaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivroLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
