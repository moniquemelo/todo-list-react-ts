import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2.4rem;
  background: var(--gray-500);
  border-radius: 8px;
`

export const CheckTasksText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;

  p {
    font-size: 1.4rem;
    color: var(--gray-100);
    padding: 1.6rem 0;
  }
`

export const Button = styled.button<{ 
  borderRadius?: number; // Com borderRadius? ele fica opicional
}>`
  background: none;
  border: none;
  padding: 0 1.2rem 0 1.6rem;
  border-radius: ${props => `${props.borderRadius}px`};
`