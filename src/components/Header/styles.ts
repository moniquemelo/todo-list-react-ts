import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  background: var(--gray-700);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.2rem 0 8rem 0rem;
`

export const FormCreateTask = styled.form`
  position: absolute;
  height: 5.4rem;
  bottom: calc(-5.4rem / 2);
  display: flex;

  input {
    background: var(--gray-500);
    border: 1px solid var(--gray-700);
    border-radius: 8px;
    padding: 1.6rem;
    width: 63.8rem;
    font-size: 1.6rem;
    margin-right: 8px;

    &::placeholder {
      color: var(--gray-300);
      padding: 1.6rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--blue-dark);
    color: var(--gray-100);
    font-weight: 700;
    font-size: 1.4rem;

    padding: 1.6rem;
    border-radius: 8px;
    gap: .8rem;
    border: 0;
    
    transition: background-color 0.1s;

    &:hover{
      background: var(--blue-hover);
    }
  }
`