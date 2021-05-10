import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateUnoComponent } from './template-uno.component';

describe('TemplateUnoComponent', () => {
  let component: TemplateUnoComponent;
  let fixture: ComponentFixture<TemplateUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
