import checkButtonFilled from '../../assets/check-button-filled.svg';
import checkButton from '../../assets/check-button.svg';
import trash from '../../assets/trash.svg';
import { CheckTasksText, Main, Button } from './styles';
import { Task } from '../../typings/Task'

interface TaskListProps {
  task: Task;
  onTaskClick: (taskId: number) => void;
  onTaskRemove: (taskId: number) => void;
}

export default function TaskList( { task, onTaskClick, onTaskRemove  }: TaskListProps ) {
  
  return(
    <Main>
      <CheckTasksText>
        <Button 
          onClick={() => onTaskClick(task.id)}
          className={task.isComplete ? 'completed' : ''}  
        >
          <img src={task.isComplete ? checkButtonFilled : checkButton} alt="Concluir Tarefa" />
        </Button>
        <p className={task.isComplete ? 'task-completed' : ''}>{task.title}</p>
      </CheckTasksText>

      <div>
        <Button borderRadius={8} onClick={() => onTaskRemove(task.id)}>
          <img src={trash}></img>
        </Button>
      </div>
    </Main>
  )
}