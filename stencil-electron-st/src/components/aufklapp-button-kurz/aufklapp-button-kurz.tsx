import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'aufklapp-button-kurz',
  styleUrl: 'aufklapp-button-kurz.css',
  shadow: true
})
export class AufklappButton {
  @Prop() Kriterium1: string;
  @Prop() Kriterium2: string;

  @Prop() Ueberschrift: string;
  @Prop() regler: string;
  @Prop() value: number;
  
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
                    <h4 class="regler-wertung">Erreichte Punkte: {this.regler} <span>0</span></h4>
                    <div class="regler-container">
                    <h4>0</h4>
                    <input type="range" id="myRange" class="slider" value="0" min="0" max="10" ></input>
                    <h4>10</h4>
                    </div>
                    </div>
              </td>
              </tr>
              <tr>
                <td>{this.Kriterium2}</td>
                <td>
                <div>
                <h4 class="regler-wertung">Erreichte Punkte: {this.regler} <span>0</span></h4>
                    <div class="regler-container">
                    <h4>0</h4>
                    <input type="range" id="myRange" class="slider" value="0" min="0" max="10" ></input>
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