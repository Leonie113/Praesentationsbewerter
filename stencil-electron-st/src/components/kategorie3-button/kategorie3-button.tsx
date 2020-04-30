import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'kategorie3-button',
  styleUrl: 'kategorie3-button.css',
  shadow: true
})
export class AufklappButton {
  @Prop() Kriterium1: string;
  @Prop() Kriterium2: string;
  @Prop() Kriterium3: string;
  @Prop() Kriterium4: string;
  @Prop() Ueberschrift: string;
  @State() regler: string;
  @State() value: number;
  
  @State() visible = false;
  
  @Element() host: HTMLElement;

  toggleVisibility = () => {
    this.visible = !this.visible;
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
                <td>{this.Kriterium1}</td>
                <td>        
                <regler-wertung regler="reglersieben"></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}</td>
                <td>
                <regler-wertung regler="regleracht"></regler-wertung> 
                </td>
              </tr>     
              <tr>
                <td>{this.Kriterium3}</td>
                <td>
                <regler-wertung regler="reglerneun"></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium4}</td>
                <td>
                <regler-wertung regler="reglerzehn"></regler-wertung> 
                </td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}