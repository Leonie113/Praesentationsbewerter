import { Component, h} from '@stencil/core';

@Component({
    tag: 'header-leonie',
    styleUrl: 'header-Leonie.css'
})

export class HeaderLeonie {
    render() {
        return <div class="header">
            <stencil-route-link url="/home">
            <img id="presentation" src="/assets/presentation.svg"></img>
            </stencil-route-link>
            <img id="dhbw" src="/assets/dhbw.jpg"></img>
            <img id="onlinemedien" src="/assets/onlinemedien.png"></img>
            </div>
    }
}