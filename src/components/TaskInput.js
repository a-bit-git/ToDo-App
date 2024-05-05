import React, { useState } from "react";
import './design.css'
import { useDispatch } from "react-redux"
import { addTodo } from "../action/indaction"
import TaskList from "./TaskList";

const TaskInput = () => {

    const[input, setInput] = useState('')
    // user input to insert their tasks
    const dispatch = useDispatch()

    const [showitems, setshowitems] = useState(false)
    const handleclick = () => {setshowitems(!showitems)}
    // displaying and hiding of tasks list in accordian

    return (
        <div className='container'>

            <div className='top-bar'>
                <input type="text" className="cityinput" placeholder='Add Task...'
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                />
                {/* Input box where the user write its tasks */}
                <div>
                    <button className="search-icon"
                        onClick={()=>{dispatch(addTodo(input),setInput(''))}}
                    >➕</button>
                </div>
                {/* button to add tasks */}
            </div>

            <div>
                <button className="top btn" onClick={handleclick}>View Tasks </button>
            </div>
            {/* button to hide and show the tasks */}

            <div className="show">
                {showitems && <TaskList/>}
            </div>
            {/* list accordian */}
            
        </div>
    )
}
export default TaskInput