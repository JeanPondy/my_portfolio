import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPolloLocComponent } from './el-pollo-loc.component';

describe('ElPolloLocComponent', () => {
  let component: ElPolloLocComponent;
  let fixture: ComponentFixture<ElPolloLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElPolloLocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElPolloLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
