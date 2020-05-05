import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'anmerkungs-feld',
  styleUrl: 'anmerkungsfeld.css',
  shadow: true,
})
export class AnmerkungsFeld {
  @Prop() anmerkung: string;
  @Prop() guteAspekte: string;
  @Prop() verbesserung: string;
  handleAnmerkungInput(e: UIEvent){
    const target = e.target as HTMLInputElement;
    localStorage.setItem('anmerkung', target.value);
  }
  handleGutInput(e: UIEvent){
    const target = e.target as HTMLInputElement;
    localStorage.setItem('guteAspekte', target.value);
  }
  handleVerbesserungInput(e: UIEvent){
    const target = e.target as HTMLInputElement;
    localStorage.setItem('verbesserung', target.value);
  }

  
  render() {
    return (
        <div id="background">
          <div class="anmerkungs-feld">
            <h1 class="ueberschrift">Anmerkungen</h1>
            <textarea  placeholder="Text eingeben" onInput={(e: UIEvent) => { this.handleAnmerkungInput(e)}}></textarea>
          </div>
          <div class="anmerkungs-feld">
            <h1 class="ueberschrift">Gute Aspekte</h1>
            <textarea  placeholder="Text eingeben" onInput={(e: UIEvent) => { this.handleGutInput(e)}}></textarea>
          </div>
          <div class="anmerkungs-feld">
            <h1 class="ueberschrift">Verbesserungsvorschläge</h1>
            <textarea  placeholder="Text eingeben" onInput={(e: UIEvent) => { this.handleVerbesserungInput(e)}}></textarea>
          </div>
        </div>
        
    );
  }
}