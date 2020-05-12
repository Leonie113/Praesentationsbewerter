import { Component } from '@stencil/core';

@Component({
    tag: 'start-button',
    styleUrl: 'start-button.css'
})

export class WeiterButton {

    render() {
        return <button><img id="rechts" src="/assets/rechts.png"></img></button>
    }
}