import { Injectable, TemplateRef } from "@angular/core";

@Injectable()
export class TemplatesService {
    public _prevButton: TemplateRef<any>;
    public _nextButton: TemplateRef<any>;
    public _doneButton: TemplateRef<any>;
    public _counter: TemplateRef<any>;
    
    setPrevButton(template: TemplateRef<any>) {
        this._prevButton = template;
    }

    getPrevButton() {
        return this._prevButton;
    }

    setNextButton(template: TemplateRef<any>) {
        this._nextButton = template;
    }

    getNextButton() {
        return this._nextButton;
    }

    setDoneButton(template: TemplateRef<any>) {
        this._doneButton = template;
    }

    getDoneButton() {
        return this._doneButton;
    }
    setCounter(template: TemplateRef<any>) {
        this._counter = template;
    }

    getCounter() {
        return this._counter;
    }
}
