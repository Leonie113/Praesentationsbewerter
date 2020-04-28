import { Component, Prop, State } from '@stencil/core';



@Component({
  tag: 'auswertung-daten',
  styleUrl: 'auswertung-daten.css',
  shadow: true
})
export class AuswertungsButton{
  @Prop() dozent: string;
  @Prop() gruppe: string;
  @Prop() matrikelnummer1: string;
  @Prop() matrikelnummer2: string;
  @Prop() matrikelnummer3: string;
  @Prop() matrikelnummer4: string;
  @Prop() projekt: string;
  @Prop() leistung: string;
  @Prop() Ueberschrift: string;
  @Prop() regler: string;
  @Prop() value: number;
  @Prop() text; 
  
  @State() visible = false;

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
                <td><strong>Daten</strong></td>
                <td></td>
              </tr>
              <tr>
              <td>Dozent:</td>
              <td>{this.dozent}</td>
              </tr>
              <tr>
              <td>Student/Gruppe:</td>
              <td>{this.gruppe}</td>
              </tr>
              <tr>
              <td>1. Matrikelnummer:</td>
              <td>{this.matrikelnummer1}</td>
              </tr>
              <tr>
              <td>2. Matrikelnummer:</td>
                <td>{this.matrikelnummer2}</td>
              </tr>
              <tr>
              <td>3. Matrikelnummer:</td>
              <td>{this.matrikelnummer3}</td>
              </tr>
              <tr>
              <td>4. Matrikelnummer:</td>
              <td>{this.matrikelnummer4}</td>
              </tr>    
              <tr>
              <td>Projekt:</td>
                <td>{this.projekt}</td>
              </tr>
              <tr>
              <td>Prüfungsleistung:</td>
                <td>{this.leistung}</td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}