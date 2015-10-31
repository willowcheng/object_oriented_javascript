function Dice(sides) {
    this.sides = sides;
    this.roll = function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

Dice.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
};

var dice = new Dice(6);
var dice10 = new Dice(10);

console.log(dice10.roll === dice.roll);