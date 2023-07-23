import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPluginDialogComponent } from './add-plugin-dialog.component';

describe('AddPluginDialogComponent', () => {
  let component: AddPluginDialogComponent;
  let fixture: ComponentFixture<AddPluginDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPluginDialogComponent]
    });
    fixture = TestBed.createComponent(AddPluginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
