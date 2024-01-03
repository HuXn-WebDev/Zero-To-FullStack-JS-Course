type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const huxn: User = {
  first: "HuXn",
  last: "WebDev",
  age: 18,
  email: "test@gmail.com",
  password: "strongpassword123",
};

console.log(
  `Name: (${huxn.first} ${huxn.last}) Age: (${huxn.age}) Email: (${huxn.email}) Password: (${huxn.password})`
);
