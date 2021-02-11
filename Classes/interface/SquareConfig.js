function createSquare(config) {
    var newSquare = { color: "White", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "white" });
console.log(mySquare.color);
