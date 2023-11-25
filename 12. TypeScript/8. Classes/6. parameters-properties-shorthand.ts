class Player {
  //   public readonly first: string;
  //   public readonly last: string;
  //   private score: number = 0;

  constructor(
    public first: string,
    public last: string,
    private score: number
  ) {}

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const dog1 = new Player("Elton", "Steele", 10);
console.log(dog1.first);
console.log(dog1.last);
