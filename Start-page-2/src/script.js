class box {
  constructor(name, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.box = document.createElement("div");
  }

  show() {
    this.box.style.position = "fixed ";
    this.box.style.top = `${this.x}px`;
    this.box.style.left = `${this.y}px`;
    this.box.style.width = `${this.w}px`;
    this.box.style.height = `${this.h}px`;
    this.box.style.backgroundColor = "rgb(220, 220, 220)";
    this.box.style.border = "2px solid black";
    this.box.style.cursor = "pointer";
    this.box.setAttribute("onclick", `${this.name}.onclick()`);
    this.box.setAttribute("onmouseover", `${this.name}.onmouseover()`);
    this.box.setAttribute("onmouseout", `${this.name}.onmouseout()`);
    document.body.appendChild(this.box);
  }

  onclick() {
    alert("test");
  }

  onmouseover() {
    this.box.style.backgroundColor = "rgb(240, 240, 240)";
  }

  onmouseout() {
    this.box.style.backgroundColor = "rgb(220, 220, 220)";
  }
}

test = new box("test", 100, 200, 100, 100);
test.show();
