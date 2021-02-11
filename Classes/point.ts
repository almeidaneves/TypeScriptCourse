export class Point {
  constructor(private x?: Number, private y?: Number) {
    
  }
  draw(): void {
    console.log('x =' + this.x + ', y = ' + this.y);
  }
}

let point = new Point(3, 2);
point.draw();