import { ElementRef } from '@angular/core';
import { DomRefService } from './dom.service';
export interface IDocumentService {
    getElementFixedTop(elementRef: ElementRef): number;
    getElementFixedLeft(elementRef: ElementRef): any;
    getElementAbsoluteTop(elementRef: ElementRef): any;
    getElementAbsoluteLeft(elementRef: ElementRef): any;
    setDocumentHeight(): any;
    getDocumentHeight(): number;
    isParentScrollable(elementRef: ElementRef): boolean;
    isElementBeyondOthers(elementRef: ElementRef, isElementFixed: boolean, keywordToDiscard: string): number;
    scrollToTheTop(elementRef: ElementRef): void;
    scrollToTheBottom(elementRef: ElementRef): void;
}
export declare class DocumentService implements IDocumentService {
    protected readonly DOMService: DomRefService;
    protected documentHeight: number;
    constructor(DOMService: DomRefService);
    getElementFixedTop(elementRef: ElementRef): any;
    getElementFixedLeft(elementRef: ElementRef): any;
    getElementAbsoluteTop(elementRef: ElementRef): any;
    getElementAbsoluteLeft(elementRef: ElementRef): any;
    setDocumentHeight(): void;
    getDocumentHeight(): number;
    isParentScrollable(elementRef: ElementRef): boolean;
    isElementBeyondOthers(elementRef: ElementRef, isElementFixed: boolean, keywordToDiscard: string): 1 | 2 | 3;
    scrollIntoView(elementRef: ElementRef, isElementFixed: boolean): void;
    scrollToTheTop(elementRef: ElementRef): void;
    scrollToTheBottom(elementRef: ElementRef): void;
    protected getFirstScrollableParent(node: any): any;
    protected calculateDocumentHeight(): number;
    protected getScrollOffsets(): {
        x: number;
        y: number;
    };
    protected elementsFromPoint(x: any, y: any): any[];
    protected getFirstElementWithoutKeyword(elements: Element[], keyword: string): Element;
}
