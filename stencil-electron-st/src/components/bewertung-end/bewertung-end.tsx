import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'bewertung-end',
  styleUrl: 'bewertung-end.css',
  shadow: true
})
export class ExportierButton {
  @Prop() button: string= "Bewertungsbogen leeren!";

  handleClick() {
    localStorage.clear();
    alert("Die Daten der Bewertung wurden erfolgreich zurückgesetzt!");
  }

  @Listen("click")
  handleClickEvent() {
   // console.log("Exportierbutton wurde geklickt");
  }

  render() {
    return (
          
            
            <button class="button-text" onClick={this.handleClick}>{this.button}</button>
       
    );
  }
}
