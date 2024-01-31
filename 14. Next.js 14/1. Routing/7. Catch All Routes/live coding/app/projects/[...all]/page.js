"use client";

const Project = ({ params }) => {
  console.log(params.all);

  return (
    <div>
      <h1>Project {params.all}</h1> <br />
      <br />
      All Routes
      {params.all.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </div>
  );
};

export default Project;
