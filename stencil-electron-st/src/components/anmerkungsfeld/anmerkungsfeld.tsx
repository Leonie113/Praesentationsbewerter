import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'anmerkungs-feld',
  styleUrl: 'anmerkungsfeld.css',
  shadow: true,
})
export class AnmerkungsFeld {
  @Prop() name: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);
  }
  render() {
    return (
        <div class="anmerkungs-feld">
          <h1 class="ueberschrift">{this.name}</h1>
          <textarea></textarea>
          {/* <button id="save-button" onClick={ (event: UIEvent) => this.handleClick(event)}>Speichern</button>  */}
        </div>
    );
  }
}