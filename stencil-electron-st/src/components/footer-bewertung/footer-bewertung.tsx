import { Component } from '@stencil/core';

@Component({
    tag: 'footer-bewertung',
    styleUrl: 'footer-bewertung.css'
})

export class FooterBewertung {
    render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li>Home</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Voreinstellungen</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li id="bold">Bewertung</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Auswertung</li>
            </ul>
        </div>
    }
}