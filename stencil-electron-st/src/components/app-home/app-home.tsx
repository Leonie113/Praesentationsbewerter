import { Component, } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',

})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <headline-mittig text="Herzlich Willkommen beim Präsentationsbewerter"></headline-mittig>
        <img id="presentation" src="/assets/presentation.svg"></img>
        <div class="weiter">
          <stencil-route-link url="/profile/stencil">
          <start-button></start-button>
          </stencil-route-link>
          <div  id="start">
            <p>Start</p>
            </div>
        </div>
      </div>
    );
  }
}
