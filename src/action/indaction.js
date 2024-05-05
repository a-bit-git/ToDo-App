// action to add items 
export const addTodo = (data) => {
    return {
        type : "AddToDo",
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}
// action to delete items
export const deleteTodo = (id) => {
    return {
        type : "DeleteToDo",
        id
    }
}