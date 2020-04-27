import { Component } from '@stencil/core';

@Component({
    tag: 'footer-home',
    styleUrl: 'footer-home.css'
})

export class FooterHome {
    render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li id="bold">Home</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Voreinstellungen</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Bewertung</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Auswertung</li>
            </ul>
        </div>
    }
}