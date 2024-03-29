import { createAsyncThunk } from '@reduxjs/toolkit'
import { getToken, removeToken, setToken } from '../../utils/HelperFunctions';
import api from '../../service/api'
import history from '../../utils/history'

export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, { rejectWithValue }) => {
    try {
        const accessToken = getToken();
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        const response = await api.get('/user__');

        return { ...response.data, accessToken };
    } catch (e) {
        removeToken();
        return rejectWithValue('');
    }
});

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post('/login__', payload);

    setToken(response.data.accessToken);
    return response.data;
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
    removeToken();
});