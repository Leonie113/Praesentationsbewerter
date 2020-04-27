import { Component } from '@stencil/core';

@Component({
    tag: 'footer-profile',
    styleUrl: 'footer-profile.css'
})

export class FooterProfile {
    render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li>Home</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li id="bold">Voreinstellungen</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Bewertung</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Auswertung</li>
            </ul>
        </div>
    }
}