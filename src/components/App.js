import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';
function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories, setCategories] = useState(CATEGORIES);
  const [categorySelected, setCategorySelected] = useState('All');

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  function handleDeleteTask(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText));
  }

  const remainingTasks = tasks.filter(
    (task) => categorySelected === 'All' || task.category === categorySelected
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <div className='tasks'>
      <NewTaskForm
        categories={categories.filter((category) => category !== 'All')}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList tasks={remainingTasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;