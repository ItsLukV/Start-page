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
    push();
    textSize(100);
    text(txt, this.x + this.w / 2 - 160, this.y + 100);
    pop();
  }

  cInput() {
    this.inp.position(this.x + this.w / 2 - 155, this.y + 5 + 150);
    this.inp.style("height", `${20}px`);
    this.inp.style("width", `${300}px`);
    this.sumbit.position(this.x + this.w / 2 - 50, this.y + 190);
    this.sumbit.style("font-size", "20px");
    this.sumbit.style("width", `${100}px`);
  }
}

// https://stackoverflow.com/questions/16649167/how-to-launch-a-google-search-in-a-new-tab-or-window-from-javascript
// var q = "poop";
// document.getElementById('search').onclick =
