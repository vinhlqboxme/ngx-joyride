import { JoyrideOptions, CustomTexts, ICustomTexts } from '../models/joyride-options.class';
import { Observable } from 'rxjs';
export declare const DEFAULT_THEME_COLOR = "#3b5560";
export declare const STEP_DEFAULT_POSITION = "bottom";
export declare const DEFAULT_TIMEOUT_BETWEEN_STEPS = 1;
export declare class ObservableCustomTexts implements ICustomTexts {
    prev: Observable<string>;
    next: Observable<string>;
    done: Observable<string>;
    close: Observable<string>;
}
export declare const DEFAULT_TEXTS: ObservableCustomTexts;
export interface IJoyrideOptionsService {
    setOptions(options: JoyrideOptions): void;
    getBackdropColor(): string;
    getThemeColor(): string;
    getStepDefaultPosition(): any;
    getStepsOrder(): string[];
    getFirstStep(): string;
    getWaitingTime(): number;
    areLogsEnabled(): boolean;
    isCounterVisible(): boolean;
    isPrevButtonVisible(): boolean;
    getCustomTexts(): ObservableCustomTexts;
}
export declare class JoyrideOptionsService implements IJoyrideOptionsService {
    protected themeColor: string;
    protected stepDefaultPosition: string;
    protected logsEnabled: boolean;
    protected showCounter: boolean;
    protected showPrevButton: boolean;
    protected stepsOrder: string[];
    protected firstStep: string;
    protected waitingTime: number;
    protected customTexts: ObservableCustomTexts;
    setOptions(options: JoyrideOptions): void;
    getBackdropColor(): string;
    getThemeColor(): string;
    getStepDefaultPosition(): string;
    getStepsOrder(): string[];
    getFirstStep(): string;
    getWaitingTime(): number;
    areLogsEnabled(): boolean;
    isCounterVisible(): boolean;
    isPrevButtonVisible(): boolean;
    getCustomTexts(): ObservableCustomTexts;
    protected setCustomText(texts: CustomTexts): void;
    protected toObservable(value: string | Observable<string>): Observable<string>;
    protected hexToRgb(hex: any): string;
}
