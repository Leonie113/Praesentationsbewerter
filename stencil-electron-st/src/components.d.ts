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
    'name': string;
  }
  interface AnmerkungsFeldAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface AppAuswertung {
    'test': string;
  }
  interface AppAuswertungAttributes extends StencilHTMLAttributes {
    'test'?: string;
  }

  interface AppBewertung {}
  interface AppBewertungAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AufklappButtonKurz {
    'test': string;
  }
  interface AufklappButtonKurzAttributes extends StencilHTMLAttributes {
    'test'?: string;
  }

  interface AufklappButton {
    'test': string;
  }
  interface AufklappButtonAttributes extends StencilHTMLAttributes {
    'test'?: string;
  }

  interface EingabeFelder {
    'forgotPasswordUrl': string;
  }
  interface EingabeFelderAttributes extends StencilHTMLAttributes {
    'forgotPasswordUrl'?: string;
    'onLoginShouldOccur'?: (event: CustomEvent) => void;
  }

  interface ExportButton {
    'button': string;
  }
  interface ExportButtonAttributes extends StencilHTMLAttributes {
    'button'?: string;
  }

  interface FooterLeonie {}
  interface FooterLeonieAttributes extends StencilHTMLAttributes {}

  interface FormularLarissa {
    'ueberpruefeEingabe': () => Promise<void>;
    'value': string;
  }
  interface FormularLarissaAttributes extends StencilHTMLAttributes {
    'onChanged'?: (event: CustomEvent<string>) => void;
    'value'?: string;
  }

  interface HeaderLeonie {}
  interface HeaderLeonieAttributes extends StencilHTMLAttributes {}

  interface HeadlineMittig {
    'text': string;
  }
  interface HeadlineMittigAttributes extends StencilHTMLAttributes {
    'text'?: string;
  }

  interface ReglerWertung {
    'regler': string;
    'value': number;
  }
  interface ReglerWertungAttributes extends StencilHTMLAttributes {
    'regler'?: string;
    'value'?: number;
  }

  interface WeiterButton {}
  interface WeiterButtonAttributes extends StencilHTMLAttributes {}

  interface ZurueckButton {}
  interface ZurueckButtonAttributes extends StencilHTMLAttributes {}
}

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
    interface BewertungEnd {
        "button": string;
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

  interface StencilElementInterfaces {
    'AnmerkungsFeld': Components.AnmerkungsFeld;
    'AppAuswertung': Components.AppAuswertung;
    'AppBewertung': Components.AppBewertung;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'AufklappButtonKurz': Components.AufklappButtonKurz;
    'AufklappButton': Components.AufklappButton;
    'EingabeFelder': Components.EingabeFelder;
    'ExportButton': Components.ExportButton;
    'FooterLeonie': Components.FooterLeonie;
    'FormularLarissa': Components.FormularLarissa;
    'HeaderLeonie': Components.HeaderLeonie;
    'HeadlineMittig': Components.HeadlineMittig;
    'ReglerWertung': Components.ReglerWertung;
    'WeiterButton': Components.WeiterButton;
    'ZurueckButton': Components.ZurueckButton;
  }

  interface StencilIntrinsicElements {
    'anmerkungs-feld': Components.AnmerkungsFeldAttributes;
    'app-auswertung': Components.AppAuswertungAttributes;
    'app-bewertung': Components.AppBewertungAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'aufklapp-button-kurz': Components.AufklappButtonKurzAttributes;
    'aufklapp-button': Components.AufklappButtonAttributes;
    'eingabe-felder': Components.EingabeFelderAttributes;
    'export-button': Components.ExportButtonAttributes;
    'footer-leonie': Components.FooterLeonieAttributes;
    'formular-larissa': Components.FormularLarissaAttributes;
    'header-leonie': Components.HeaderLeonieAttributes;
    'headline-mittig': Components.HeadlineMittigAttributes;
    'regler-wertung': Components.ReglerWertungAttributes;
    'weiter-button': Components.WeiterButtonAttributes;
    'zurueck-button': Components.ZurueckButtonAttributes;
  }


  interface HTMLAnmerkungsFeldElement extends Components.AnmerkungsFeld, HTMLStencilElement {}
  var HTMLAnmerkungsFeldElement: {
    prototype: HTMLAnmerkungsFeldElement;
    new (): HTMLAnmerkungsFeldElement;
  };

  interface HTMLAppAuswertungElement extends Components.AppAuswertung, HTMLStencilElement {}
  var HTMLAppAuswertungElement: {
    prototype: HTMLAppAuswertungElement;
    new (): HTMLAppAuswertungElement;
  };

  interface HTMLAppBewertungElement extends Components.AppBewertung, HTMLStencilElement {}
  var HTMLAppBewertungElement: {
    prototype: HTMLAppBewertungElement;
    new (): HTMLAppBewertungElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAufklappButtonKurzElement extends Components.AufklappButtonKurz, HTMLStencilElement {}
  var HTMLAufklappButtonKurzElement: {
    prototype: HTMLAufklappButtonKurzElement;
    new (): HTMLAufklappButtonKurzElement;
  };

  interface HTMLAufklappButtonElement extends Components.AufklappButton, HTMLStencilElement {}
  var HTMLAufklappButtonElement: {
    prototype: HTMLAufklappButtonElement;
    new (): HTMLAufklappButtonElement;
  };

  interface HTMLEingabeFelderElement extends Components.EingabeFelder, HTMLStencilElement {}
  var HTMLEingabeFelderElement: {
    prototype: HTMLEingabeFelderElement;
    new (): HTMLEingabeFelderElement;
  };

  interface HTMLExportButtonElement extends Components.ExportButton, HTMLStencilElement {}
  var HTMLExportButtonElement: {
    prototype: HTMLExportButtonElement;
    new (): HTMLExportButtonElement;
  };

  interface HTMLFooterLeonieElement extends Components.FooterLeonie, HTMLStencilElement {}
  var HTMLFooterLeonieElement: {
    prototype: HTMLFooterLeonieElement;
    new (): HTMLFooterLeonieElement;
  };

  interface HTMLFormularLarissaElement extends Components.FormularLarissa, HTMLStencilElement {}
  var HTMLFormularLarissaElement: {
    prototype: HTMLFormularLarissaElement;
    new (): HTMLFormularLarissaElement;
  };

  interface HTMLHeaderLeonieElement extends Components.HeaderLeonie, HTMLStencilElement {}
  var HTMLHeaderLeonieElement: {
    prototype: HTMLHeaderLeonieElement;
    new (): HTMLHeaderLeonieElement;
  };

  interface HTMLHeadlineMittigElement extends Components.HeadlineMittig, HTMLStencilElement {}
  var HTMLHeadlineMittigElement: {
    prototype: HTMLHeadlineMittigElement;
    new (): HTMLHeadlineMittigElement;
  };

  interface HTMLReglerWertungElement extends Components.ReglerWertung, HTMLStencilElement {}
  var HTMLReglerWertungElement: {
    prototype: HTMLReglerWertungElement;
    new (): HTMLReglerWertungElement;
  };

  interface HTMLWeiterButtonElement extends Components.WeiterButton, HTMLStencilElement {}
  var HTMLWeiterButtonElement: {
    prototype: HTMLWeiterButtonElement;
    new (): HTMLWeiterButtonElement;
  };

  interface HTMLZurueckButtonElement extends Components.ZurueckButton, HTMLStencilElement {}
  var HTMLZurueckButtonElement: {
    prototype: HTMLZurueckButtonElement;
    new (): HTMLZurueckButtonElement;
  };

  interface HTMLElementTagNameMap {
    'anmerkungs-feld': HTMLAnmerkungsFeldElement
    'app-auswertung': HTMLAppAuswertungElement
    'app-bewertung': HTMLAppBewertungElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'aufklapp-button-kurz': HTMLAufklappButtonKurzElement
    'aufklapp-button': HTMLAufklappButtonElement
    'eingabe-felder': HTMLEingabeFelderElement
    'export-button': HTMLExportButtonElement
    'footer-leonie': HTMLFooterLeonieElement
    'formular-larissa': HTMLFormularLarissaElement
    'header-leonie': HTMLHeaderLeonieElement
    'headline-mittig': HTMLHeadlineMittigElement
    'regler-wertung': HTMLReglerWertungElement
    'weiter-button': HTMLWeiterButtonElement
    'zurueck-button': HTMLZurueckButtonElement
  }

  interface ElementTagNameMap {
    'anmerkungs-feld': HTMLAnmerkungsFeldElement;
    'app-auswertung': HTMLAppAuswertungElement;
    'app-bewertung': HTMLAppBewertungElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'aufklapp-button-kurz': HTMLAufklappButtonKurzElement;
    'aufklapp-button': HTMLAufklappButtonElement;
    'eingabe-felder': HTMLEingabeFelderElement;
    'export-button': HTMLExportButtonElement;
    'footer-leonie': HTMLFooterLeonieElement;
    'formular-larissa': HTMLFormularLarissaElement;
    'header-leonie': HTMLHeaderLeonieElement;
    'headline-mittig': HTMLHeadlineMittigElement;
    'regler-wertung': HTMLReglerWertungElement;
    'weiter-button': HTMLWeiterButtonElement;
    'zurueck-button': HTMLZurueckButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}


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
    interface HTMLBewertungEndElement extends Components.BewertungEnd, HTMLStencilElement {
    }
    var HTMLBewertungEndElement: {
        prototype: HTMLBewertungEndElement;
        new (): HTMLBewertungEndElement;
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
        "bewertung-end": HTMLBewertungEndElement;
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
    interface BewertungEnd {
        "button"?: string;
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
        "bewertung-end": BewertungEnd;
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
            "bewertung-end": LocalJSX.BewertungEnd & JSXBase.HTMLAttributes<HTMLBewertungEndElement>;
            "export-button": LocalJSX.ExportButton & JSXBase.HTMLAttributes<HTMLExportButtonElement>;
            "footer-leonie": LocalJSX.FooterLeonie & JSXBase.HTMLAttributes<HTMLFooterLeonieElement>;
            "formular-larissa": LocalJSX.FormularLarissa & JSXBase.HTMLAttributes<HTMLFormularLarissaElement>;
            "header-leonie": LocalJSX.HeaderLeonie & JSXBase.HTMLAttributes<HTMLHeaderLeonieElement>;
            "regler-wertung": LocalJSX.ReglerWertung & JSXBase.HTMLAttributes<HTMLReglerWertungElement>;
        }

}
