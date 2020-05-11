import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'kategorie4-button',
  styleUrl: 'kategorie4-button.css',
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
    this.valueeins = localStorage.getItem('reglerelf');
    this.valuezwei = localStorage.getItem('reglerzwoelf');
    this.valuedrei = localStorage.getItem('reglerdreizehn');
    this.valuevier = localStorage.getItem('reglervierzehn');
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
                <td>{this.Kriterium1}<br></br>{this.KriteriumDetail1}</td>
                <td>        
                <regler-wertung regler="reglerelf" wert={this.valueeins}></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}<br></br>{this.KriteriumDetail2}</td>
                <td>
                <regler-wertung regler="reglerzwoelf" wert={this.valuezwei}></regler-wertung> 
                </td>
              </tr>     
              <tr>
                <td>{this.Kriterium3}<br></br>{this.KriteriumDetail3}</td>
                <td>
                <regler-wertung regler="reglerdreizehn" wert={this.valuedrei}></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium4}<br></br>{this.KriteriumDetail4}</td>
                <td>
                <regler-wertung regler="reglervierzehn" wert={this.valuevier}></regler-wertung> 
                </td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}