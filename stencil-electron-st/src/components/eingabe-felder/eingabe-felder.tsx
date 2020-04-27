import { Component, Prop, Event, EventEmitter,  Element, h } from '@stencil/core';

@Component({
  tag: 'eingabe-felder',
  styleUrl: 'eingabe-felder.css',
})
export class EingabeFelder{
  @Prop() forgotPasswordUrl: string ="hallo";
  @Event() loginShouldOccur: EventEmitter;
  @Element() host: HTMLElement;
  @Prop() public dozent : string;
  @Prop() dozentmeldung;
  @Prop() public name : string;
  @Prop() namemeldung;
  @Prop() matrikelnummereins;
  @Prop() matrikelnummerzwei;
  @Prop() matrikelnummerdrei;
  @Prop() matrikelnummervier;
  @Prop() matrikelnummermeldung;
  @Prop() public veranstaltung : string;
  @Prop() veranstaltungmeldung;
  @Prop() public pruefung : string;
  @Prop() pruefungmeldung;


    login() {
          let inputs = this.host.querySelectorAll('input');
          let meldungen = this.host.querySelectorAll('.meldung');
          this.dozent = inputs[0].value;
          console.log(this.dozent);
          this.dozentmeldung = meldungen[0];
          this.name = inputs[1].value;
          this.namemeldung = meldungen[1];
          this.matrikelnummermeldung = meldungen[2];
          this.matrikelnummereins = inputs[3].value;
          this.matrikelnummerzwei = inputs[4].value;
          this.matrikelnummerdrei = inputs[5].value;
          this.matrikelnummervier = inputs[6].value;
          this.veranstaltungmeldung = meldungen[3];
          this.veranstaltung = inputs[7].value;
          this.pruefungmeldung = inputs[8].value;
          console.log(this.pruefungmeldung);
          this.ueberpruefeEingabe();
        }


 ueberpruefeEingabe(){
  
        if( this.dozent === '') {
            this.dozentmeldung.classList.add('meldungfehlerhaft');
        }

        else{
          this.dozentmeldung.classList.remove('meldungfehlerhaft');
        }
    
        if( this.name === "" ){
            this.namemeldung.classList.add('meldungfehlerhaft');
        }

        else{
          this.namemeldung.classList.remove('meldungfehlerhaft');  
        }

        if( this.matrikelnummereins === "" ){
          this.matrikelnummermeldung.classList.add('meldungfehlerhaft');
        }

        else{
        this.matrikelnummermeldung.classList.remove('meldungfehlerhaft');  
        }
            
        if( this.veranstaltung === "" ){
          this.veranstaltungmeldung.classList.add('meldungfehlerhaft');
           }

        else{
          this.veranstaltungmeldung.classList.remove('meldungfehlerhaft');
        }
            
    }

    remove(){
      if(this.dozentmeldung.classList='meldungfehlerhaft'){
        this.dozentmeldung.classList.remove('meldungfehlerhaft');
        this.dozentmeldung.classList.add('meldung');
      }
      if(this.namemeldung.classList='meldungfehlerhaft'){
        this.namemeldung.classList.remove('meldungfehlerhaft');
        this.namemeldung.classList.add('meldung');
      }
      if(this.matrikelnummermeldung.classList='meldungfehlerhaft'){
        this.matrikelnummermeldung.classList.remove('meldungfehlerhaft');
        this.matrikelnummermeldung.classList.add('meldung');
      }
      if(this.veranstaltungmeldung.classList='meldungfehlerhaft'){
        this.veranstaltungmeldung.classList.remove('meldungfehlerhaft');
        this.veranstaltungmeldung.classList.add('meldung');
      }
      if(this.pruefungmeldung.classList='meldungfehlerhaft'){
        this.pruefungmeldung.classList.remove('meldungfehlerhaft');
        this.pruefungmeldung.classList.add('meldung');
      }
    }

  render() {
      return (
        <div class="login-container">

          <form class="login-form">
                <label id="dozent">
                <span class="meldung">Ihr Name wird für die Auswertung am Ende benötigt.</span>
                <input type="text" id="dozentinput" name="dozent" placeholder="Name des Lehrenden" maxlength="15" value=""/>
                </label>
                <label id="name">
                <span class="meldung">Mindestens ein Name eines Studierenden muss angegeben werden.</span>
                <input type="text" id="gruppeinput" name="name" placeholder="Name des Studierenden / der Gruppe" value=""/>
                </label>
                <span class="meldung">Bitte geben Sie mindestens eine Matrikelnummer im ersten Feld ein.</span>
                <aufklapp-input class="aufklappbuttons"
                  Ueberschrift="Matrikelnummern der Studierenden" 
                  Kriterium1="1. Matrikelnummer"
                  Kriterium2="2. Matrikelnummer"
                  Kriterium3="3. Matrikelnummer"
                  Kriterium4="4. Matrikelnummer"
                ></aufklapp-input>

                <label id="veranstaltung">
                <span class="meldung">Die Bezeichnung der Lehrveranstaltung wird für die Auswertung benötigt.</span>
                <input type="text" id="veranstaltunginput" name="veranstaltung" placeholder="Lehrveranstaltung" value=""/>
                </label>
                <radio-input                 
                  Ueberschrift="Prüfungsleistung" 
                  Kriterium1="1. Matrikelnummer"
                  Kriterium2="2. Matrikelnummer"
                ></radio-input>
                <div class="buttons">
                <input type="reset" id="reset" value="x" onClick={() => { this.remove(); }}/>
                <button id="submit" type="button"  onClick={() => { this.login(); }}>Speichern</button>
                </div>
          </form>
        </div>
      );
  }
}