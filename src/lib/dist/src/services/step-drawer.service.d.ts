import { ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import { JoyrideStepComponent } from "../components/step/joyride-step.component";
import { JoyrideStep } from '../models/joyride-step.class';
export declare class StepDrawerService {
    protected readonly componentFactoryResolver: ComponentFactoryResolver;
    protected appRef: ApplicationRef;
    protected injector: Injector;
    protected refMap: {
        [key: string]: ComponentRef<JoyrideStepComponent>;
    };
    constructor(componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector);
    draw(step: JoyrideStep): void;
    remove(step: JoyrideStep): void;
}
