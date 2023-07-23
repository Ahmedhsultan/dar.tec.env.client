import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPluginButtonComponent } from './add-plugin-button.component';

describe('AddPluginButtonComponent', () => {
  let component: AddPluginButtonComponent;
  let fixture: ComponentFixture<AddPluginButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPluginButtonComponent]
    });
    fixture = TestBed.createComponent(AddPluginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
