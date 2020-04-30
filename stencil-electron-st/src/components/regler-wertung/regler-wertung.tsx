import { Component, Prop,  State } from '@stencil/core';

@Component({
  tag: 'regler-wertung',
  styleUrl: 'regler.css',
  shadow: false
})


export class regler {

  @State() value: string | number;
  @Prop() regler: string;


  handleReglerInput(e: UIEvent) {
    const target = e.target as HTMLInputElement;
    this.value = target.value;
    localStorage.setItem(this.regler, target.value);
  }
 
  render() {
    return (
      <div class="regler-div">
        <h4 class="regler-wertung">Erreichte Punkte: <span>{this.value}</span></h4>
        <div class="regler-container">
          {/* <h4>0</h4> */}
          <input name={this.regler} id="myRange" class="slider" min="0" max="10" type="range" step="1" list='steplist' value={this.value} onInput={(e: UIEvent) => { this.handleReglerInput(e) }} />
          {/* <h4>10</h4> */}
          <datalist id='steplist'>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                </datalist>
        </div>
      </div>
    )
  }
}




