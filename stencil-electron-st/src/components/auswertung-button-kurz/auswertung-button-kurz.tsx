import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'auswertung-button-kurz',
  styleUrl: 'auswertung-button-kurz.css',
  shadow: true
})
export class AuswertungsButtonKurz {
  @Prop() Kriterium1: string;
  @Prop() Kriterium2: string;

  @Prop() Ueberschrift: string;
  @Prop() regler: string;
  @Prop() value: number;

  @Prop() reglerfuenf: string;
  @Prop() reglersechs: string;

  @Prop() gesamt : string = " XX/20 P";
  
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
            'auswertung-button-kurz': true,
            changeradius: this.visible // <-- using an object to toggle the class here
          }}
          type="button"
          value={this.Ueberschrift + this.gesamt} 
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
              <td><strong>Kriterium</strong></td>
                <td><strong>Punktebewertung</strong></td>
              </tr>
              <tr>
              <td>{this.Kriterium1}</td>
              <td>        
              {this.reglerfuenf}
              </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}</td>
                <td>
                {this.reglersechs}
                </td>
              </tr>     
                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}