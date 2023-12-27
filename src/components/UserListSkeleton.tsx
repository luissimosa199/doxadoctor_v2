import React from "react";
import UserFilterContainerSkeleton from "./UserFilterContainerSkeleton";

const UserListSkeleton = () => {
  return (
    <div className={`min-h-[400vh] px-6`}>
      <div className="w-full max-w-[450px] md:max-w-[850px] lg:max-w-4xl xl:max-w-6xl mx-auto">
        <UserFilterContainerSkeleton />

        <div className="p-2 h-10 mt-4 w-full border rounded" />
      </div>

      <ul className="flex flex-wrap gap-y-6 justify-around w-full">
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
        <li className="h-[400px] w-[280px] bg-gray-300 my-2 animate-pulse"></li>
      </ul>
    </div>
  );
};

export default UserListSkeleton;
