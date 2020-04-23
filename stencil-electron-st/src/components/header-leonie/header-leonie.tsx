import { Component} from '@stencil/core';

@Component({
    tag: 'header-leonie',
    styleUrl: 'header-Leonie.css'
})

export class HeaderLeonie {
    render() {
        return <div class="header">
            <img id="presentation" src="/assets/presentation.svg"></img>
            <img id="dhbw" src="/assets/dhbw.jpg"></img>
            <img id="onlinemedien" src="/assets/onlinemedien.png"></img>
            </div>
    }
}