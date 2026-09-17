// import { createSlice } from "@reduxjs/toolkit";


import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

import {
    getProjectFeed
} from "./projectFeedApi";


const initialState = {
    projects: [],

    nextCursor: null,

    hasMore: true,

    loading: false,

    error: null,

    initialized: false
};


export const fetchProjectFeed = createAsyncThunk(

    "projectFeed/fetchProjectFeed",

    async (
        { cursor = null, limit = 5 } = {},
        { rejectWithValue }
    ) => {

        try {

            const data = await getProjectFeed({
                cursor,
                limit
            });

            return data;

        } catch (error) {

            return rejectWithValue(
                error.message
            );

        }

    }

);


const projectFeedSlice = createSlice({

    name: "projectFeed",

    initialState,

    reducers: {

        fetchFeedRequest: (state) => {

            state.loading = true;
            state.error = null;

        },

        fetchFeedSuccess: (state, action) => {

            const {
                projects,
                nextCursor,
                hasMore
            } = action.payload;

            /*
             * Append the new batch.
             */
            state.projects = [
                ...state.projects,
                ...projects
            ];

            state.nextCursor = nextCursor;

            state.hasMore = hasMore;

            state.loading = false;

            state.initialized = true;

        },

        fetchFeedFailure: (state, action) => {

            state.loading = false;

            state.error =
                action.payload || "Failed to load projects";

        },

        resetProjectFeed: (state) => {

            state.projects = [];

            state.nextCursor = null;

            state.hasMore = true;

            state.loading = false;

            state.error = null;

            state.initialized = false;

        }

    }
,
    extraReducers: (builder) => {

        builder

            .addCase(
                fetchProjectFeed.pending,
                (state) => {

                    state.loading = true;

                    state.error = null;

                }
            )

            .addCase(
                fetchProjectFeed.fulfilled,
                (state, action) => {

                    const {
                        projects,
                        nextCursor,
                        hasMore
                    } = action.payload;


                    /*
                     * IMPORTANT:
                     * Append instead of replacing.
                     */

                    state.projects.push(
                        ...projects
                    );


                    state.nextCursor =
                        nextCursor;

                    state.hasMore =
                        hasMore;

                    state.loading =
                        false;

                    state.initialized =
                        true;

                }
            )

            .addCase(
                fetchProjectFeed.rejected,
                (state, action) => {

                    state.loading = false;

                    state.error =
                        action.payload ||
                        "Failed to fetch projects";

                }
            );
    }

});

// export const {
//     fetchFeedRequest,
//     fetchFeedSuccess,
//     fetchFeedFailure,
//     resetProjectFeed
// } = projectFeedSlice.actions;

// export default projectFeedSlice.reducer;



export const {
    resetProjectFeed
} = projectFeedSlice.actions;


export default projectFeedSlice.reducer;