import axios from 'axios';

const API_URL = `...`;

export const searchContents = (keyword) => {
    return (dispatch, getState) => {
        //make async call to the database
        const url = `${API_URL}&title=${keyword.keyword}`;
        axios.get(url)
            .then((response) => {
                const contentList = response.data.data;
                dispatch({ type: 'SEARCH_CONTENT', contentList });
                return;
            })
            .catch((error) => {
                dispatch({ type: 'SEARCH_ERROR', error });
                return;
            });
    }
}