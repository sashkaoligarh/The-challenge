const initialState = {
    arr:[],
    sortArr:[],
    fetchDataError: false,
    fetchDataLoading:false,
    fetchDataErrorText:'',
}

const sortArr = (arr) => {
    if(arr){
        return [{
            ...arr[0],
            children: [...arr.slice(4,6).map(item => Object.assign(item, {parent_id:arr[0].id})), 
            Object.assign(arr[6], {children:arr.slice(7,9).map(item => Object.assign(item , {parrent_id:arr[7].id}))})]
        }, ...arr.slice(1,4)]
    } else {
        return
    }
}

export function items(state = initialState, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_LOADING':
            return{
                ...state,
                fetchDataLoading:true
            }
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return{
                ...state,
                arr:action.items,
                sortArr: sortArr(action.items),
                fetchDataLoading:false
            }
        case 'ITEMS_FETCH_DATA_ERROR':
            return {
                ...state,
                fetchDataError:true,
                fetchDataLoading:false,
                fetchDataErrorText:action.text
            }
        case 'ITEMS_CLEAR_ERRORS':
            return {
                ...state,
                fetchDataErrorText:''
            }
        default:
            return state;
    }
}
