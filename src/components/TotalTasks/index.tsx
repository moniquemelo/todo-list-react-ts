import TaskList from "../TaskList";
import { Section, StatsConcludedTaskDiv, StatsCreatedTaskDiv } from "./styles";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TotalTasksProps {
  tasks: Task[];
  toggleTaskCompletion: (taskId: number) => void;
  removeTask: (taskId: number) => void;
}

export default function TotalTasks({ tasks, toggleTaskCompletion, removeTask }: TotalTasksProps) {
  return (
    <header>
      <Section>
        <StatsCreatedTaskDiv>
          <h2>Tarefas criadas</h2>
          <span>{tasks.length}</span>
        </StatsCreatedTaskDiv>

        <StatsConcludedTaskDiv>
          <h2>Concluídas</h2>
          <span>{tasks.filter(task => task.isComplete).length} de {tasks.length}</span>
        </StatsConcludedTaskDiv>
      </Section>

      <section>
        {tasks.map(task => (
          <TaskList
            key={task.id}
            task={task}
            onTaskClick={toggleTaskCompletion}
            onTaskRemove={removeTask}
          />
        ))}
      </section>
    </header>
  );
}
