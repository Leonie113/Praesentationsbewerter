import { Component,Prop, State, Element, Event, EventEmitter } from '@stencil/core';

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
  @Prop() Kriterium5: string;
  @Prop() Kriterium6: string;
  @Prop() Kriterium7: string;
  @Prop() Kriterium8: string;
  @Prop() Ueberschrift: string;
  @State() regler: string;
  @State() value: number;
  @State() inputs: any;
  @State() matrikelnummereins: string;
  @State() matrikelnummerzwei: string;
  @State() matrikelnummerdrei: string;
  @State() matrikelnummervier: string; 

handleMatrikelnummereinsInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummereins', target.value);
}
handleMatrikelnummerzweiInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummerzwei', target.value);
}
handleMatrikelnummerdreiInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummerdrei', target.value);
}
handleMatrikelnummervierInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummervier', target.value);
}
handleMatrikelnummerfuenfInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummerfuenf', target.value);
}
handleMatrikelnummersechsInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummersechs', target.value);
}
handleMatrikelnummersiebenInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummersieben', target.value);
}
handleMatrikelnummerachtInput(e: UIEvent){
  const target = e.target as HTMLInputElement;
  localStorage.setItem('matrikelnummeracht', target.value);
}

// matrikelnummern (){
//   this.inputs = document.querySelectorAll('input');
//   this.matrikelnummereins = this.inputs[1].value;
//   console.log(this.matrikelnummereins);
//   this.matrikelnummerzwei = this.inputs[2].value;
//   this. matrikelnummerdrei = this.inputs[3].value;
//   this.matrikelnummervier = this.inputs[4].value;
// } 

  
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
              <input id="matrikel" type="text"  name="matrikelnummereins" placeholder="Pflichtfeld" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummereinsInput(e)}}/>
              </label>
              </td>
              <td>
              <label class="label">{this.Kriterium2}
              <input id="matrikel" type="text" name="matrikelnummerzwei" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummerzweiInput(e)}}/>
              </label>
              </td>  
              </tr>
              <tr>
              <td>
              <label class="label">{this.Kriterium3}
              <input id="matrikel" type="text"  name="matrikelnummerdrei" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummerdreiInput(e)}}/>
              </label>
              </td>
              <td>
              <label class="label">{this.Kriterium4}
              <input id="matrikel" type="text"  name="matrikelnummervier" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummervierInput(e)}}/>
              </label>
              </td>  
              </tr> 
              <tr>
              <td>
              <label class="label">{this.Kriterium5}
              <input id="matrikel" type="text"  name="matrikelnummerfuenf" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummerfuenfInput(e)}}/>
              </label>
              </td>
              <td>
              <label class="label">{this.Kriterium6}
              <input id="matrikel" type="text"  name="matrikelnummersechs" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummersechsInput(e)}}/>
              </label>
              </td>  
              </tr> 
              <tr>
              <td>
              <label class="label">{this.Kriterium7}
              <input id="matrikel" type="text"  name="matrikelnummersieben" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummersiebenInput(e)}}/>
              </label>
              </td>
              <td>
              <label class="label">{this.Kriterium8}
              <input id="matrikel" type="text"  name="matrikelnummeracht" placeholder="optional" maxlength="15" value="" onInput={(e: UIEvent) => { this.handleMatrikelnummerachtInput(e)}}/>
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