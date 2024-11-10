import React, { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button } from "flowbite-react";
import { Input } from "./index";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createProfile, updateProfile } from '../store/features/profileSlice'; // Adjust the import path as necessary

export default function ProfileForm({ proData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const [error, setError] = useState(null);

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      fullName: proData?.fullName || "",
      slug: proData?.slug || "",
      preferences: proData?.preferences || "",
    },
  });

  const submit = async (data) => {
    setError(null);
    try {
      if (proData) {
        // Update existing profile
        const updatedData = {
          ...data,
          userId: userData.$id,
        };
        await dispatch(updateProfile({ slug: proData.slug, profileData: updatedData })).unwrap();
        navigate(`/profileDisplay/${proData.$id}`);
      } else {
        // Create new profile
        const newData = {
          ...data,
          userId: userData.$id,
        };
        await dispatch(createProfile(newData)).unwrap();
        navigate(`/ProfileDisplay/${newData.slug}`);
      }
    } catch (error) {
      setError(error);
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "fullName") {
        setValue("slug", slugTransform(value.fullName), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="FullName :"
          placeholder="Full Name"
          className="mb-4"
          {...register("fullName", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Avatar :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !proData })}
        />
        {proData && (
          <div className="w-full mb-4">
            <img
              src={UserProfileService.getFilePreview(proData.avatar)}
              alt={proData.fullName}
              className="rounded-lg"
            />
          </div>
        )}
        <Button type="submit" className="w-full">
          {proData ? "Update" : "Submit"}
        </Button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}