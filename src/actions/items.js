export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchDataError(text) {
    return {
        type: 'ITEMS_FETCH_DATA_ERROR',
        text
    };
}

export function itemsFetchDataLoading() {
    return {
        type: 'ITEMS_FETCH_DATA_LOADING',
    };
}

export function clearErrors() {
    return{
        type:'ITEMS_CLEAR_ERRORS'
    }
}


export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(clearErrors())
        dispatch(itemsFetchDataLoading())
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                dispatch(itemsFetchDataError(response.statusText))
            }
            return response;
        })
        .then((response) => response.json())
        .then((items) => {
            dispatch(itemsFetchDataSuccess(items))
        })
    };
}
