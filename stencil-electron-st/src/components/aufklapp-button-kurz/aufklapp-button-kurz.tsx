import { Component, Prop, State, Listen, Element } from '@stencil/core';

@Component({
  tag: 'aufklapp-button-kurz',
  styleUrl: 'aufklapp-button-kurz.css',
  shadow: true
})
export class AufklappButton {
  @Prop() Kriterium1: string;
  @Prop() Kriterium2: string;

  @Prop() Ueberschrift: string;
  @State() regler: string;
  @State() value: number;
  
  @State() visible = false;

  @Element() host: HTMLElement;

  @Listen ('change', {capture: true})
      handleChangeEvent(){
        let inputs = this.host.querySelectorAll('input');
        this.value1 = inputs[0].value;
        this.value2 = inputs[1].value;
      }

  @State() inputs = this.host.querySelectorAll('input');
  @State() value1 = this.inputs[0].value;
  @State() value2 = this.inputs[1].value;
 
  toggleVisibility = () => {
    this.visible = !this.visible;
  }
  
  render() {
    return (
      <div id="container-button">
        <input
          onClick={this.toggleVisibility} // <-- attaching the listener here
          class={{
            'aufklapp-button-kurz': true,
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
                <td>Zielerreichung in %</td>
              </tr>
              <tr>
              <td>{this.Kriterium1}</td>
              <td>        
              <div>
              <h4 class="regler-wertung">Erreichte Punkte: <span>{this.value1}</span></h4>
                    <div class="regler-container">
                    <h4>0</h4>
                    <input  name="range" id="myRange" class="slider"  min="0" max="10" type="range" step="1"  value='' ></input>
                    <h4>10</h4>
                    </div>
                    </div>
              </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}</td>
                <td>
                <div>
                <h4 class="regler-wertung">Erreichte Punkte: <span>{this.value2}</span></h4>
                    <div class="regler-container">
                    <h4>0</h4>
                    <input  name="range" id="myRange" class="slider"  min="0" max="10" type="range" step="1"  value='' ></input>
                    <h4>10</h4>
                    </div>
                    </div>
                </td>
              </tr>     
                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}