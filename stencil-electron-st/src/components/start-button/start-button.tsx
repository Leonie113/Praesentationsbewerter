import { Component } from '@stencil/core';

@Component({
    tag: 'start-button',
    styleUrl: 'start-button.css'
})

export class WeiterButton {
    clearStorage(){
        localStorage.clear();
    }
    render() {
        return <button onClick={this.clearStorage}><img id="rechts" src="/assets/rechts.png"></img></button>
    }
}