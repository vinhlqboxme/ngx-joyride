import { JoyrideStep } from '../models/joyride-step.class';
import { Subject } from 'rxjs';
import { JoyrideOptionsService } from './joyride-options.service';
import { LoggerService } from './logger.service';
declare class Step {
    id: string;
    step: JoyrideStep;
}
export declare enum StepActionType {
    NEXT = "NEXT",
    PREV = "PREV"
}
export declare class JoyrideStepsContainerService {
    protected readonly stepOptions: JoyrideOptionsService;
    protected readonly logger: LoggerService;
    protected steps: Step[];
    protected tempSteps: JoyrideStep[];
    protected currentStepIndex: number;
    stepHasBeenModified: Subject<JoyrideStep>;
    constructor(stepOptions: JoyrideOptionsService, logger: LoggerService);
    protected getFirstStepIndex(): number;
    init(): void;
    addStep(stepToAdd: JoyrideStep): void;
    get(action: StepActionType): JoyrideStep;
    getStepRoute(action: StepActionType): string;
    updatePosition(stepName: string, position: string): void;
    getStepNumber(stepName: string): number;
    getStepsCount(): number;
    protected getStepIndex(stepName: string): number;
    protected getStepName(stepID: string): string;
}
export {};
