import React, { useCallback, useContext, useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import TaskData from '../context/TaskData'


function Card({ task }) {

    const { deleteTask, updateTask, toggleChecked } = useContext(TaskData)
    const [editClicked, setEditClicked] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newTask, setNewTask] = useState("")


    const deleteCard = () => {
        deleteTask(task.id)
    }

    const editTask = () => {
        setEditClicked(true)
        setNewTitle(task.title)
        setNewTask(task.task)
    }

    const saveUpdatedTask = () => {
        updateTask(task.id, { ...task, title: newTitle, task: newTask })
        setEditClicked(false)
    }

    const checkboxChecked = () => {
        toggleChecked(task.id)
    }

    return (
        <>
            <div className=''>
                { task.checked ? <GiCheckMark className='absolute right-[-25px] top-[-20px]' size={70} /> : "" }
                {editClicked ?
                    <input type="text" className='text-white w-auto p-[1px] pl-2 bg-transparent border m-2 border-white rounded-md'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)} /> :
                    <h1 className='text-xl font-bold text-center py-2'>{task.title}</h1>
                }

                <hr className={`${task.checked ? 'border border-black' : ''}`} />

                {editClicked ?
                    <textarea className='text-white min-w-[11.8rem] p-[1px] pl-2 bg-transparent border m-2 border-white rounded-md'
                        rows={4}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)} >
                    </textarea> :
                    <div className='mx-5 mt-3'>
                        <h1>{task.task}</h1>
                    </div>
                }

                <div className='absolute flex items-center bottom-0 rounded-b-lg rounded- bg-gray-700 h-[16%] w-full bg-cover text-black'>
                    <div className='flex justify-between w-screen'>
                        <button disabled={task.checked ? true : ""}
                            className={`${task.checked ? 'cursor-not-allowed' : ''}`} >
                            {editClicked ?
                                <FaRegSave size={22} className='ml-5' onClick={saveUpdatedTask} /> :
                                <FaRegEdit size={22} className='text-green-600 ml-5' onClick={editTask} />}
                        </button>
                        <button className='ml-2'>
                            <MdDeleteOutline size={24} className='text-red-700 mr-2' onClick={deleteCard} />
                        </button>
                        <input type="checkbox"
                            className='mr-5 p-3 scale-[1.3]'
                            checked={task.checked}
                            onClick={checkboxChecked} />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card
