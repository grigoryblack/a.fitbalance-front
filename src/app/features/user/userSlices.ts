import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    role: string;
    isConfirmed: boolean;
    banned: boolean;
    name: string | null;
    surname: string | null;
    email: string;
    phone: string | null;
    createdAt: string;
    deletedAt: string | null;
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser(state, action: PayloadAction<Partial<User>>) {
            if (state.user) {
                state.user = { ...state.user, ...action.payload };
            } else {
                state.user = action.payload as User;
            }
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const { updateUser, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
