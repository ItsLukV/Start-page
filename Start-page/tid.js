class Time extends Cwindow {
  constructor(x, y, mw, mh, dragging) {
    super(x, y, mw, mh, dragging);
  }

  time() {
    if (this.Close) return;
    let a = new Date().toLocaleTimeString("en-GB", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    push();
    textFont("consolas");
    textSize(45);
    text(a, this.x + this.w / 2 - 100, this.y + this.h / 2 + 5);

    pop();
  }
}
