import { Component, Prop, State, Listen, Element } from '@stencil/core';

@Component({
  tag: 'aufklapp-button',
  styleUrl: 'aufklapp-button.css',
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

  @Listen ('change', {capture: true})
      handleChangeEvent(){
        let inputs = this.host.querySelector('input');
        
        this.value1 = inputs[1].value;
        this.value2 = inputs[2].value;
        this.value3 = inputs[3].value;
        this.value4 = inputs[4].value;
      }

  // @State() inputs = this.host.querySelectorAll('input');
  
  @State() value1: any;
  @State() value2: any;
  @State() value3: any;
  @State() value4: any; 

  toggleVisibility = () => {
    this.visible = !this.visible;
  }

  
  
  render() {
    return (
      <div id="container-button">
        <input
          onClick={this.toggleVisibility} // <-- attaching the listener here
          class={{
            'aufklapp-button': true,
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
                <regler-wertung regler="reglereins"></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}</td>
                <td>
                <regler-wertung regler="reglereins"></regler-wertung> 
                </td>
              </tr>     
              <tr>
                <td>{this.Kriterium3}</td>
                <td>
                <regler-wertung regler="reglereins"></regler-wertung> 
                </td>
              </tr>
              <tr>
                <td>{this.Kriterium4}</td>
                <td>
                <regler-wertung regler="reglereins"></regler-wertung> 
                </td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}