import { Component, Prop, Listen, h} from '@stencil/core';

@Component({
  tag: 'export-button',
  styleUrl: 'export-button.css',
  shadow: true
})
export class ExportierButton {
  @Prop() button: string= "Exportieren";

  handleClick() {
    alert("Die Funktion exportieren ist momentan noch nicht umgesetzt");
  }

  @Listen("click")
  handleClickEvent() {
    console.log("Exportierbutton wurde geklickt");
  }

  render() {
    return (   
            <button class="button-text" onClick={this.handleClick}>{this.button}</button>
    );
  }
}


  
 