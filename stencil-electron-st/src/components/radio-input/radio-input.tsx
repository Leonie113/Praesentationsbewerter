import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'radio-input',
  styleUrl: 'radio-input.css',
  shadow: true
})
export class RadioInput {
  @Prop() Kriterium1: string;
  @Prop() Kriterium2: string;
  @Prop() Kriterium3: string;
  @Prop() Kriterium4: string;
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
              <td>
              <form>
                <fieldset>
                  <div>
                  <label>
                  <input type="radio" id="mc" name="Zahlmethode" value="Mastercard"/>
                  Fachvortrag</label> 
                  </div>
                  <div>
                  <label>
                  <input type="radio" id="vi" name="Zahlmethode" value="Visa"/>
                  Projektvortrag</label>
                  </div>
                </fieldset>
              </form>
              </td> 
              </tr>                   
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}