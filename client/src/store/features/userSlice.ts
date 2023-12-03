import { createSlice } from '@reduxjs/toolkit';

var initialState = {
    email: '',
    name: '',
    comments: [],
    login: false,
}

export var userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state:any, action:any) => {
            const user = action.payload;

            if(user.login === true) {
                state.login = true
                if(user.email) state.email = user.email;
                if(user.name) state.name = user.name;
                if(user.comments) state.comments = user.comments;
            }
            
        }
    }
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;