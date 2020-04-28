import { Component, Prop, State, Element, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'aufklapp-input',
  styleUrl: 'aufklapp-input.css'
})
export class AufklappInput {
  @Element() host: HTMLElement;
  @Event() loginShouldOccur: EventEmitter;
  @Prop() Kriterium1: string;
  @Prop() Kriterium2: string;
  @Prop() Kriterium3: string;
  @Prop() Kriterium4: string;
  @Prop() Ueberschrift: string;
  @Prop() regler: string;
  @Prop() value: number;
  @Prop() inputs;
  @Prop() matrikelnummereins;
  @Prop() matrikelnummerzwei;
  @Prop() matrikelnummerdrei;
  @Prop() matrikelnummervier;

matrikelnummern (){
  this.inputs = document.querySelectorAll('input');
  this.matrikelnummereins = this.inputs[1].value;
  console.log(this.matrikelnummereins);
  this.matrikelnummerzwei = this.inputs[2].value;
  this. matrikelnummerdrei = this.inputs[3].value;
  this.matrikelnummervier = this.inputs[4].value;
} 
  
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
              <td>
              <label class="label">{this.Kriterium1}
              <input type="text"  name="matrikelnummereins" placeholder="Pflichtfeld" maxlength="15" onBlur={this.matrikelnummern} value=""/>
              </label>
              </td>
              <td>
              <label class="label">{this.Kriterium2}
              <input type="text" name="matrikelnummerzwei" placeholder="optional" maxlength="15" value=""/>
              </label>
              </td>  
              </tr>
              <tr>
              <td>
              <label class="label">{this.Kriterium3}
              <input type="text"  name="matrikelnummerdrei" placeholder="optional" maxlength="15" value=""/>
              </label>
              </td>
              <td>
              <label class="label">{this.Kriterium4}
              <input type="text"  name="matrikelnummervier" placeholder="optional" maxlength="15" value=""/>
              </label>
              </td>  
              </tr>                   
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}