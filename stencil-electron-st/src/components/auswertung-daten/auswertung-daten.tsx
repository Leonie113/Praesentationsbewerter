import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'auswertung-daten',
  styleUrl: 'auswertung-daten.css',
  shadow: true
})
export class AuswertungsButton{
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
  @State() projekt: string;
  @State() veranstaltung: string;
  @Prop() Ueberschrift: string;
  @Prop() regler: string;
  @Prop() value: number;
  @Prop() text: string; 
  
  @State() visible = false;

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
    this.projekt = localStorage.getItem('projekt');
    this.veranstaltung = localStorage.getItem('veranstaltung');
    }
  toggleVisibility = () => {
    this.visible = !this.visible;
  }
  
  render() {
    return (
      <div id="container-button">
        <input
          onClick={this.toggleVisibility} // <-- attaching the listener here
          class={{
            'auswertung-button': true,
            changeradius: this.visible // <-- using an object to toggle the class here
          }}
          type="button"
          value={this.Ueberschrift}
        />
        <div
          class={{
            'aufklapp-container': true,
            shown: this.visible // <-- and also here
          }}
        >
          <table class="table">
            <tbody>
              <tr>
                <td><strong>Dozent:</strong></td>
                <td>{this.dozent}</td>
              </tr>
              <tr>
                <td><strong>Student/Gruppe:</strong></td>
                <td>{this.gruppe}</td>
              </tr>
              <tr>
                <td><strong>1. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummereins}</td> 
              </tr>
              <tr>
                <td><strong>2. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummerzwei}</td>
              </tr>
              <tr>
                <td><strong>3. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummervier}</td>
              </tr>
              <tr>
                <td><strong>4. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummervier}</td>
              </tr>
              <tr>
                <td><strong>5. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummerfuenf}</td>
              </tr> 
              <tr>
                <td><strong>6. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummersechs}</td>
              </tr> 
              <tr>
                <td><strong>7 Matrikelnummer:</strong></td>
                <td>{this.matrikelnummersieben}</td>
              </tr> 
              <tr>
                <td><strong>8. Matrikelnummer:</strong></td>
                <td>{this.matrikelnummeracht}</td>
              </tr> 
              <tr>
                <td><strong>Veranstaltung:</strong></td>
                <td>{this.veranstaltung}</td>
              </tr>  
              <tr>
                <td><strong>Prüfungsleistung:</strong></td>
                <td>Projektvortrag</td>
              </tr>   
                                 
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}