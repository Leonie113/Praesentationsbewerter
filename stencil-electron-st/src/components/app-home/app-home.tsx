import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Herzlich Willkommen beim Präsentationsbewerter
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Starten
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
