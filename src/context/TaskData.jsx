import React, { createContext, useState } from 'react'

const TaskData = createContext({
    tasks: [
        {
            id: 1,
            title: "this is title",
            task: "this is task",
            checked: false
        }
    ],
    addTask: (title, task) => {},
    deleteTask: (id) => {},
    updateTask: (id, title, task) => {},
    toggleChecked: (id) => {}
})

export const TaskDataProvider = TaskData.Provider

export default TaskData
