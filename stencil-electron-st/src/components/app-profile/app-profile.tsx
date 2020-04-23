import { Component, Prop} from '@stencil/core';
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
          <formular-larissa></formular-larissa>
          <p>
            Hello! My name is 
          </p>
          <stencil-route-link url='/'>
          <button>
            home
          </button>
        </stencil-route-link>
          <aufklapp-button></aufklapp-button>
        </div>
      );
    }
  
}
