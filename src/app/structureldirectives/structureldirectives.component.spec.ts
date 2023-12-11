import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureldirectivesComponent } from './structureldirectives.component';

describe('StructureldirectivesComponent', () => {
  let component: StructureldirectivesComponent;
  let fixture: ComponentFixture<StructureldirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructureldirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StructureldirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
