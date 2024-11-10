import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from '../store/features/profileSlice'; // Assuming you have a fetchProfile action

const ProfileDisplay = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profiles.find(p => p.slug === slug));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        await dispatch(getProfile(slug)).unwrap(); // Fetch profile data
      } catch (err) {
        setError(err.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [slug, dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!profile) {
    return <p>Profile not found.</p>;
  }

  return (
    <div className="profile-display">
      <h1>{profile.fullName}</h1>
      <p><strong>Slug:</strong> {profile.slug}</p>
      <p><strong>Preferences:</strong> {profile.preferences}</p>
      {profile.avatar && (
        <img
          src={UserProfileService.getFilePreview(profile.avatar)}
          alt={profile.fullName}
          className="rounded-lg"
        />
      )}
    </div>
  );
};

export default ProfileDisplay;
