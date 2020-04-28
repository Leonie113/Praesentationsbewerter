import { Component } from '@stencil/core';

@Component({
    tag: 'zurueck-button',
    styleUrl: 'zurueck-button.css'
})

export class ZurueckButton {
    render() {
        return <img id="links" src="/assets/links.png"></img>
         
    }
}