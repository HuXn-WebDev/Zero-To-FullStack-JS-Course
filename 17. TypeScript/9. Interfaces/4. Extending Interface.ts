// Interface #5 (Extending Interface)
interface MovieDetails {
  readonly name: string;
  ratings: number;
  printMovieInfo(name: string, price: number, ratings: number): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}

const movie1: MovieGenra = {
  name: "John Wick",
  ratings: 7,
  printMovieInfo(name: string, price: number, ratings: number) {
    return `Name: ${name}, Price: ${price}, Ratings: ${ratings}`;
  },
  genra: "Action",
};

const res = movie1.printMovieInfo("John Wick", 100, 8);
console.log(res);
