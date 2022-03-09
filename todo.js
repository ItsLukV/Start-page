class Todo extends Cwindow {
  constructor(x, y, mw, mh, dragging) {
    super(x, y, mw, mh, dragging);
    this.points = [];
    this.inp = createInput("");
    this.btn = createButton("Add");
  }

  CInput(x, y) {
    this.inp.style("height", `${20}px`);
    this.inp.style("width", `${this.w - 70}px`);
    this.inp.position(this.x + 5, this.y + 5 + 20 * this.points.length);
    this.btn.position(
      this.x + this.w - 50,
      this.y + 5 + 20 * this.points.length
    );
    this.btn.style("height", `${25}px`);
    this.btn.style("width", `${40}px`);
    this.btn.mousePressed(() => {
      this.points.push(
        new note(
          this.points.length,
          this.x,
          this.y,
          this.w,
          this.h,
          this.inp.value()
        )
      );
    });
  }

  over() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y - 20 &&
      mouseY < this.y
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].over();
    }
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
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
    {
      let e;
      for (let i = 0; i < this.points.length; i++) {
        if (this.points[i].pressed() !== undefined) {
          e = this.points[i].pressed();
        }
      }
      arrRemove(this.points, e);
    }
  }

  update() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
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
    this.header();
    rect(this.x, this.y, this.w, this.h);
    if (this.dragging) {
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].update(this.x, this.y, this.w, this.h, i);
        this.points[i].createText("");
      }
    }
    for (let i = 0; i < this.points.length; i++) {
      this.points[i].update(this.x, this.y, this.w, this.h, i);
    }
  }
}

class note {
  constructor(id, x, y, w, h, inp) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.inp = inp;
    this.createText();
    console.log(inp);
  }

  update(x, y, w, h, id) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.id = id;
    this.removebtn();
    this.createText();
  }

  createText() {
    textSize(20);
    text(
      "◾  " + this.inp,
      this.x + 5,
      this.y + 5 + 20 * this.id,
      this.w - 5,
      20
    );
  }

  removebtn() {
    push();
    if (this.rollover) {
      stroke(255, 0, 0);
    } else {
      stroke(0);
    }
    line(
      this.x + this.w - 20,
      this.y + 5 + 20 * this.id,
      this.x + this.w - 5,
      this.y + 20 + 20 * this.id
    );
    line(
      this.x + this.w - 5,
      this.y + 5 + 20 * this.id,
      this.x + this.w - 20,
      this.y + 20 + 20 * this.id
    );
    pop();
  }

  pressed() {
    // Did I click on the rectangle?
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + 5 + 20 * this.id &&
      mouseY < this.y + 20 + 20 * this.id
    ) {
      return this.id;
    }
  }

  over() {
    if (
      mouseX > this.x + this.w - 20 &&
      mouseX < this.x + this.w - 5 &&
      mouseY > this.y + 5 + 20 * this.id &&
      mouseY < this.y + 20 + 20 * this.id
    ) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }
}
