import { Component } from '@stencil/core';

@Component({
    tag: 'weiter-button',
    styleUrl: 'weiter-button.css'
})

export class WeiterButton {
    render() {
        return <img id="links" src="/assets/rechts.png"></img>
    }
}