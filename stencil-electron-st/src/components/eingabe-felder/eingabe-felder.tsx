import { Component, State, Event, EventEmitter,  Element } from '@stencil/core';

@Component({
  tag: 'eingabe-felder',
  styleUrl: 'eingabe-felder.css',
})
export class EingabeFelder{
  @State() forgotPasswordUrl: string;
  @Event() loginShouldOccur: EventEmitter;
  @Element() host: HTMLElement;
  @State()  dozent : string;
  @State() dozentmeldung: any;
  @State()  name : string;
  @State() namemeldung: any;
  @State() matrikelnummereins: string;
  @State() matrikelnummerzwei: string;
  @State() matrikelnummerdrei: string;
  @State() matrikelnummervier: string;
  @State() matrikelnummerfuenf: string;
  @State() matrikelnummersechs: string;
  @State() matrikelnummersieben: string;
  @State() matrikelnummeracht: string;
  @State() matrikelnummermeldung: any;
  @State()  veranstaltung : string;
  @State() veranstaltungmeldung:any;
  @State()  pruefung : string;
  @State() pruefungmeldung: any;
  @State() inputs;


  handleDozentInput(e: UIEvent){
    const target = e.target as HTMLInputElement;
    localStorage.setItem('dozent', target.value);
  }
  handleGruppeInput(e: UIEvent){
    const target = e.target as HTMLInputElement;
    localStorage.setItem('gruppe', target.value);
  }
  handleVeranstaltungInput(e: UIEvent){
    const target = e.target as HTMLInputElement;
    localStorage.setItem('veranstaltung', target.value);
  }

    login(e:Event) {
          e.preventDefault();
          let inputs = this.host.querySelectorAll('input');
          this.inputs = inputs;
          console.log(inputs);
          let meldungen = this.host.querySelectorAll('.meldung');
          this.dozent = inputs[0].value;
          console.log(this.dozent);
          this.name = inputs[1].value;
          this.matrikelnummereins = inputs[3].value;
          console.log(this.matrikelnummereins);
          this.matrikelnummerzwei = inputs[4].value;
          this.matrikelnummerdrei = inputs[5].value;
          this.matrikelnummervier = inputs[6].value;
          this.veranstaltung = inputs[11].value;
          this.pruefungmeldung = inputs[8].value;
          this.dozentmeldung = meldungen[0];
          this.namemeldung = meldungen[1];
          this.matrikelnummermeldung = meldungen[2];
          this.veranstaltungmeldung = meldungen[3];
          console.log(meldungen);
          this.ueberpruefeEingabe();
          //console.log("Hallo");
        }
 ueberpruefeEingabe(){
        if( this.dozent === '') {
            this.dozentmeldung.classList.add('meldungfehlerhaft');
        }

        else{
          this.dozentmeldung.classList.remove('meldungfehlerhaft');
          this.inputs[0].value = this.dozent;
        }
    
        if( this.name === "" ){
            this.namemeldung.classList.add('meldungfehlerhaft');
        }

        else{
          this.namemeldung.classList.remove('meldungfehlerhaft'); 
          this.inputs[1].value = this.name;
        }

        if( this.matrikelnummereins === "" ){
          this.matrikelnummermeldung.classList.add('meldungfehlerhaft');
        }

        else{
        this.matrikelnummermeldung.classList.remove('meldungfehlerhaft'); 
        this.inputs[3].value = this.matrikelnummereins;
        }
            
        if( this.veranstaltung === "" ){
          this.veranstaltungmeldung.classList.add('meldungfehlerhaft');
           }

        else{
        this.veranstaltungmeldung.classList.remove('meldungfehlerhaft');
        this.inputs[11].value = this.veranstaltung;
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
    public testDaten(){

      let inputs = this.host.querySelectorAll('input');
      inputs[0].value = this.dozent = localStorage.getItem('dozent');
      inputs[1].value = this.name = localStorage.getItem('gruppe');
      inputs[3].value = this.matrikelnummereins = localStorage.getItem('matrikelnummereins');
      inputs[4].value = this.matrikelnummerzwei = localStorage.getItem('matrikelnummerzwei');
      inputs[5].value = this.matrikelnummerdrei = localStorage.getItem('matrikelnummerdrei');
      inputs[6].value = this.matrikelnummervier = localStorage.getItem('matrikelnummervier');
      inputs[7].value = this.matrikelnummerfuenf = localStorage.getItem('matrikelnummerfuenf');
      inputs[8].value = this.matrikelnummersechs = localStorage.getItem('matrikelnummersechs');
      inputs[9].value = this.matrikelnummersieben = localStorage.getItem('matrikelnummersieben');
      inputs[10].value = this.matrikelnummeracht = localStorage.getItem('matrikelnummeracht');
      inputs[11].value = this.veranstaltung = localStorage.getItem('veranstaltung');
    }

    // grueßen(){
    //   console.log("hallo");
    // }

  render() {

      return (
        <div class="login-container">
{/* {this.grueßen()} */}
          <form class="login-form">
                <label id="dozent">
                  <span class="meldung">Ihr Name wird für die Auswertung am Ende benötigt.</span>
                  <input type="text" id="dozentinput" name="dozent" placeholder="Ihr Name" maxlength="30"  onInput={(e: UIEvent) => { this.handleDozentInput(e)}}/>
                </label>
                <label id="name">
                  <span class="meldung">Mindestens ein Name eines Studierenden muss angegeben werden.</span>
                  <input type="text" id="gruppeinput" name="name" placeholder="Name des Studierenden / der Gruppe" onInput={(e: UIEvent) => { this.handleGruppeInput(e)}}/>
                </label>
                <span class="meldung">Bitte geben Sie mindestens eine Matrikelnummer im ersten Feld ein.</span>
                <aufklapp-input class="aufklappbuttons"
                  Ueberschrift="Matrikelnummern der Studierenden  ▼" 
                  Kriterium1="1. Matrikelnummer"
                  Kriterium2="2. Matrikelnummer"
                  Kriterium3="3. Matrikelnummer"
                  Kriterium4="4. Matrikelnummer"
                  Kriterium5="5. Matrikelnummer"
                  Kriterium6="6. Matrikelnummer"
                  Kriterium7="7. Matrikelnummer"
                  Kriterium8="8. Matrikelnummer"
                ></aufklapp-input>
                <label id="name">
                  <span class="meldung">Die Lehrveranstaltung wird für die Auswertung am Ende benötigt</span>
                  <input type="text" id="veranstaltunginput" name="name" placeholder="Name der Veranstaltung"  onInput={(e: UIEvent) => { this.handleVeranstaltungInput(e)}}/>
                </label>
                <div class="container-info">
                  <img id="information" src="/assets/info.svg" alt="Information"></img>
                  <h2 id="text">Dieser Bewertungsbogen ist für einen Projektvortrag</h2>
                </div>
                <div class="buttons">
                <input type="reset" id="reset" value="x" onClick={() => this.remove()}/>
                <button id="submit" type="button"  onClick={(e: Event) => this.login(e)}>Speichern</button>
                </div>
          </form>
        </div>
      );
  }


}
