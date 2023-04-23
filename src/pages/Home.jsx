import TaskForm from '../components/TaskForm'
import { logout } from '../utils/logout'
import TaskList from '../components/TaskList'
function Home () {
  return (
    <div>
      <button onClick={logout}>logout</button>
      <TaskForm />
      <TaskList />

    </div>
  )
}
export default Home
