import { createSlice} from "@reduxjs/toolkit";
const initialState = [
    { id: '0', name: 'Dude Lebowski' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' }
]
  const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
    },
  });
  export const selectedAllUsers=state=>state.users;
  export default userSlice.reducer;