import { Component, Prop, State } from "@stencil/core";
@Component({
  tag: "test-larissa",
  styleUrl: "test-larissa.css",
  shadow: false,
})
export class ExportierButton {
  @Prop() button: string = "hallo test";
  @State() test: string = "hallloooo";
  @State() export: unknown;

  handleClick() {
    console.log(this.test);
  }

  auto = "test objekt für json";

  componentDidLoad() {
    var testObject = { one: 1, two: 2, three: 3 };
    // Put the object into storage
    localStorage.setItem("testObject", JSON.stringify(testObject));
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem("testObject");
    this.export = retrievedObject;
  }

  csv() {
    const jsonData: string = localStorage.getItem("testObject");

    let array = [JSON.parse(jsonData)];
    var str = "";

    for (var i = 0; i < array.length; i++) {
      var line = "";
      for (var index in array[i]) {
        if (line != "") line += ",";

        line += array[i][index];
      }

      str += line + "\r\n";
    }
    console.log(str);
    return str;

    /* let fields = Object.keys(json[0]);
    let replacer = function (key, value) {
      console.log(key);
      return value === null ? "" : value;
    };
    var csv = json.map(function (row) {
      return fields
        .map(function (fieldName) {
          return JSON.stringify(row[fieldName], replacer);
        })
        .join(";");
    });
    csv.unshift(fields.join(";")); // add header column
    csv = csv.join("\r\n");
    console.log(csv);
    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "bewertung.csv";
    hiddenElement.click(); */
  }

  render() {
    return (
      <button class="button-text" onClick={this.csv}>
        {this.button}
      </button>
    );
  }
}
