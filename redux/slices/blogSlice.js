import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://hires-lab.glitch.me/api/articles";

// Fetch all articles
export const fetchArticles = createAsyncThunk(
  "blog/fetchArticles",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Fetch failed:", {
          status: res.status,
          statusText: res.statusText,
          responseText: errorText,
        });
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      console.log("Fetched articles successfully:", data);
      return data.data;
    } catch (error) {
      console.error("Error fetching articles:", {
        message: error.message,
        name: error.name,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch a single article by ID
export const fetchSingleArticle = createAsyncThunk(
  "blog/fetchSingleArticle",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Fetch single article failed:", {
          status: res.status,
          statusText: res.statusText,
          responseText: errorText,
        });
        throw new Error(
          `Failed to fetch article: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      console.log("Fetched single article successfully:", data);
      return data.data; // Return the nested data object
    } catch (error) {
      console.error("Error fetching single article:", {
        message: error.message,
        name: error.name,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Create a new article
export const createArticle = createAsyncThunk(
  "blog/createArticle",
  async (articleData, thunkAPI) => {
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Create article failed:", {
          status: res.status,
          statusText: res.statusText,
          responseText: errorText,
        });
        throw new Error(
          `Failed to create article: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      console.log("Created article successfully:", data);
      return data; // Adjust based on API response
    } catch (error) {
      console.error("Error creating article:", {
        message: error.message,
        name: error.name,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Update an existing article
export const updateArticle = createAsyncThunk(
  "blog/updateArticle",
  async ({ id, articleData }, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(articleData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Update article failed:", {
          status: res.status,
          statusText: res.statusText,
          responseText: errorText,
        });
        throw new Error(
          `Failed to update article: ${res.status} ${res.statusText}`
        );
      }

      const data = await res.json();
      console.log("Updated article successfully:", data);
      return { id, updatedArticle: data }; // Return the ID and updated article
    } catch (error) {
      console.error("Error updating article:", {
        message: error.message,
        name: error.name,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Delete an article
export const deleteArticle = createAsyncThunk(
  "blog/deleteArticle",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Delete article failed:", {
          status: res.status,
          statusText: res.statusText,
          responseText: errorText,
        });
        throw new Error(
          `Failed to delete article: ${res.status} ${res.statusText}`
        );
      }

      console.log("Deleted article successfully:", id);
      return id; // Return the ID of the deleted article
    } catch (error) {
      console.error("Error deleting article:", {
        message: error.message,
        name: error.name,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  articles: [],
  singleArticle: null,
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearSingleArticle: (state) => {
      state.singleArticle = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchSingleArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.singleArticle = null;
      })
      .addCase(fetchSingleArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.singleArticle = action.payload;
      })
      .addCase(fetchSingleArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.loading = false;
        state.articles.push(action.payload);
      })
      .addCase(createArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateArticle.fulfilled, (state, action) => {
        state.loading = false;
        const { id, updatedArticle } = action.payload;
        const index = state.articles.findIndex((article) => article._id === id);
        if (index !== -1) {
          state.articles[index] = updatedArticle;
        }
        if (state.singleArticle && state.singleArticle._id === id) {
          state.singleArticle = updatedArticle;
        }
      })
      .addCase(updateArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteArticle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.loading = false;
        const id = action.payload;
        state.articles = state.articles.filter((article) => article._id !== id);
        if (state.singleArticle && state.singleArticle._id === id) {
          state.singleArticle = null;
        }
      })
      .addCase(deleteArticle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSingleArticle } = blogSlice.actions;
export default blogSlice.reducer;
