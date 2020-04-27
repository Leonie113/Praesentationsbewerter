import { Component, Prop, Event, EventEmitter, Listen,  Element } from '@stencil/core';

@Component({
  tag: 'eingabe-felder',
  styleUrl: 'eingabe-felder.css',
})
export class EingabeFelder{
  @Prop() forgotPasswordUrl: string;
  @Event() loginShouldOccur: EventEmitter;
  @Element() host: HTMLElement;
  public dozent : string;
  dozentmeldung;
  public name : string;
  namemeldung;
  public matrikelnummer : string;
  matrikelnummermeldung;
  public veranstaltung : string;
  veranstaltungmeldung;
  public pruefung : string;
  pruefungmeldung;

  login() {
      let form = this.host.querySelector('form');
      if (form.reportValidity()) {
          let inputs = this.host.querySelectorAll('input');
          this.loginShouldOccur.emit({ dozent: inputs[0].value,
                                       gruppe: inputs[1].value,
                                       mitglieder: inputs[2].value
                                      });
          let meldungen = this.host.querySelectorAll('.meldung');
          this.dozentmeldung = meldungen[0];
          this.dozent = inputs[0].value;
          this.namemeldung = meldungen[1];
          this.name = inputs[1].value;
          this.matrikelnummermeldung = meldungen[2];
          this.matrikelnummer = inputs[2].value;
          this.veranstaltungmeldung = meldungen[3];
          this.veranstaltung = inputs[3].value;
          this.pruefungmeldung = meldungen[4];
          this.pruefung = inputs[4].value;
          this.ueberpruefeEingabe();
        }
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent){
    if (ev.key === 'ArrowDown'){
      this.login();
    }
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
    
        if( this.matrikelnummer === "" ){
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
            
        if( this.pruefung === "" ){
          this.pruefungmeldung.classList.add('meldungfehlerhaft');
           }   
        
        else{
          this.pruefungmeldung.classList.remove('meldungfehlerhaft'); 
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
                <input type="text" id="dozentinput" name="dozent" placeholder="Name des Lehrenden" maxlength="15"/>
                </label>
                <label id="name">
                <span class="meldung">Mindestens ein Name eines Studierenden muss angegeben werden.</span>
                <input type="text" id="gruppeinput" name="name" placeholder="Name des Studierenden / der Gruppe"/>
                </label>
                <label id="matrikelnummer">
                <span class="meldung">Mindestens eine Matrikelnummer muss angegeben werden.</span>
                <input type="text" id="matrikelnummerinput" name="matrikelnummer" placeholder="Matrikelnummern der Studierenden"/>
                </label>
                <label id="veranstaltung">
                <span class="meldung">Die Bezeichnung der Lehrveranstaltung wird für die Auswertung benötigt.</span>
                <input type="text" id="veranstaltunginput" name="veranstaltung" placeholder="Lehrveranstaltung"/>
                </label>
                <label id="pruefung">
                <span class="meldung">Die Bezeichnung der Prüfungsleistung wird für die Auswertung benötigt.</span>
                <input type="text" id="pruefunginput" name="mitglieder" placeholder="Prüfungsleistung"/>
                </label>
                <div class="buttons">
                <input type="reset" id="reset" value="x" onClick={() => { this.remove(); }}/>
                <button id="submit" type="button"  onClick={() => { this.login(); }}>Speichern</button>
                </div>
          </form>
        </div>
      );
  }
}