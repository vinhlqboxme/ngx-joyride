export declare class DomRefService {
    protected platformId: Object;
    protected fakeDocument: Document;
    protected fakeWindow: Window;
    constructor(platformId: Object);
    getNativeWindow(): Window;
    getNativeDocument(): Document;
}
