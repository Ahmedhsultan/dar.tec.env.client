import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginListComponent } from './plugin-list.component';

describe('PluginListComponent', () => {
  let component: PluginListComponent;
  let fixture: ComponentFixture<PluginListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluginListComponent]
    });
    fixture = TestBed.createComponent(PluginListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
