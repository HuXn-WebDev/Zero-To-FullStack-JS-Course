import { redirect } from "next/navigation";

const Page = () => {
  redirect("/about");

  return <div>Users</div>;
};
export default Page;
