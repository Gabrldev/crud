import { useTask } from '../context/TaskContext'
import { useEffect } from 'react'
function TaskList () {
  const { tasks, getTasks } = useTask()

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div>{tasks.map((task) => {
      return (
        <div key={task.id}>
          <h1>{task.name}</h1>
        </div>
      )
    })}
    </div>
  )
}
export default TaskList
