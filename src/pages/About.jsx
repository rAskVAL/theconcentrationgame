import UserCard from "../components/UserCard";

export default function About() {
  return (
    <div className="container mx-auto my-4 w-full  p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Goal of this project:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Tools used:</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2 ">Team:</h2>
        <div className="grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </div>
  );
}
