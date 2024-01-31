class Player {
  readonly first: string;
  readonly last: string;
  score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog1 = new Player("Elton", "Steele");
console.log(dog1.score);
