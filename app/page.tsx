import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { SigninButton, SignOutButton } from "./components/buttons";

const HomePage = async () => {
  const session = await getServerSession(options);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {session ? (
        <div className="text-center">
          <h1>Welcome Back</h1>
          <p>Signed in as: {session.user?.name}</p>
          <p>Your email: {session.user?.email}</p>
          <SignOutButton />
        </div>
      ) : (
        <div className="text-center">
          <h1>you are not signed in</h1>
          <SigninButton />
        </div>
      )}
    </div>
  );
};

export default HomePage;
