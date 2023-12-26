interface UserShape {
  params: { id: number };
}

// const User = (props: UserShape) => {
const User = ({ params: { id } }: UserShape) => {
  return <div>{id}</div>;
};

export default User;
