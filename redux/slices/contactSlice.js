// src/redux/contactSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// async thunk to submit contact form
export const submitContact = createAsyncThunk(
  "contact/submitContact",
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://hires-lab.glitch.me/api/contacts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      return await response.json();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContact.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitContact.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
