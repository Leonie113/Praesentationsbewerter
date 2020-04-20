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
          Willkommen zum Präsentationsbewerter
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            starten
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
