"use client";

const StudentDetails = ({ params }) => {
  //   console.log(params);

  return (
    <div>
      <h1>Student Details</h1>
      <p>Hello {params.student}</p>
    </div>
  );
};

export default StudentDetails;
