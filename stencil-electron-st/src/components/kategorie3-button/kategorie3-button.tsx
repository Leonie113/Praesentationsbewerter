import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'kategorie3-button',
  styleUrl: 'kategorie3-button.css',
  shadow: true
})
export class AufklappButton {
  @Prop() Kriterium1: string;
  @Prop() KriteriumDetail1: string;
  @Prop() Kriterium2: string;
  @Prop() KriteriumDetail2: string;
  @Prop() Kriterium3: string;
  @Prop() KriteriumDetail3: string;
  @Prop() Kriterium4: string;
  @Prop() KriteriumDetail4: string;
  @Prop() Ueberschrift: string;
  @State() regler: string;
  @State() value: number;
  
  @State() visible = false;

  
  @State() valueeins : string;
  @State() valuezwei : string;
  @State() valuedrei : string;
  @State() valuevier : string;
  
  @Element() host: HTMLElement;

  toggleVisibility = () => {
    this.visible = !this.visible;
  }

  componentWillUpdate(){
    this.valueeins = localStorage.getItem('reglersieben');
    this.valuezwei = localStorage.getItem('regleracht');
    this.valuedrei = localStorage.getItem('reglerneun');
    this.valuevier = localStorage.getItem('reglerzehn');
     }
  
  render() {
    return (
      <div id="container-button">
        <input
          onClick={this.toggleVisibility} // <-- attaching the listener here
          class={{
            'kategorieeins-button': true,
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
                <td><strong>{this.Kriterium1}</strong><br></br>{this.KriteriumDetail1}</td>
                <td>        
                <regler-wertung regler="reglersieben" wert={this.valueeins}></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td><strong>{this.Kriterium2}</strong><br></br>{this.KriteriumDetail2}</td>
                <td>
                <regler-wertung regler="regleracht" wert={this.valuezwei}></regler-wertung> 
                </td>
              </tr>     
              <tr>
                <td><strong>{this.Kriterium3}</strong><br></br>{this.KriteriumDetail3}</td>
                <td>
                <regler-wertung regler="reglerneun" wert={this.valuedrei}></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td><strong>{this.Kriterium4}</strong><br></br>{this.KriteriumDetail4}</td>
                <td>
                <regler-wertung regler="reglerzehn" wert={this.valuevier}></regler-wertung> 
                </td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}