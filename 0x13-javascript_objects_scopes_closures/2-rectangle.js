#!/node/usr/node
class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
    if (w || h === 0) {
      this.height = '';
      this.width = '';
    }
  }
}

module.exports = Rectangle;
