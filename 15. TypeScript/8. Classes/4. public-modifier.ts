class Player {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog1 = new Player("Elton", "Steele");
console.log(dog1.score);
