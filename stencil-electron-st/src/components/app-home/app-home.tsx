import { Component, } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <headline-mittig text="Herzlich Willkommen beim Präsentationsbewerter"></headline-mittig>
        <img id="presentation" src="/assets/presentation.svg"></img>
        <div >
          <stencil-route-link url="/profile/stencil">
          <weiter-button></weiter-button>
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
