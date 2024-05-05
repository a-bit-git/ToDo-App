import './design.css'
import { useDispatch , useSelector } from "react-redux"
import { deleteTodo } from "../action/indaction"

const TaskList = () => {

    const list = useSelector((state)=>state.actionReducer.list)
    // listing the tasks in the componet
    const dispatch = useDispatch()
    return (
        <div>
            {
                list.map((i) => {
                    return (
                        <div className="line" key={i.id}>
                            <div>{i.data}</div>
                            <div><button className="btn" 
                                onClick={()=>{dispatch(deleteTodo(i.id))}}>❌
                            </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default TaskList