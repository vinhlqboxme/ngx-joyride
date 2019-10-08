import {
    Directive,
    ElementRef,
    AfterViewInit,
    Input,
    ViewContainerRef,
    TemplateRef,
    Output,
    EventEmitter,
    Inject,
    PLATFORM_ID,
    OnChanges,
    SimpleChanges,
    OnDestroy
} from '@angular/core';
import { JoyrideStep } from '../models/joyride-step.class';
import { JoyrideStepsContainerService } from '../services/joyride-steps-container.service';
import { JoyrideError } from '../models/joyride-error.class';
import { Router } from '@angular/router';
import { DomRefService } from '../services/dom.service';
import { isPlatformBrowser } from '@angular/common';
import { TemplatesService } from '../services/templates.service';
import { Observable, Subscription } from 'rxjs';

export const NO_POSITION = 'NO_POSITION';

@Directive({
    selector: 'joyrideStep, [joyrideStep]'
})
export class JoyrideDirective implements AfterViewInit, OnChanges, OnDestroy {
    @Input('joyrideStep')
    name: string;

    @Input()
    nextStep?: string;

    @Input()
    title?: string | Observable<string>;

    @Input()
    text?: string | Observable<string>;

    @Input()
    stepPosition?: string = NO_POSITION;

    @Input()
    stepContent?: TemplateRef<any>;

    @Input()
    stepContentParams?: Object;

    @Input()
    prevTemplate?: TemplateRef<any>;

    @Input()
    nextTemplate?: TemplateRef<any>;

    @Input()
    doneTemplate?: TemplateRef<any>;

    @Input()
    counterTemplate?: TemplateRef<any>;

    @Output()
    prev?: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    next?: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    done?: EventEmitter<any> = new EventEmitter<any>();

    public windowRef: Window;
    public step: JoyrideStep;
    public subscriptions: Subscription[] = [];

    constructor(
        public readonly joyrideStepsContainer: JoyrideStepsContainerService,
        public viewContainerRef: ViewContainerRef,
        public readonly domService: DomRefService,
        public readonly router: Router,
        public readonly templateService: TemplatesService,
        @Inject(PLATFORM_ID) public platformId: Object
    ) {
        this.windowRef = this.domService.getNativeWindow();
        this.step = new JoyrideStep();
    }

    ngAfterViewInit() {
        if (!isPlatformBrowser(this.platformId)) return;
        if (this.prevTemplate) this.templateService.setPrevButton(this.prevTemplate);
        if (this.nextTemplate) this.templateService.setNextButton(this.nextTemplate);
        if (this.doneTemplate) this.templateService.setDoneButton(this.doneTemplate);
        if (this.counterTemplate) this.templateService.setCounter(this.counterTemplate);
        this.step.position = this.stepPosition;
        this.step.targetViewContainer = this.viewContainerRef;
        this.setAsyncFields(this.step);
        this.step.stepContent = this.stepContent;
        this.step.stepContentParams = this.stepContentParams;
        this.step.nextClicked = this.next;
        this.step.prevCliked = this.prev;
        this.step.tourDone = this.done;
        if (!this.name) throw new JoyrideError("All the steps should have the 'joyrideStep' property set with a custom name.");
        this.step.name = this.name;
        this.step.route = this.router.url.substr(0, 1) === '/' ? this.router.url.substr(1) : this.router.url;
        this.step.transformCssStyle = this.windowRef.getComputedStyle(this.viewContainerRef.element.nativeElement).transform;
        this.step.isElementOrAncestorFixed =
            this.isElementFixed(this.viewContainerRef.element) ||
            this.isAncestorsFixed(this.viewContainerRef.element.nativeElement.parentElement);

        this.joyrideStepsContainer.addStep(this.step);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['title'] || changes['text']) {
            this.setAsyncFields(this.step);
        }
    }

    public isElementFixed(element: ElementRef) {
        return this.windowRef.getComputedStyle(element.nativeElement).position === 'fixed';
    }

    public setAsyncFields(step: JoyrideStep) {
        if (this.title instanceof Observable) {
            this.subscriptions.push(
                this.title.subscribe(title => {
                    step.title.next(title);
                })
            );
        } else {
            step.title.next(this.title);
        }
        if (this.text instanceof Observable) {
            this.subscriptions.push(
                this.text.subscribe(text => {
                    step.text.next(text);
                })
            );
        } else {
            step.text.next(this.text);
        }
    }

    public isAncestorsFixed(nativeElement: any): boolean {
        if (!nativeElement || !nativeElement.parentElement) return false;
        let isElementFixed = this.windowRef.getComputedStyle(nativeElement.parentElement).position === 'fixed';
        if (nativeElement.nodeName === 'BODY') {
            return isElementFixed;
        }
        if (isElementFixed) return true;
        else return this.isAncestorsFixed(nativeElement.parentElement);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
