"use client";

const User = ({ params }) => {
  console.log(params);

  return (
    <div>
      <h1>Info About {params.user}</h1>
      <p>Hello I'm {params.user}</p>
    </div>
  );
};

export default User;
