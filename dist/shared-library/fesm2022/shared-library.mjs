import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class SharedLibraryService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: SharedLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: SharedLibraryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: SharedLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class SharedLibraryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: SharedLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.1.3", type: SharedLibraryComponent, isStandalone: true, selector: "lib-shared-library", ngImport: i0, template: `
    <p>
      shared-library works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.1.3", ngImport: i0, type: SharedLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared-library', imports: [], template: `
    <p>
      shared-library works!
    </p>
  ` }]
        }] });

var AddressType;
(function (AddressType) {
    AddressType["PHYSICAL"] = "PHYSICAL";
    AddressType["MAILING"] = "MAILING";
    AddressType["SHIPPING"] = "SHIPPING";
})(AddressType || (AddressType = {}));

/*
 * Public API Surface of shared-library
 */
// export * from './lib/components';
// export * from './lib/directives';
// export * from './lib/models';
// export * from './lib/services';

/**
 * Generated bundle index. Do not edit.
 */

export { AddressType, SharedLibraryComponent, SharedLibraryService };
//# sourceMappingURL=shared-library.mjs.map
