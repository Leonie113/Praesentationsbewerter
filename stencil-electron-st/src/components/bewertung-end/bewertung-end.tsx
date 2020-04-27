import { Component, Prop, Listen, h} from '@stencil/core';

@Component({
  tag: 'bewertung-end',
  styleUrl: 'bewertung-end.css',
  shadow: true
})
export class ExportierButton {
  @Prop() button: string= "Bewertung abschließen";

  handleClick() {
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
