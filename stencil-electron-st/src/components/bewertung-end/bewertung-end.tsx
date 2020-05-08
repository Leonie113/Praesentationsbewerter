import { Component, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'bewertung-end',
  styleUrl: 'bewertung-end.css',
  shadow: true
})
export class ExportierButton {
  @Prop() button: string= "Bewertung abschließen";

  handleClick() {
    console.log(localStorage);
    alert("Die Bewertung wurde abgeschlossen.");
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
