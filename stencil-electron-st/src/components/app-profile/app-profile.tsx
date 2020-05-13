import { Component, Prop, Element } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: false
})
export class AppProfile {
  @Prop() match: MatchResults;
  @Element() el: Element;

  componentDidLoad() {
var test = this.el.querySelector<HTMLInputElement>("#hallo");
console.log(test);
var csv = test.files[0];
console.log(csv);
  }

  componentDidUpdate(){
    console.log("hallo");
  }
  render() {

      return (
        <div class="app-profile">
          <headline-mittig text="Bitte geben Sie die entsprechenden Daten ein:"></headline-mittig>
          <eingabe-felder></eingabe-felder>
          {/* Select a file: <input type="file" id="hallo"/> */}
          
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
