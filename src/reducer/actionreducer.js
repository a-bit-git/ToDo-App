const initialdata = {
    list : []
}

const actionReducer = (state=initialdata, action) => {
    switch(action.type){
        case "AddToDo" : 
            const { id , data } = action.payload;
                return {
                    ...state,
                    list : [
                        ...state.list,
                        {
                            id : id,
                            data : data
                        }
                    ]
                }
        case "DeleteToDo" : 
            const newList = state.list.filter((i)=> i.id !== action.id)
                return {
                    ...state,
                    list : newList
                }
        default : return state
    }
}  
export default actionReducer