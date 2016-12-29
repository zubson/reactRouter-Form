import {FETCH_POST} from '../actions/index';

// Initial application state
const INITIAL_STATE = {
    // list of blog posts
    all: [],
    // single post data
    post: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}