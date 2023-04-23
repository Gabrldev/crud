import { useState } from 'react'
import { useTask } from '../context/TaskContext'
const TaskForm = () => {
  const [taskName, setTaskName] = useState('')
  const { addTask } = useTask()
  const handleSumit = async (e) => {
    e.preventDefault()
    await addTask(taskName)
  }

  return (
    <div>
      <form onSubmit={handleSumit}>
        <input
          type='text'
          placeholder='Write a Task'
          name='taskName'
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button type='submit'>Save Task</button>
      </form>
    </div>
  )
}
export default TaskForm
