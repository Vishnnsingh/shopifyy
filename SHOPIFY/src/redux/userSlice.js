import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch users from the API
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data = await response.json();
  console.log("Fetched Users:", data.results); // Debugging
  return data.results;
});

// Delete user action
export const deleteUser = createAsyncThunk("users/deleteUser", async (userId, { getState }) => {
  const currentUsers = getState().users.list.filter(user => user.login?.uuid !== userId);
  return currentUsers;
});

// Update user action
export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser, { getState }) => {
  const currentUsers = getState().users.list.map(user => 
    user.login?.uuid === updatedUser.login?.uuid ? updatedUser : user
  );
  return currentUsers;
});

const userSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
