interface SquareCOnfig{
  color?: string;
  width?: number;
}

function createSquare(config: SquareCOnfig): { color: string, area: number }{
  let newSquare = { color: "White", area: 100 };

  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }

  return newSquare;
}

let mySquare = createSquare({ color: "white" });

console.log(mySquare.color);