import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'kategorie2-button',
  styleUrl: 'kategorie2-button.css',
  shadow: true
})
export class AufklappButton {
  @Prop() Kriterium1: string;
  @Prop() KriteriumDetail1: string;
  @Prop() Kriterium2: string;
  @Prop() KriteriumDetail2: string;
  @Prop() Ueberschrift: string;
  @State() regler: string;
  @State() value: number;
  
  @State() visible = false;
  
  @Element() host: HTMLElement;

  
  @State() valueeins : string;
  @State() valuezwei : string;


  componentWillUpdate(){
    this.valueeins = localStorage.getItem('reglerfuenf');
    this.valuezwei = localStorage.getItem('reglersechs');
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
            'aufklapp-kurz': true,
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
                <td></td>
                <td><strong>Punktebewertung</strong></td>
              </tr>
              <tr>
                <td>{this.Kriterium1}<br></br>{this.KriteriumDetail1}</td>
                <td>        
                <regler-wertung regler="reglerfuenf" wert={this.valueeins}></regler-wertung>  
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}<br></br>{this.KriteriumDetail2}</td>
                <td>
                <regler-wertung regler="reglersechs"  wert={this.valuezwei}></regler-wertung> 
                </td>
              </tr>                        
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}