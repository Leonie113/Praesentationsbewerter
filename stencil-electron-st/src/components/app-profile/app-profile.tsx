import { Component, Prop, h} from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;


  render() {

      return (
        <div class="app-profile">

          <p>
            Hello! My name is 
          </p>
          <formular-larissa></formular-larissa>
          <stencil-route-link url='/'>
          <button>
            home
          </button>
        </stencil-route-link>
        <stencil-route-link url='/bewertung'>
          <button>
            next
          </button>
        </stencil-route-link>

        </div>
      );
    }
  
}
