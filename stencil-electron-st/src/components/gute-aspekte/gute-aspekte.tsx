import { Component, Prop, } from '@stencil/core';

@Component({
  tag: 'gute-aspekte',
  styleUrl: 'gute-aspekte.css',
  shadow: true,
})
export class GuteAspekte {
  @Prop() test: string;
  
  handleClick(event: UIEvent) {
    
    // var inhalt = document.getElementById('save-button').value;
    alert("Du hast auf Speichern gedrückt");
    console.log(event);
  }
  render() {
    return (
        <div class="gute-aspekte">
          <h1 class="ueberschrift3">Das war gut</h1>
          <textarea></textarea>
          <button id="save-button" onClick={ (event: UIEvent) => this.handleClick(event)}>Speichern</button>
        </div>
    );
  }
}