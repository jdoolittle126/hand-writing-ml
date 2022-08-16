import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ModelTesterComponent} from './model-tester.component';

describe('ModelTesterComponent', () => {
    let component: ModelTesterComponent;
    let fixture: ComponentFixture<ModelTesterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModelTesterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModelTesterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
