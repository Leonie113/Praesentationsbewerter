/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
} from '@stencil/router';


export namespace Components {

  interface AnmerkungsFeld {
    'anmerkung': string;
    'guteAspekte': string;
    'verbesserung': string;
  }
  interface AnmerkungsFeldAttributes extends StencilHTMLAttributes {
    'anmerkung'?: string;
    'guteAspekte'?: string;
    'verbesserung'?: string;
  }

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

  interface AufklappButton {
    'Kriterium1': string;
    'Kriterium2': string;
    'Kriterium3': string;
    'Kriterium4': string;
    'Ueberschrift': string;
  }
  interface AufklappButtonAttributes extends StencilHTMLAttributes {
    'Kriterium1'?: string;
    'Kriterium2'?: string;
    'Kriterium3'?: string;
    'Kriterium4'?: string;
    'Ueberschrift'?: string;
  }

  interface AufklappInput {
    'Kriterium1': string;
    'Kriterium2': string;
    'Kriterium3': string;
    'Kriterium4': string;
    'Kriterium5': string;
    'Kriterium6': string;
    'Kriterium7': string;
    'Kriterium8': string;
    'Ueberschrift': string;
  }
  interface AufklappInputAttributes extends StencilHTMLAttributes {
    'Kriterium1'?: string;
    'Kriterium2'?: string;
    'Kriterium3'?: string;
    'Kriterium4'?: string;
    'Kriterium5'?: string;
    'Kriterium6'?: string;
    'Kriterium7'?: string;
    'Kriterium8'?: string;
    'Ueberschrift'?: string;
    'onLoginShouldOccur'?: (event: CustomEvent) => void;
  }

  interface AufklappKurz {
    'Kriterium1': string;
    'Kriterium2': string;
    'Ueberschrift': string;
  }
  interface AufklappKurzAttributes extends StencilHTMLAttributes {
    'Kriterium1'?: string;
    'Kriterium2'?: string;
    'Ueberschrift'?: string;
  }

  interface AuswertungButtonKurz {
    'gesamt': string;
    'kriteriumeins': string;
    'kriteriumzwei': string;
    'punkte': string;
    'regler': string;
    'reglerfuenf': string;
    'reglersechs': string;
    'ueberschrift': string;
    'value': number;
  }
  interface AuswertungButtonKurzAttributes extends StencilHTMLAttributes {
    'gesamt'?: string;
    'kriteriumeins'?: string;
    'kriteriumzwei'?: string;
    'punkte'?: string;
    'regler'?: string;
    'reglerfuenf'?: string;
    'reglersechs'?: string;
    'ueberschrift'?: string;
    'value'?: number;
  }

  interface AuswertungButton {
    'gesamt': string;
    'hallo': string;
    'kriteriumdrei': string;
    'kriteriumeins': string;
    'kriteriumvier': string;
    'kriteriumzwei': string;
    'punkte': string;
    'regler': string;
    'reglerdrei': string;
    'reglereins': string;
    'reglervier': string;
    'reglerzwei': string;
    'ueberschrift': string;
    'value': number;
  }
  interface AuswertungButtonAttributes extends StencilHTMLAttributes {
    'gesamt'?: string;
    'hallo'?: string;
    'kriteriumdrei'?: string;
    'kriteriumeins'?: string;
    'kriteriumvier'?: string;
    'kriteriumzwei'?: string;
    'punkte'?: string;
    'regler'?: string;
    'reglerdrei'?: string;
    'reglereins'?: string;
    'reglervier'?: string;
    'reglerzwei'?: string;
    'ueberschrift'?: string;
    'value'?: number;
  }

  interface AuswertungDaten {
    'Ueberschrift': string;
    'regler': string;
    'text': string;
    'value': number;
  }
  interface AuswertungDatenAttributes extends StencilHTMLAttributes {
    'Ueberschrift'?: string;
    'regler'?: string;
    'text'?: string;
    'value'?: number;
  }

  interface BewertungEnd {
    'button': string;
  }
  interface BewertungEndAttributes extends StencilHTMLAttributes {
    'button'?: string;
  }

  interface EingabeFelder {}
  interface EingabeFelderAttributes extends StencilHTMLAttributes {
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

  interface RadioInput {
    'Kriterium1': string;
    'Kriterium2': string;
    'Kriterium3': string;
    'Kriterium4': string;
    'Ueberschrift': string;
    'regler': string;
    'value': number;
  }
  interface RadioInputAttributes extends StencilHTMLAttributes {
    'Kriterium1'?: string;
    'Kriterium2'?: string;
    'Kriterium3'?: string;
    'Kriterium4'?: string;
    'Ueberschrift'?: string;
    'regler'?: string;
    'value'?: number;
  }

