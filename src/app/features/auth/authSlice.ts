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

interface AuthState {
    token: string | null;
    user: User | null;
}

const initialState: AuthState = {
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string; user: User }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
