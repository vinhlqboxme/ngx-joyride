import { Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { DomRefService } from './dom.service';
export declare class Scroll {
    scrollX: number;
    scrollY: number;
}
export declare class EventListenerService {
    protected readonly rendererFactory: RendererFactory2;
    protected readonly DOMService: DomRefService;
    protected renderer: Renderer2;
    protected scrollUnlisten: any;
    protected resizeUnlisten: any;
    scrollEvent: Subject<Scroll>;
    resizeEvent: Subject<number>;
    constructor(rendererFactory: RendererFactory2, DOMService: DomRefService);
    startListeningScrollEvents(): void;
    startListeningResizeEvents(): void;
    stopListeningScrollEvents(): void;
    stopListeningResizeEvents(): void;
}