  interface ReglerWertung {
    'regler': string;
    'wert': string;
  }
  interface ReglerWertungAttributes extends StencilHTMLAttributes {
    'regler'?: string;
    'wert'?: string;
  }

  interface StartButton {}
  interface StartButtonAttributes extends StencilHTMLAttributes {}

  interface TableTest {}
  interface TableTestAttributes extends StencilHTMLAttributes {}

  interface TestLarissa {
    'noteend': any;
    'prozent': any;
    'punkte': any;
  }
  interface TestLarissaAttributes extends StencilHTMLAttributes {
    'noteend'?: any;
    'prozent'?: any;
    'punkte'?: any;
  }

  interface WeiterButton {}
  interface WeiterButtonAttributes extends StencilHTMLAttributes {}

  interface ZurueckButton {}
  interface ZurueckButtonAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AnmerkungsFeld': Components.AnmerkungsFeld;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
    'AufklappButton': Components.AufklappButton;
    'AufklappInput': Components.AufklappInput;
    'AufklappKurz': Components.AufklappKurz;
    'AuswertungButtonKurz': Components.AuswertungButtonKurz;
    'AuswertungButton': Components.AuswertungButton;
    'AuswertungDaten': Components.AuswertungDaten;
    'BewertungEnd': Components.BewertungEnd;
    'EingabeFelder': Components.EingabeFelder;
    'ExportButton': Components.ExportButton;
    'FooterLeonie': Components.FooterLeonie;
    'FormularLarissa': Components.FormularLarissa;
    'HeaderLeonie': Components.HeaderLeonie;
    'HeadlineMittig': Components.HeadlineMittig;
    'RadioInput': Components.RadioInput;
    'ReglerWertung': Components.ReglerWertung;
    'StartButton': Components.StartButton;
    'TableTest': Components.TableTest;
    'TestLarissa': Components.TestLarissa;
    'WeiterButton': Components.WeiterButton;
    'ZurueckButton': Components.ZurueckButton;
  }

  interface StencilIntrinsicElements {
    'anmerkungs-feld': Components.AnmerkungsFeldAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
    'aufklapp-button': Components.AufklappButtonAttributes;
    'aufklapp-input': Components.AufklappInputAttributes;
    'aufklapp-kurz': Components.AufklappKurzAttributes;
    'auswertung-button-kurz': Components.AuswertungButtonKurzAttributes;
    'auswertung-button': Components.AuswertungButtonAttributes;
    'auswertung-daten': Components.AuswertungDatenAttributes;
    'bewertung-end': Components.BewertungEndAttributes;
    'eingabe-felder': Components.EingabeFelderAttributes;
    'export-button': Components.ExportButtonAttributes;
    'footer-leonie': Components.FooterLeonieAttributes;
    'formular-larissa': Components.FormularLarissaAttributes;
    'header-leonie': Components.HeaderLeonieAttributes;
    'headline-mittig': Components.HeadlineMittigAttributes;
    'radio-input': Components.RadioInputAttributes;
    'regler-wertung': Components.ReglerWertungAttributes;
    'start-button': Components.StartButtonAttributes;
    'table-test': Components.TableTestAttributes;
    'test-larissa': Components.TestLarissaAttributes;
    'weiter-button': Components.WeiterButtonAttributes;
    'zurueck-button': Components.ZurueckButtonAttributes;
  }


