import { Component, Prop,  } from '@stencil/core';

@Component({
  tag: 'verbesserungs-vorschlag',
  styleUrl: 'verbesserungsvorschlag.css',
  shadow: true,
})
export class VerbesserungsVorschlag {
  @Prop() test: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);
  }

  render() {
    return (
        <div class="verbesserungs-vorschlag">
          <h1 class="ueberschrift2">Verbesserungsvorschläge</h1>
          <textarea id="input"></textarea>
          <button id="save-button" onClick={ (event: UIEvent) => this.handleClick(event)}>Speichern</button>
        </div>
    );
  }
  
}
