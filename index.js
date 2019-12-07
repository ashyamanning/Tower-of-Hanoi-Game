const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.close();

class Game {
    constructor() {
        this.towers = [[3, 2, 1],[],[]];
    }
    getMove() {
        rl.question("Where do you want your disc to move from?", (from) => {
            rl.question("Where do you want your disc to move to?", (to) => {
                this.makeMove(from, to)
                rl.close();
            })
        })
        
    }
    makeMove(from, to) {
        let discFrom = this.towers[(from - 1)];
        let discTo = this.towers[(to - 1)];
        let disc =  discFrom.pop();
        discTo.push(disc);

    }
    render() {
        this.towers.forEach((tower, i) => {
            console.log(`Tower ${i + 1}... ${tower}`)
        })
    }
    isValidMove(from, to) {
        let discFrom = this.towers[from - 1][this.towers[from - 1].length - 1];
        let discTo = this.towers[to - 1][this.towers[to - 1].length - 1];
        if (discFrom < discTo || this.towers[to - 1].length === 0) {
            return true;
        } else {
            return "Not a valid move!"
        }
    }
    isWon() {
        this.towers.forEach((tower, i) => {
            if (tower[i + 1] === [3, 2, 1]) {
                return true;
            }
        })
        return false;
    }
}

let game1 = new Game();
game1.render()
// game1.getMove();
console.log(game1.isWon());
console.log(game1.isValidMove(1,2));
game1.makeMove(1, 2);
game1.render();
console.log(game1.isWon());
console.log(game1.isValidMove(1,2));
game1.render();
game1.isWon();


