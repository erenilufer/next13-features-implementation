import React from "react";
import UserCard from "../../components/UserCard";
import { User } from "../../models/User";

async function fetchUsers() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  return posts.json();
}
async function Users() {
  const users = await fetchUsers();

  return (
    <div className="flex flex-wrap justify-center   py-4 gap-4">
      {users.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
export default Users;
