import React from "react";
import ProfileForm from "../components/UserProfile"; // Adjust the import path as necessary

const ProfileFormPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Create or Update Profile</h1>
      <ProfileForm />
    </div>
  );
};

export default ProfileFormPage;
