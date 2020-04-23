import { Component } from '@stencil/core';

@Component({
    tag: 'footer-leonie',
    styleUrl: 'footer-Leonie.css'
})

export class FooterLeonie {
    render() {
        return <div class="footer">
            <img id="links" src="/assets/links.png"></img>
            <ul id="footer-liste">
                <li id="bold">Home</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Voreinstellungen</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Bewertung</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Auswertung</li>
            </ul>
            <img id="rechts" src="/assets/rechts.png"></img>
        </div>
    }
}