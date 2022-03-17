class Gwindow extends Cwindow {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.inp = createInput("");
    this.sumbit = createButton("Search");
    this.sumbit.mousePressed(() => {
      window.open("http://google.com/search?q=" + this.inp.value());
    });
  }

  logo(txt) {
    if (!this.Close) {
      push();
      textSize(100);
      text(txt, this.x + this.w / 2 - 160, this.y + 100);
      pop();
    }
  }

  cInput() {
    this.inp.position(this.x + this.w / 2 - 155, this.y + 5 + 150);
    this.inp.style("height", `${20}px`);
    this.inp.style("width", `${300}px`);
    this.sumbit.position(this.x + this.w / 2 - 50, this.y + 190);
    this.sumbit.style("font-size", "20px");
    this.sumbit.style("width", `${100}px`);
    this.inp.style("background", "");

    if (this.Close) {
      this.inp.style("scale", "0");
      this.sumbit.style("display", "none");
      this.sumbit.style("visibility", "hidden");
    } else {
      this.inp.style("scale", "1");
      this.sumbit.style("display", "block");
      this.sumbit.style("visibility", "visible");
    }
  }
}

// https://stackoverflow.com/questions/16649167/how-to-launch-a-google-search-in-a-new-tab-or-window-from-javascript
// var q = "poop";
// document.getElementById('search').onclick =
