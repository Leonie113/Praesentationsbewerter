import { Component, h } from '@stencil/core';

@Component({
    tag: 'footer-leonie',
    styleUrl: 'footer-Leonie.css'
})

export class FooterLeonie {
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