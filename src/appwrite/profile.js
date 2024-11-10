import { Client, Databases, ID, Storage } from "appwrite";
import conf from "../conf";

export class UserProfileService {
  constructor() {
    this.client = new Client()
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createProfile(fullName, userID, avatar, preferences) {
    const slug = ID.unique(); // Generate a unique slug for the profile
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfilesCollectionId,
        slug,
        { fullName, avatar, preferences, userID }
      );
    } catch (error) {
      console.error("Error creating profile:", error);
      throw error; // Rethrow the error for further handling
    }
  }

  async getProfile(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfilesCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error retrieving profile:", error);
      throw error;
    }
  }

  async updateProfile(slug, { fullName, avatar, preferences }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfilesCollectionId,
        slug,
        { fullName, avatar, preferences } // Include fullName in the update
      );
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }

  async deleteProfile(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteProfilesCollectionId,
        slug
      );
    } catch (error) {
      console.error("Error deleting profile:", error);
      throw error;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error; // Rethrow for handling upstream
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.error("Error deleting file:", error);
      return false; // Return false if deletion fails
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const userProfileService = new UserProfileService();

export default userProfileService;