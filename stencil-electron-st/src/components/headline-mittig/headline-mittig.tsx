import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'headline-mittig',
  styleUrl: 'headline-mittig.css',
  shadow: true
})
export class EingabeFelder{
@Prop() text : string;
  render() {
      return (
      <h1>{this.text}</h1>
      );
  }
}