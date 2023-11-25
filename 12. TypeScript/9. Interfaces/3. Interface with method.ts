// Interface with method
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  sayHello(): void;
}

function greet(person: Person) {
  console.log(`Hello, ${person.firstName} ${person.lastName}!`);
  person.sayHello();
}

const john: Person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  sayHello() {
    console.log("Hi there!");
  },
};

const huxn: Person = {
  firstName: "HuXn",
  lastName: "WebDev",
  age: 18,
  sayHello() {
    console.log("What's good");
  },
};

greet(john);
greet(huxn);

// ----------------------------------
// Interface #3 (Interface with method properties)
interface Song {
  songName: string;
  singerName?: string;
  printSongInfo(songName: string, singerName: string): string;
}

const song1: Song = {
  songName: "Natural",
  singerName: "Imagin Drigon",
  printSongInfo: (songName, singerName) => {
    return `Song: (${songName}) Singer: (${singerName})`;
  },
};

console.log(song1.printSongInfo("Natural", "Imagin Drigon"));
// ---------------------------
