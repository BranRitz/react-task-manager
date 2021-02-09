import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [ tasks, setTasks ] = useState ([
    {text: "Dentist Appointment",
    day: "Feb 3rd at 2:15pm",
    reminder: true,
    id: 1},
    {text: "Volleyball Practice",
    day: "Feb 4th at 5:00pm",
    reminder: true,
    id: 2},
    {text: "Soccer Game",
    day: "Feb 5th at 7:00pm",
    reminder: false,
    id: 3},
]) 

// Add Task
const addTask = (task) => {
  // Generate a random number to simulate UUID being generated from database
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder } : task
    )
  )
}

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask (!showAddTask) } title= 'Task Tracker' 
      showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd= {addTask}/>}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks}
      onDelete= { deleteTask } 
      onTogger= { toggleReminder }/> ) : ('No Tasks To Show')}
    </div>
  );
}

export default App;
