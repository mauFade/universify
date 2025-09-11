import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const clerkUser = await currentUser();
  console.log(clerkUser);
  return <div>Home</div>;
};

export default Home;
