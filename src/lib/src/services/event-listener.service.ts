import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Subject } from 'rxjs';
import { DomRefService } from './dom.service';

export class Scroll {
    scrollX: number;
    scrollY: number;
}

@Injectable()
export class EventListenerService {
    protected renderer: Renderer2;
    protected scrollUnlisten: any;
    protected resizeUnlisten: any;

    scrollEvent: Subject<Scroll> = new Subject<Scroll>();
    resizeEvent: Subject<number> = new Subject<number>();

    constructor(protected readonly rendererFactory: RendererFactory2, protected readonly DOMService: DomRefService) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    startListeningScrollEvents() {
        this.scrollUnlisten = this.renderer.listen('document', 'scroll', evt => {
            this.scrollEvent.next({
                scrollX: this.DOMService.getNativeWindow().pageXOffset,
                scrollY: this.DOMService.getNativeWindow().pageYOffset
            });
        });
    }

    startListeningResizeEvents() {
        this.resizeUnlisten = this.renderer.listen('window', 'resize', evt => {
            this.resizeEvent.next(evt);
        });
    }

    stopListeningScrollEvents() {
        this.scrollUnlisten();
    }

    stopListeningResizeEvents() {
        this.resizeUnlisten();
    }
}
