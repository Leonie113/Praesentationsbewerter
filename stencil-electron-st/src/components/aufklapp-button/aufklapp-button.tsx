import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'aufklapp-button',
  styleUrl: 'aufklapp-button.css',
  shadow: true
})
export class AufklappButton {
  @Prop() test: string;

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
            'aufklapp-button': true,
            changeradius: this.visible // <-- using an object to toggle the class here
          }}
          type="button"
          value="Platzhalter für Kategorie"
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
                <td>Kriterium 1</td>
                <td>Regler</td>
              </tr>
              <tr>
                <td>Kriterium 2</td>
                <td>Regler</td>
              </tr>     
              <tr>
                <td>Kriterium 3</td>
                <td>Regler</td>
              </tr>
              <tr>
                <td>Kriterium 4</td>
                <td>Regler</td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}