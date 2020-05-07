import { Component, Prop } from "@stencil/core";
@Component({
  tag: "test-larissa",
  styleUrl: "test-larissa.css",
  shadow: false,
})
export class TestLarissa {
  @Prop() punkte;
  @Prop() prozent;
  @Prop() noteend;

  render() {
    return (
      <div id="headlines">
      <p class="end">Gesamt in Punkten: {this.punkte}/140P</p>
      <p class="end">Gesamt in Prozent: {this.prozent}%</p>
      <p class="end">Note: {this.noteend}</p>
      </div>
    );
  }
}
