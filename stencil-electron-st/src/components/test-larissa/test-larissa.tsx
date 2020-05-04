import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'test-larissa',
  styleUrl: 'test-larissa.css',
  shadow: true
})
export class ExportierButton {
  @Prop() button: string= "hallo test";
  @State() test: string ="hallloooo";
  handleClick() {
  console.log(this.test);
  }

  render() {
    return (
            
            <button class="button-text" onClick={this.handleClick}>{this.button}
            </button>
       
    );
  }
}
