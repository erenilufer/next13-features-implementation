import React from "react";
import { User } from "../models/User";
interface Props {
  user: User;
}
const UserCard = (props: Props) => {
  const { user } = props;
  return (
    <div className="cursor-pointer p-5 max-w-md ring-2 ring-slate-500   group hover:ring-white duration-300">
      <h1 className="text-2xl font-bold py-2  text-slate-400   group-hover:text-white duration-300">
        {user.name}
      </h1>
      <p className=" text-slate-400   group-hover:text-white duration-300">
        {user.company.name}
      </p>
    </div>
  );
};

export default UserCard;
