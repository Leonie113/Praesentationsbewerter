import { Component, h } from '@stencil/core';

@Component({
    tag: 'weiter-button',
    styleUrl: 'weiter-button.css'
})

export class WeiterButton {
    render() {
        return <img id="rechts" src="/assets/rechts.png"></img>
    }
}