import React from "react";
import ProfileDisplay from "../components/profileDisplay"; // Adjust the import path as necessary

const ProfileDisplayPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Profile Details</h1>
      <ProfileDisplay />
    </div>
  );
};

export default ProfileDisplayPage;