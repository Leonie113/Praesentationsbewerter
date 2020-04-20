import { Component, } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
 

  render() {
      return (
        <div class="app-profile">
          <p>
            Geben Sie Ihre Daten ein!
          </p>
          <stencil-route-link url='/home'>
          <button>
            back
          </button>
        </stencil-route-link>
        </div>
      );
    }
  
}
