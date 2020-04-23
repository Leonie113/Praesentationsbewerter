import { Component, Prop, Event, EventEmitter, Listen, Method } from '@stencil/core';

@Component({
  tag: 'formular-larissa',
  styleUrl: 'formular-larissa.css',
  shadow: true
})
export class FormularLarissa{
    @Prop({mutable : true}) value: string;
    @Event() changed : EventEmitter<string>;
  
    handleChange(ev){
      this.value = ev.target ? ev.target.value : null;
      this.changed.emit(this.value);
      }
    
    dozent :HTMLInputElement = document.querySelector('#dozentinput');
    gruppe:HTMLInputElement= document.querySelector('#gruppeinput');
    mitglieder:HTMLInputElement = document.querySelector('#mitgliederinput');
    submit : HTMLElement = document.querySelector('#submit');
    dozentmeldung = document.querySelector('#dozent');
    gruppemeldung = document.querySelector('#gruppe');
    mitgliedermeldung = document.querySelector('#mitglieder');
    inOrdnung = true;
    
    @Listen('click', {capture: true})
    ueberpruefeDaten(){
      this.ueberpruefeEingabe();
    }
  
    @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'ArrowDown'){
      console.log('down arrow pressed')
    }
  }
  
    @Method()
    async ueberpruefeEingabe(){
  
        if( this.dozent.value === "") {
            this.dozentmeldung.classList.add('meldungfehlerhaft');
            this.inOrdnung = false;
            console.log("huhu");
        }
        else{
          this.dozentmeldung.classList.remove('meldungfehlerhaft');
        }
    
        if( this.gruppe.textContent === "" ){
            this.gruppemeldung.classList.add('meldungfehlerhaft');
            this.inOrdnung = false;
        }
        else{
          this.gruppemeldung.classList.remove('meldungfehlerhaft');
          }
    
        if( this.mitglieder.textContent === "" ){
          this.mitgliedermeldung.classList.add('meldungfehlerhaft');
          this.inOrdnung = false; 
           }
        else{
          this.mitgliedermeldung.classList.remove('meldungfehlerhaft');
        }
    }
  render() {
    return (

        <div class="wrapper">
        <input value={this.value} onInput={(ev)=>this.handleChange(ev)}/>
    
       <label id="dozent" class="meldung">Ihr Name wird zur Auswertung benötigt.
        <input type="text" id="dozentinput" name="dozent" placeholder="Ihr Name (Dozent)" />
        </label>
        <label id="gruppe" class="meldung">Der Gruppenname bzw. Projektname wird zur Auswertung benötigt.
        <input type="text" id="gruppeinput" name="gruppe" placeholder="zu bewertende Gruppe (Projektname)"/>
        </label>
        <label id="mitglieder" class="meldung">Die Mitglieder der Gruppe werden zur Auswertung benötigt.
        <input type="text" id="mitgliederinput" name="mitglieder" placeholder="Gruppenmitglieder"/>
        </label>
        <div class="buttons">
        <input type="reset" id="reset" value="x"/>
        <button id="submit" type="submit"><img id="check" src="/assets/check.png"/></button>
        </div>
  
      </div>
    );
  }
}
