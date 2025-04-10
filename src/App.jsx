import React, { useEffect, useRef, useState } from 'react'
import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/ThemeBtn'
import Home from './components/Home'
import TaskForm from './components/TaskForm'
import { TaskDataProvider } from './context/TaskData'
import Card from './components/Card'
import { motion } from "framer-motion"

function App() {
  const [themeMode, setThemeMode] = useState("dark")

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  // handaling tasks
  const [tasks, setTasks] = useState([])

  const addTask = (title, task) => {
    setTasks((prev) => [{ id: Date.now(), ...title, ...task }, ...prev])
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const updateTask = (id, { title, task }) => {
    setTasks((prev) => prev.map((prevTask) => prevTask.id === id ? { ...prevTask, title, task } : prevTask))
  }

  const toggleChecked = (id) => {
    setTasks((prev) => prev.map((prevTask) => prevTask.id === id ? { ...prevTask, checked: !prevTask.checked } : prevTask))
  }

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("Tasks"))

    if (tasks && tasks.length > 0) {
      setTasks(tasks)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <TaskDataProvider value={{ tasks, addTask, deleteTask, updateTask, toggleChecked }}>
        <div className='h-full w-100'>
          <ThemeBtn />
          <div className='h-auto'>
            <div className='flex flex-wrap justify-center pt-20 sm:pl-10 pl-0 min-h-screen overflow-hidden text-slate-950 dark:bg-slate-900'>
              {
                tasks && tasks.length > 0 ?
                  tasks.map((task) => (
                    <div key={task.id} className={`h-72 w-56 relative m-3 rounded-lg ${task.checked
                      ? 'bg-[#2ab12a] text-black'
                      : 'bg-gray-950 text-white'}`}>
                      <Card task={task} />
                    </div>
                  )) :
                  <div className='w-screen flex justify-center items-center mb-16'>
                    <h1 className='text-zinc-700 font-bold text-7xl mb-16'>No Task Added</h1>
                  </div>
              }
            </div>
          </div>
          <TaskForm />
        </div>
      </TaskDataProvider>
    </ThemeProvider>
  )
}

export default App
