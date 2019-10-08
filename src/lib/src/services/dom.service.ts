import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class DomRefService {
    public fakeDocument: Document = <Document>{ body: {}, documentElement: {} };
    public fakeWindow: Window = <Window>{ document: this.fakeDocument, navigator: {} };
    constructor(@Inject(PLATFORM_ID) public platformId: Object) {}
    getNativeWindow(): Window {
        if (isPlatformBrowser(this.platformId)) return window;
        else return this.fakeWindow;
    }

    getNativeDocument() {
        if (isPlatformBrowser(this.platformId)) return document;
        else return this.fakeDocument;
    }
}
