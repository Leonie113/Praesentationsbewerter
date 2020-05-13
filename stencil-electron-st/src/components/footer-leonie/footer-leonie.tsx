import { Component } from '@stencil/core';

@Component({
    tag: 'footer-leonie',
    styleUrl: 'footer-leonie.css'
})

export class FooterLeonie {
    render() {
        return <div class="footer">
            <ul id="footer-liste">
                <li>Home</li>
               
                <li>Voreinstellungen</li>
                
                <li>Bewertung</li>
              
                <li>Auswertung</li>
                <li><img src="/assets/weiter.png"></img></li>
                <li>Ergebnis</li>
            </ul>
        </div>
    }
}