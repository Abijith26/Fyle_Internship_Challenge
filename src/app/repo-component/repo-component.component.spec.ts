import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoComponentComponent } from './repo-component.component';

describe('RepoComponentComponent', () => {
  let component: RepoComponentComponent;
  let fixture: ComponentFixture<RepoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
