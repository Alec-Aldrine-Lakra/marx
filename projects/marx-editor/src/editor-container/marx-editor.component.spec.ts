import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarxEditorComponent } from './marx-editor.component';

describe('MarxEditorComponent', () => {
  let component: MarxEditorComponent;
  let fixture: ComponentFixture<MarxEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarxEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarxEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
