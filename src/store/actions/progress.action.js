import {createAction } from "@reduxjs/toolkit";

export const progressActionIncr = createAction('progress/incr');

export const progressActionBegin = createAsyncThunk(
    'progress/begin',
    async(limit, thunkAPI) => {
        if(!limit || typeof(limit) !== 'number' || isNaN(limit) || limit <= 0) {
            thunkAPI.rejectWithValue('Limite invalide');
            return;
        }
    let count = 0

    while (count < limit) {
        thunkAPI.dispatch(progressActionIncr(count))
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        })
        count++;
    }

    return 'Finish'
    }
)

