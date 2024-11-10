import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userProfileService from '../../appwrite/profile'; // Adjust the import path as necessary

// Async thunks for handling asynchronous actions
export const createProfile = createAsyncThunk(
  'profile/createProfile',
  async ({ fullName, userID, avatar, preferences }, { rejectWithValue }) => {
    try {
      const response = await userProfileService.createProfile(fullName, userID, avatar, preferences);
      return response; // Return the created profile
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await userProfileService.getProfile(slug);
      return response; // Return the retrieved profile
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  async ({ slug, profileData }, { rejectWithValue }) => {
    try {
      const response = await userProfileService.updateProfile(slug, profileData);
      return response; // Return the updated profile
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProfile = createAsyncThunk(
  'profile/deleteProfile',
  async (slug, { rejectWithValue }) => {
    try {
      await userProfileService.deleteProfile(slug);
      return slug; // Return the slug of the deleted profile
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice definition
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profiles: [],   // Array to store profiles
    loading: false, // Loading state
    error: null,    // Error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles.push(action.payload); // Add the new profile to the state
      })
      .addCase(createProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error message
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.profiles.findIndex(profile => profile.$id === action.payload.$id);
        if (index !== -1) {
          state.profiles[index] = action.payload; // Update existing profile
        } else {
          state.profiles.push(action.payload); // Add new profile if not exists
        }
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error message
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.profiles.findIndex(profile => profile.$id === action.payload.$id);
        if (index !== -1) {
          state.profiles[index] = action.payload; // Update profile in state
        }
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error message
      })
      .addCase(deleteProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profiles = state.profiles.filter(profile => profile.$id !== action.payload); // Remove deleted profile
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Capture error message
      });
  },
});

// Export the reducer
export const profileReducer = profileSlice.reducer;

export default profileSlice