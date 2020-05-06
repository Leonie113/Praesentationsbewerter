import { Component, Prop, State } from '@stencil/core';



@Component({
  tag: 'auswertung-button',
  styleUrl: 'auswertung-button.css',
  shadow: true
})
export class AuswertungsButton{
  @Prop() ueberschrift: string;
  @Prop() kriteriumeins: string;
  @Prop() kriteriumzwei: string;
  @Prop() kriteriumdrei: string;
  @Prop() kriteriumvier: string;
  @Prop() regler: string;
  @Prop() value: number;
  @Prop() reglereins : string;
  @Prop() reglerzwei : string;
  @Prop() reglerdrei : string;
  @Prop() reglervier : string; 
  @Prop() hallo : string;
  @Prop() punkte: string;
  
  @Prop() gesamt : string = "/40 P   ▼";
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
            'auswertung-button': true,
            changeradius: this.visible // <-- using an object to toggle the class here
          }}
          type="button"
          value={this.ueberschrift + " " + this.punkte + this.gesamt} 
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
              <td><strong>Kriterium</strong></td>
                <td><strong>Punktebewertung</strong></td>
              </tr>
              <tr>
              <td>{this.kriteriumeins}</td>
              <td>        
                {this.reglereins}
              </td>
              </tr>
              <tr>
                <td>{this.kriteriumzwei}</td>
                <td>
                {this.reglerzwei}
                </td>
              </tr>     
              <tr>
                <td>{this.kriteriumdrei}</td>
                <td>
                {this.reglerdrei}
                </td>
              </tr>
              <tr>
                <td>{this.kriteriumvier}</td>
                <td>
                {this.reglervier}
                </td>
              </tr>                      
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}