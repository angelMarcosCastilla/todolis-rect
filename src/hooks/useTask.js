import { TasksContext } from "context/TaskContext"
import { useContext } from "react"

function useTask() {
 const {tasks, dispatch} = useContext(TasksContext)

 return {tasks, dispatch}
}

export default useTask
