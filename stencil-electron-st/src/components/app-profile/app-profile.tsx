import { Component, Prop, h } from '@stencil/core';
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
          <headline-mittig text="Bitte geben Sie die entsprechenden Daten ein:"></headline-mittig>
          <eingabe-felder></eingabe-felder>
          
          <stencil-route-link url="/">
          <zurueck-button></zurueck-button>
          </stencil-route-link>
          
          <stencil-route-link url='/bewertung'>
          <weiter-button></weiter-button>
          </stencil-route-link> 

        </div>
      );
    }
  
}
