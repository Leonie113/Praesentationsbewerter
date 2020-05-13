import { Component, State } from '@stencil/core';

@Component({
  tag: 'daten-oben',
  styleUrl: 'daten-oben.css',
  shadow: true
})

export class datenOben{
    @State() dozent: string;
    @State() gruppe: string;
    @State() matrikelnummereins: string;
    @State() matrikelnummerzwei: string;
    @State() matrikelnummerdrei: string;
    @State() matrikelnummervier: string;
    @State() matrikelnummerfuenf: string;
    @State() matrikelnummersechs: string;
    @State() matrikelnummersieben: string;
    @State() matrikelnummeracht: string;
    @State() veranstaltung: string;
    

    componentWillLoad() {
        this.dozent = localStorage.getItem('dozent');
        this.gruppe = localStorage.getItem('gruppe');
        this.matrikelnummereins = localStorage.getItem('matrikelnummereins');
        this.matrikelnummerzwei = localStorage.getItem('matrikelnummerzwei');
        this.matrikelnummerdrei = localStorage.getItem('matrikelnummerdrei');
        this.matrikelnummervier = localStorage.getItem('matrikelnummervier');
        this.matrikelnummerfuenf = localStorage.getItem('matrikelnummerfuenf');
        this.matrikelnummersechs = localStorage.getItem('matrikelnummersechs');
        this.matrikelnummersieben = localStorage.getItem('matrikelnummersieben');
        this.matrikelnummeracht = localStorage.getItem('matrikelnummeracht');
        this.veranstaltung = localStorage.getItem('veranstaltung');
        }

        render() {
            return (
              <div id="daten-oben">
                  <ul id="daten-liste">
                        <li><strong>Daten:</strong></li>
                        <li>{this.dozent}</li>
                        <li>{this.gruppe}</li>
                        <li>{this.veranstaltung}</li>
                        <li><strong>Matrikelnummern:</strong></li> 
                        <li>{this.matrikelnummereins}</li> 
                        <li>{this.matrikelnummerzwei}</li>
                        <li>{this.matrikelnummervier}</li>
                        <li>{this.matrikelnummervier}</li>
                        <li>{this.matrikelnummerfuenf}</li>
                        <li>{this.matrikelnummersechs}</li>
                        <li>{this.matrikelnummersieben}</li>
                        <li>{this.matrikelnummeracht}</li>
                    </ul>
                </div>
             ) 
            }
        }