import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'test-larissa',
  styleUrl: 'test-larissa.css',
  shadow: true
})
export class TestLarissa {
  @Prop() test: string;

  render() {
    return (
            <div class="ueberschrift">
            <h1 class="ueberschrift">hallo {this.test} </h1>
            </div>
    );
  }
}