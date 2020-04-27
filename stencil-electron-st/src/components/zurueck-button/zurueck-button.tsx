import { Component, h } from '@stencil/core';

@Component({
    tag: 'zurueck-button',
    styleUrl: 'zurueck-button.css'
})

export class FooterLeonie {
    render() {
        return <img id="links" src="/assets/links.png"></img>
         
    }
}