import React from "react";
import { useRouter } from "next/router";
import { UserIcon } from "@heroicons/react/24/outline";

const User = () => {
  const router = useRouter();
  return (
    <div>
      <UserIcon className='h-6 w-6' />
    </div>
  );
};

export default User;
