import { Component } from '@stencil/core';

@Component({
    tag: 'header-leonie',
    styleUrl: 'header-Leonie.css'
})

export class HeaderLeonie {
    render() {
        return <div class="header">
            <stencil-route-link url="/">
                <div id="home">Home</div>
            </stencil-route-link>

            </div>
    }
}