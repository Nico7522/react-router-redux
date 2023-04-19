import {createAction } from "@reduxjs/toolkit";

export const progressActionIncr = createAction('progress/incr');

export const progressActionBegin = createAsyncThunk(
    'progress/begin',
    async(limit, { getState, dispatch }) => {
    let count = 0

    while (getState().progress.current < getState().current.end) {
        dispatch(progressActionIncr())
        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        })
        count++;
    }

    },
    {
        condition: (limit) => {
            // Test d'acceptation (Si valeur "true" => le process continue)
            return limit && typeof(limit) === 'number' && !isNaN(limit) && limit > 0
        },
        dispatchConditionRejection: true
    },
)