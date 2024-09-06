import { useState } from 'react';
import { Wrapper } from '../../App';
import Header from '../../components/Header';
import TotalTasks from '../../components/TotalTasks';
import { Task } from '../../typings/Task'


export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Terminar modulo 2 de React do Ignite',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Estudar Big Query',
      isComplete: true,
    },
  ]);

  const addTask = (title: string) => {
    if (title.trim() === '') return; 

    const newTask = {
      id: tasks.length + 1, 
      title,
      isComplete: false,
    };

    setTasks([...tasks, newTask]); 
  };

  const removeTask = (taskId: number) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Header addTask={addTask} />
      <Wrapper>
        <TotalTasks
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      </Wrapper>
    </div>
  );
}
