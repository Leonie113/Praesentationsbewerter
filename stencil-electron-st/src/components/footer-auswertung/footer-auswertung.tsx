import { Component } from '@stencil/core';

@Component({
    tag: 'footer-auswertung',
    styleUrl: 'footer-auswertung.css'
})

export class FooterAuswertung {
    render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li>Home</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Voreinstellungen</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Bewertung</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li id="bold">Auswertung</li>
            </ul>
        </div>
    }
}