  interface HTMLAnmerkungsFeldElement extends Components.AnmerkungsFeld, HTMLStencilElement {}
  var HTMLAnmerkungsFeldElement: {
    prototype: HTMLAnmerkungsFeldElement;
    new (): HTMLAnmerkungsFeldElement;
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

  interface HTMLAufklappButtonElement extends Components.AufklappButton, HTMLStencilElement {}
  var HTMLAufklappButtonElement: {
    prototype: HTMLAufklappButtonElement;
    new (): HTMLAufklappButtonElement;
  };

  interface HTMLAufklappInputElement extends Components.AufklappInput, HTMLStencilElement {}
  var HTMLAufklappInputElement: {
    prototype: HTMLAufklappInputElement;
    new (): HTMLAufklappInputElement;
  };

  interface HTMLAufklappKurzElement extends Components.AufklappKurz, HTMLStencilElement {}
  var HTMLAufklappKurzElement: {
    prototype: HTMLAufklappKurzElement;
    new (): HTMLAufklappKurzElement;
  };

  interface HTMLAuswertungButtonKurzElement extends Components.AuswertungButtonKurz, HTMLStencilElement {}
  var HTMLAuswertungButtonKurzElement: {
    prototype: HTMLAuswertungButtonKurzElement;
    new (): HTMLAuswertungButtonKurzElement;
  };

  interface HTMLAuswertungButtonElement extends Components.AuswertungButton, HTMLStencilElement {}
  var HTMLAuswertungButtonElement: {
    prototype: HTMLAuswertungButtonElement;
    new (): HTMLAuswertungButtonElement;
  };

  interface HTMLAuswertungDatenElement extends Components.AuswertungDaten, HTMLStencilElement {}
  var HTMLAuswertungDatenElement: {
    prototype: HTMLAuswertungDatenElement;
    new (): HTMLAuswertungDatenElement;
  };

  interface HTMLBewertungEndElement extends Components.BewertungEnd, HTMLStencilElement {}
  var HTMLBewertungEndElement: {
    prototype: HTMLBewertungEndElement;
    new (): HTMLBewertungEndElement;
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

  interface HTMLRadioInputElement extends Components.RadioInput, HTMLStencilElement {}
  var HTMLRadioInputElement: {
    prototype: HTMLRadioInputElement;
    new (): HTMLRadioInputElement;
  };

  interface HTMLReglerWertungElement extends Components.ReglerWertung, HTMLStencilElement {}
  var HTMLReglerWertungElement: {
    prototype: HTMLReglerWertungElement;
    new (): HTMLReglerWertungElement;
  };

  interface HTMLStartButtonElement extends Components.StartButton, HTMLStencilElement {}
  var HTMLStartButtonElement: {
    prototype: HTMLStartButtonElement;
    new (): HTMLStartButtonElement;
  };

  interface HTMLTableTestElement extends Components.TableTest, HTMLStencilElement {}
  var HTMLTableTestElement: {
    prototype: HTMLTableTestElement;
    new (): HTMLTableTestElement;
  };

  interface HTMLTestLarissaElement extends Components.TestLarissa, HTMLStencilElement {}
  var HTMLTestLarissaElement: {
    prototype: HTMLTestLarissaElement;
    new (): HTMLTestLarissaElement;
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
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
    'aufklapp-button': HTMLAufklappButtonElement
    'aufklapp-input': HTMLAufklappInputElement
    'aufklapp-kurz': HTMLAufklappKurzElement
    'auswertung-button-kurz': HTMLAuswertungButtonKurzElement
    'auswertung-button': HTMLAuswertungButtonElement
    'auswertung-daten': HTMLAuswertungDatenElement
    'bewertung-end': HTMLBewertungEndElement
    'eingabe-felder': HTMLEingabeFelderElement
    'export-button': HTMLExportButtonElement
    'footer-leonie': HTMLFooterLeonieElement
    'formular-larissa': HTMLFormularLarissaElement
    'header-leonie': HTMLHeaderLeonieElement
    'headline-mittig': HTMLHeadlineMittigElement
    'radio-input': HTMLRadioInputElement
    'regler-wertung': HTMLReglerWertungElement
    'start-button': HTMLStartButtonElement
    'table-test': HTMLTableTestElement
    'test-larissa': HTMLTestLarissaElement
    'weiter-button': HTMLWeiterButtonElement
    'zurueck-button': HTMLZurueckButtonElement
  }

  interface ElementTagNameMap {
    'anmerkungs-feld': HTMLAnmerkungsFeldElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'aufklapp-button': HTMLAufklappButtonElement;
    'aufklapp-input': HTMLAufklappInputElement;
    'aufklapp-kurz': HTMLAufklappKurzElement;
    'auswertung-button-kurz': HTMLAuswertungButtonKurzElement;
    'auswertung-button': HTMLAuswertungButtonElement;
    'auswertung-daten': HTMLAuswertungDatenElement;
    'bewertung-end': HTMLBewertungEndElement;
    'eingabe-felder': HTMLEingabeFelderElement;
    'export-button': HTMLExportButtonElement;
    'footer-leonie': HTMLFooterLeonieElement;
    'formular-larissa': HTMLFormularLarissaElement;
    'header-leonie': HTMLHeaderLeonieElement;
    'headline-mittig': HTMLHeadlineMittigElement;
    'radio-input': HTMLRadioInputElement;
    'regler-wertung': HTMLReglerWertungElement;
    'start-button': HTMLStartButtonElement;
    'table-test': HTMLTableTestElement;
    'test-larissa': HTMLTestLarissaElement;
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

}
