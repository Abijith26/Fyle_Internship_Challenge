import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchComponentComponent } from './search-component.component';

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// Test case - 1 (Form Submission)

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponentComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call the Submit() function on form submission', () => {
    spyOn(component, 'Submit');
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit'));
    fixture.detectChanges();
    expect(component.Submit).toHaveBeenCalled();
  });
});

// Test case - 2 (Form Input Binding)
describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponentComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should bind input value to component property', fakeAsync(() => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'TestUser';
    inputElement.dispatchEvent(new Event('input'));
    tick();
    expect(component.username).toEqual('TestUser');
  }));
});

// Test case - 3 (Data Fetching)

describe('SearchComponentComponent', () => {
  let component: SearchComponentComponent;
  let fixture: ComponentFixture<SearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponentComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call fetch() with correct API endpoints on form submission', fakeAsync(() => {
    spyOn(window, 'fetch').and.returnValue(
      Promise.resolve(new Response(JSON.stringify({}), { status: 200 }))
    );
    const form = fixture.nativeElement.querySelector('form');
    component.username = 'TestUser';
    form.dispatchEvent(new Event('ngSubmit'));
    tick();

    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/TestUser'
    );
    expect(window.fetch).toHaveBeenCalledWith(
      'https://api.github.com/users/TestUser/repos'
    );
  }));
});
