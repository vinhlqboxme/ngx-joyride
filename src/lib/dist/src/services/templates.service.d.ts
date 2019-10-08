import { TemplateRef } from "@angular/core";
export declare class TemplatesService {
    protected _prevButton: TemplateRef<any>;
    protected _nextButton: TemplateRef<any>;
    protected _doneButton: TemplateRef<any>;
    protected _counter: TemplateRef<any>;
    setPrevButton(template: TemplateRef<any>): void;
    getPrevButton(): TemplateRef<any>;
    setNextButton(template: TemplateRef<any>): void;
    getNextButton(): TemplateRef<any>;
    setDoneButton(template: TemplateRef<any>): void;
    getDoneButton(): TemplateRef<any>;
    setCounter(template: TemplateRef<any>): void;
    getCounter(): TemplateRef<any>;
}
