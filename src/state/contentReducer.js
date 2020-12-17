const initState = {}

const contentReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SEARCH_CONTENTS':
            return {
                ...state,
                contentList: action.contentList.results
            }
        case FETCH_CONTENTS:
            return action.data;
        default:
            return state;
    }
}

export default contentReducer;