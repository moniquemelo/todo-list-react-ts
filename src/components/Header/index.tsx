import React, { useState } from 'react';
import plusIcon from '../../assets/plus-icon.svg';
import toDoLogo from '../../assets/to-do-logo.svg';
import { FormCreateTask, HeaderContainer } from './styles';

interface HeaderProps {
  addTask: (title: string) => void;
}

export default function Header({ addTask }: HeaderProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTask(newTaskTitle); 
    setNewTaskTitle('');
  };

  return (
    <HeaderContainer>
      <img src={toDoLogo} alt='Logotipo do todo' />
      <FormCreateTask onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicionar novo todo"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">
          <img src={plusIcon} alt="" />
          Criar
        </button>
      </FormCreateTask>
    </HeaderContainer>
  );
}
