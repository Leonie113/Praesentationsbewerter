import { Component } from '@stencil/core';

@Component({
    tag: 'start-button',
    styleUrl: 'start-button.css'
})

export class WeiterButton {

    render() {
        return <button>
            <div id="pfeil2">
        <div class="shape3"></div>
        <div class="shape4"></div>
    </div>
        </button>
    }
}