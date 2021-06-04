/**
 * Follow the lesson guidance to code the skeleton of a monopoly game in OOP JS
 */

// Example of a VERY simple Monopoly game simulation

//Board simulation and dice roll

/*
let playerPostion = 0;
for (i = 0; i < 25; i++) {
  const dice = Math.floor(6 * Math.random());
  playerPostion += dice;
  console.log(playerPostion, playerPostion % 15);
}
*/

// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€
const squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
];

// --- Initialization ---

let player1 = {
  name: "Joaquim",
  color: "red",
  position: 0,
  cash: 1000,

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}€`
    );
  },
};

let player2 = {
  name: "Maxence",
  color: "blue",
  position: 0,
  cash: 1000,

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}€`
    );
  },
};

let player3 = {
  name: "Mostafa",
  color: "black",
  position: 0,
  cash: 1000,

  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}€`
    );
  },
};
let dice;
// --- Turn of Player 1 ---
// The dice is a random integer between 1 and 6
dice = 1 + Math.floor(6 * Math.random());
// The position is always between 0 and 15 (the numbers of squares - 1)
player1.position = (player1.position + dice) % squares.length;
// The cash is updated based on the values of squares and player1.position
player1.cash += squares[player1.position];
// If the player doesn't have anymore cash, player is out of game
console.log(`${player1.name} cash is ${player1.cash}.`);
if (player1.cash < 0) {
  console.log(`Game over for ${player1.name}.`);
}

// --- Turn of Player 2 ---
dice = 1 + Math.floor(6 * Math.random());
//We are updating the position of player 2 to add the value of the dice roll
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
console.log(`${player2.name} cash is ${player2.cash}.`);
if (player2.cash < 0) {
  console.log(`Game over for ${player2.name}.`);
}

// --- Turn of Player 3 ---
dice = 1 + Math.floor(6 * Math.random());
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash < 0) {
  console.log(`Game over for ${player3.name}.`);
}

// --- Display info  ---
console.log(player1);
console.log(player2);
console.log(player3);
