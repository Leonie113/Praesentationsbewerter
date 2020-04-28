import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'regler-wertung',
  styleUrl: 'regler.css',
  shadow: false
})


export class regler {
  
  @State() value: number;
  @Prop() regler: any;
  
  /**meinSlider=document.querySelector('#myRange')

  @Listen ('click', {capture: true})
  handleChangeEvent(){
    this.meinSlider.addEventListener("change", function(){ //Eventlistener reagiert wenn Regler verschoben wird
        document.querySelector(".regler-wertung span").innerHTML = this.value; //Wert der Motivation soll angezeigt werden: this.value, in HTML ist span Element definiert
        })
  }
*/
  render() {
    return (
        <div>
          <h4 class="regler-wertung">Erreichte Punkte: <span>{this.value}</span></h4>
          <div class="regler-container">
            <h4>0</h4>
            <input name={this.regler} id="myRange" class="slider" min="0" max="10" type="range" step="1"  value='' ></input>
          <h4>10</h4>
          </div>       
        </div>
    )
}
}




         /**function rangeMove (): void {
            var meinSlider: any = document.querySelector("input[type='range]");
            meinSlider.addeventListener("change", function() {
                document.querySelector("regler-wertung span").innerHTML = this.value;
            }); 
         };








     }
  }
 /** import { Listen } from '@stencil/core';

@Listen('scroll', { target: 'window' })
handleScroll(ev) {
  console.log('the body was scrolled', ev);
}
 


 * 
 * var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
 * 
 * 
 * 
 * 

function(){  
    var slider = document.querySelector("input[type='range']");                          // Slider in Variable 'slider' speichern 
    slider.addEventListener("change", function(){                                        //Eventlistener reagiert wenn Regler verschoben wird
      document.querySelector(".regler-wertung span").innerHTML = this.value;           //Wert der Motivation soll angezeigt werden: this.value, in HTML ist span Element definiert
    });
  });
  */