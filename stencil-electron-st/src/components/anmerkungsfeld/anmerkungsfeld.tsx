import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'anmerkungs-feld',
  styleUrl: 'anmerkungsfeld.css',
  shadow: true,
})
export class AnmerkungsFeld {
  @Prop() test: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt" +event);
    
  }
  render() {
    return (
        <div class="anmerkungs-feld">
          <h1 class="ueberschrift">Anmerkungen</h1>
          <textarea></textarea>
          <button id="save-button" onClick={ (event: UIEvent) => this.handleClick(event)}>Speichern</button>
        </div>
    );
  }
}