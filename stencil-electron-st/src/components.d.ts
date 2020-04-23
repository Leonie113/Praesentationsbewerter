/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, } from "@stencil/router";
export namespace Components {
    interface AnmerkungsFeld {
        "test": string;
    }
    interface AppBewertung {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface AufklappButton {
        "test": string;
    }
    interface ExportButton {
        "button": string;
    }
    interface FooterLeonie {
    }
    interface FormularLarissa {
        "ueberpruefeEingabe": () => Promise<void>;
        "value": string;
    }
    interface HeaderLeonie {
    }
    interface ReglerWertung {
        "regler": string;
        "value": number;
    }
}
declare global {
    interface HTMLAnmerkungsFeldElement extends Components.AnmerkungsFeld, HTMLStencilElement {
    }
    var HTMLAnmerkungsFeldElement: {
        prototype: HTMLAnmerkungsFeldElement;
        new (): HTMLAnmerkungsFeldElement;
    };
    interface HTMLAppBewertungElement extends Components.AppBewertung, HTMLStencilElement {
    }
    var HTMLAppBewertungElement: {
        prototype: HTMLAppBewertungElement;
        new (): HTMLAppBewertungElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAufklappButtonElement extends Components.AufklappButton, HTMLStencilElement {
    }
    var HTMLAufklappButtonElement: {
        prototype: HTMLAufklappButtonElement;
        new (): HTMLAufklappButtonElement;
    };
    interface HTMLExportButtonElement extends Components.ExportButton, HTMLStencilElement {
    }
    var HTMLExportButtonElement: {
        prototype: HTMLExportButtonElement;
        new (): HTMLExportButtonElement;
    };
    interface HTMLFooterLeonieElement extends Components.FooterLeonie, HTMLStencilElement {
    }
    var HTMLFooterLeonieElement: {
        prototype: HTMLFooterLeonieElement;
        new (): HTMLFooterLeonieElement;
    };
    interface HTMLFormularLarissaElement extends Components.FormularLarissa, HTMLStencilElement {
    }
    var HTMLFormularLarissaElement: {
        prototype: HTMLFormularLarissaElement;
        new (): HTMLFormularLarissaElement;
    };
    interface HTMLHeaderLeonieElement extends Components.HeaderLeonie, HTMLStencilElement {
    }
    var HTMLHeaderLeonieElement: {
        prototype: HTMLHeaderLeonieElement;
        new (): HTMLHeaderLeonieElement;
    };
    interface HTMLReglerWertungElement extends Components.ReglerWertung, HTMLStencilElement {
    }
    var HTMLReglerWertungElement: {
        prototype: HTMLReglerWertungElement;
        new (): HTMLReglerWertungElement;
    };
    interface HTMLElementTagNameMap {
        "anmerkungs-feld": HTMLAnmerkungsFeldElement;
        "app-bewertung": HTMLAppBewertungElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "aufklapp-button": HTMLAufklappButtonElement;
        "export-button": HTMLExportButtonElement;
        "footer-leonie": HTMLFooterLeonieElement;
        "formular-larissa": HTMLFormularLarissaElement;
        "header-leonie": HTMLHeaderLeonieElement;
        "regler-wertung": HTMLReglerWertungElement;
    }
}
declare namespace LocalJSX {
    interface AnmerkungsFeld {
        "test"?: string;
    }
    interface AppBewertung {
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface AufklappButton {
        "test"?: string;
    }
    interface ExportButton {
        "button"?: string;
    }
    interface FooterLeonie {
    }
    interface FormularLarissa {
        "onChanged"?: (event: CustomEvent<string>) => void;
        "value"?: string;
    }
    interface HeaderLeonie {
    }
    interface ReglerWertung {
        "regler"?: string;
        "value"?: number;
    }
    interface IntrinsicElements {
        "anmerkungs-feld": AnmerkungsFeld;
        "app-bewertung": AppBewertung;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "aufklapp-button": AufklappButton;
        "export-button": ExportButton;
        "footer-leonie": FooterLeonie;
        "formular-larissa": FormularLarissa;
        "header-leonie": HeaderLeonie;
        "regler-wertung": ReglerWertung;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anmerkungs-feld": LocalJSX.AnmerkungsFeld & JSXBase.HTMLAttributes<HTMLAnmerkungsFeldElement>;
            "app-bewertung": LocalJSX.AppBewertung & JSXBase.HTMLAttributes<HTMLAppBewertungElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "aufklapp-button": LocalJSX.AufklappButton & JSXBase.HTMLAttributes<HTMLAufklappButtonElement>;
            "export-button": LocalJSX.ExportButton & JSXBase.HTMLAttributes<HTMLExportButtonElement>;
            "footer-leonie": LocalJSX.FooterLeonie & JSXBase.HTMLAttributes<HTMLFooterLeonieElement>;
            "formular-larissa": LocalJSX.FormularLarissa & JSXBase.HTMLAttributes<HTMLFormularLarissaElement>;
            "header-leonie": LocalJSX.HeaderLeonie & JSXBase.HTMLAttributes<HTMLHeaderLeonieElement>;
            "regler-wertung": LocalJSX.ReglerWertung & JSXBase.HTMLAttributes<HTMLReglerWertungElement>;
        }
    }
}
