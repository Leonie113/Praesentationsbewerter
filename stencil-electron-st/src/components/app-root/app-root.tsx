import { Component,h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div class="body">
        <header>
        </header>

        <main>
          <stencil-router historyType="hash">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
              <stencil-route url='/bewertung' component='app-bewertung' />
              <stencil-route url='/auswertung' component='app-auswertung' />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <footer>
        </footer>
      </div>
    );
  }
}
