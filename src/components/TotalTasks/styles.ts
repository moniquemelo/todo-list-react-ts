import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 9.1rem 0 2.4rem 0;
`

export const StatsCreatedTaskDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h2  {
    font-size: 1.4rem;
    color: var(--blue);
    margin-right: .8rem;
  }

  span {
    border-radius: 99.9rem;
    padding: .2rem .8rem;
    font-size: 1.2rem;
    background: var(--gray-400);
    color: var(--gray-200);
  }
`

export const StatsConcludedTaskDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h2  {
    font-size: 1.4rem;
    color: var(--purple);
    margin-right: .8rem;
  }

  span {
    border-radius: 99.9rem;
    padding: .2rem .8rem;
    font-size: 1.2rem;
    background: var(--gray-400);
    color: var(--gray-200);
  }
`




// Sugestão de otimização
// import styled, { css } from "styled-components";

// // Função auxiliar para estilos compartilhados
// const sharedStatsStyles = css`
//   display: flex;
//   align-items: center;
//   gap: 0.8rem;

//   h2 {
//     font-size: 1.4rem;
//     margin-right: 0.8rem;
//   }

//   span {
//     border-radius: 99.9rem;
//     padding: 0.2rem 0.8rem;
//     font-size: 1.2rem;
//     background: var(--gray-400);
//     color: var(--gray-200);
//   }
// `;

// // Componente base para seções
// export const Section = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 9.1rem 0 2.4rem 0;
// `;

// // Componente para estatísticas de tarefas criadas
// export const StatsCreatedTaskDiv = styled.div`
//   ${sharedStatsStyles}
  
//   h2 {
//     color: var(--blue);
//   }
// `;

// // Componente para estatísticas de tarefas concluídas
// export const StatsConcludedTaskDiv = styled.div`
//   ${sharedStatsStyles}
  
//   h2 {
//     color: var(--purple);
//   }
// `;
