import React, { useContext } from 'react'
import { useState } from 'react';
import { IoIosAdd } from "react-icons/io";
import TaskData from '../context/TaskData';

function TaskForm() {
    // localStorage.clear()
    
    const [showModal, setShowModal] = useState(false);
    
    const [title, setTitle] = useState("")
    const [task, setTask] = useState("")

    const { addTask } = useContext(TaskData)

    const add = (e) => {
        e.preventDefault()
        if(!title || !task) return 

        addTask({title, task, checked: false})
        setTitle("")
        setTask("")

        setShowModal(false)
    }

    return (
        <div>
            <div id='themeBtn' className='w-auto absolute right-0 mr-[6rem] top-0 mt-6 py-[.6rem] px-4 bg-slate-950 rounded-lg text-white font-bold cursor-pointer'>
                <button onClick={() => setShowModal(true)} className='flex'>
                    <h4>Add Task</h4>
                    <IoIosAdd size={'1.4em'} className='ml-2 bg-white text-black rounded-full' />
                </button>
            </div>

            {showModal && (
                <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
                    <div className="absolute bg-gray-800 opacity-[0.76] w-full h-full"></div>
                    <div className="z-50 bg-white p-8 rounded shadow-lg sm:w-1/2 md:w-2/5 lg:w-2/6 dark:bg-slate-950 dark:text-white">
                        <h1 className="text-2xl font-bold mb-4">Task</h1>
                        <input
                            type="text"
                            placeholder="Title"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-400 rounded mb-2 p-2 block w-full dark:text-black"
                        />
                        <textarea
                            placeholder="Enter your Task"
                            rows={5}
                            required
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                            className="border border-gray-400 rounded mb-4 p-2 block w-full dark:text-black" >
                        </textarea>
                        <button
                            onClick={add}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded dark:bg-slate-700 dark:hover:bg-slate-900"
                        >
                            Add Task
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4 dark:bg-slate-700 dark:hover:bg-slate-900"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TaskForm
