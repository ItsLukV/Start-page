class Cwindow {
  constructor(x, y, mw, mh) {
    this.x = x;
    this.y = y;
    this.mw = mw;
    this.mh = mh;
    this.w = mw;
    this.h = mh;
    this.offsetX = 0;
    this.offsetY = 0;
    this.Close = true;
    this.oldx;
    this.oldy;
  }

  save() {
    let obj = {
      x: this.x,
      y: this.y,
      w: this.w,
      h: this.h,
      mw: this.mw,
      mh: this.mh,
      close: this.Close,
    };
    return obj;
  }

  load(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.w = obj.w;
    this.h = obj.h;
    this.mw = obj.mw;
    this.mh = obj.mh;
    this.Close = obj.close;
  }

  over() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w - 20 &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w - 20 &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + this.h - 20 &&
      mouseY < this.y + this.h
    ) {
      this.sizeing = true;
    }

    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.Close = !this.Close;
    }
  }

  released() {
    // Quit dragging
    this.dragging = false;
    this.sizeing = false;
  }

  header(txt, colr) {
    push();
    if (colr === undefined) {
      fill(220);
    } else {
      fill(colr);
    }
    if (this.rollover) {
      fill(120);
    }
    rect(this.x, this.y - 20, this.w, 20);
    if (this.rollover) {
      fill(255);
    } else {
      fill(0);
    }
    textSize(20);
    text(txt, this.x + 10, this.y - 5 / 2);
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      stroke(255, 0, 0);
    }

    strokeWeight(2);
    line(this.x + this.w - 20, this.y - 10, this.x + this.w - 5, this.y - 10);
    pop();
  }

  move() {
    if (this.Close) {
      return;
    }
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + this.h - 20 &&
      mouseY < this.y + this.h
    ) {
      c = true;
    }

    push();
    line(
      this.x + this.w - 12,
      this.y + this.h - 5,
      this.x + this.w - 5,
      this.y + this.h - 12
    );
    line(
      this.x + this.w - 8,
      this.y + this.h - 5,
      this.x + this.w - 5,
      this.y + this.h - 8
    );
    pop();
  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
    this.header();
    if (this.Close) return;
    if (this.sizeing) {
      this.w = mouseX - this.x;
      this.h = mouseY - this.y;
      if (this.w <= this.mw) {
        this.w = this.mw;
      }
      if (this.h <= this.mh) {
        this.h = this.mh;
      }
    }
    if (!this.Close) {
      rect(this.x, this.y, this.w, this.h);
    }
  }
}
