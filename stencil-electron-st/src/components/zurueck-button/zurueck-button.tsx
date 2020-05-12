import { Component } from '@stencil/core';

@Component({
    tag: 'zurueck-button',
    styleUrl: 'zurueck-button.css'
})

export class ZurueckButton {
    render() {
    return <div id="pfeil">
    <div class="shape1"></div>
    <div class="shape2"></div>
</div>
         
    }
}