import { Component, Prop, State, Element } from "@stencil/core";

@Component({
  tag: "datei-einlesen",
  styleUrl: "datei-einlesen",
  shadow: false,
})
export class DateiEinlesen {
  @Prop() button: string;
  @State() csvdatei;
  @State() files;
  @Element() el: Element;
  @State() datei : any;
  @State() importieren : any;

  // componentDidLoad() {
  //   this.getdatei();
  // }


  // getdatei(){
  //   this.datei  = this.el.querySelector<HTMLInputElement>("#hallo").files;
  //   console.log(this.datei );
  //   var test = this.datei[0];
  //   console.log(test);
  //   var file = test;
  //  console.log(file);
  //    var reader = new FileReader();
  //    reader.readAsText(file);
  //    //if you need to read a csv file with a 'ISO-8859-1' encoding
  //    /*reader.readAsText(file,'ISO-8859-1');*/
   
  //    //When the file finish load
  //    reader.onload = function(event) {

  //      //get the file.
  //      var csv : any = event.target.result;
   
  //      //split and get the rows in an array
  //      var rows : any = csv.split('\n');
     
  //      //move line by line
  //      for (var i = 1; i < rows.length; i++) {
  //        //split by separator (,) and get the columns
  //        var cols = rows[i].split(',');
  //         console.log(cols);
  //        //move column by column
  //        for (var j = 0; j < cols.length; j++) {
  //          /*the value of the current column.
  //          Do whatever you want with the value*/
  //          test = cols[j];
  //          console.log(test+"TEST");
  //        }
  //      }
  //      console.log(test+" array von inputs")
  //    }
  //    this.importieren = test;
  //   console.log("hallo"+this.importieren);
  //   }

  // test(){
  //   console.log(this.importieren);
  //   localStorage.setItem('matrikelnummereins', this.importieren[1]);
  // }

  render() {
    return (
      <div>
         Select a file: <input type="file" id="hallo"/>
        <button
          class="button-text"
          // onClick={this.test}
        >
          {this.button}
        </button>
      </div>
    );
  }
}
