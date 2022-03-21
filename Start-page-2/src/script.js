https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
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
    this.box.style.top = `${this.y}px`;
    this.box.style.left = `${this.x}px`;
    this.box.style.width = `${this.w}px`;
    this.box.style.height = `${this.h}px`;
    this.box.style.backgroundColor = "rgb(220, 220, 220)";
    this.box.style.border = "2px solid black";
    this.box.style.cursor = "pointer";
    this.box.setAttribute("onclick", `${this.name}.onclick()`);
    document.body.appendChild(this.box);
  }

  header(text) {
    this.header = document.createElement("div");
    this.header.style.position = "fixed ";
    this.header.innerHTML += text;
    this.header.style.top = `${this.y - 20}px`;
    this.header.style.left = `${this.x}px`;
    this.header.style.width = `${this.w}px`;
    this.header.style.height = `${20}px`;
    this.header.style.backgroundColor = "rgb(220, 220, 220)";
    this.header.style.border = "2px solid black";
    this.header.setAttribute("onmouseover", `${this.name}.onmouseover()`);
    this.header.setAttribute("onmouseout", `${this.name}.onmouseout()`);
    document.body.appendChild(this.header);

    console.log(this.x);
  }

  onclick() {
    alert("test");
  }

  onmouseover() {
    this.header.style.backgroundColor = "rgb(240, 240, 240)";
  }

  onmouseout() {
    this.header.style.backgroundColor = "rgb(220, 220, 220)";
  }
}

test = new box("test", 100, 200, 100, 100);
test.header("TEST");
test.show();
