import { createContext, useContext, useState } from 'react'
import { client } from '../client/client'

export const TaskContext = createContext()

export const useTask = () => {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTask must be used within a TaskContextProvider')
  }
  return context
}

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  const getTasks = async () => {
    const {
      data: { user }
    } = await client.auth.getUser()
    const { error, data } = await client
      .from('tasks')
      .select()
      .eq('userId', user.id)
      .order('id', { ascending: true })

    if (error) throw error
    setTasks(data)
  }

  const addTask = async (taskName) => {
    try {
      const { data: user } = await client.auth.getUser()
      const { error, data } = await client
        .from('tasks')
        .insert({
          name: taskName,
          userId: user.id
        })
        .select()
        .eq('userId', user.id)
      if (error) throw error
      setTasks([...tasks, ...data])
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <TaskContext.Provider value={{ tasks, getTasks, addTask }}>
      {children}
    </TaskContext.Provider>
  )
}
