import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 3.2rem;
  margin-top: -16rem;

  div {
    background: var(--shape);
    padding: 2.4rem 3.2rem;
    border-radius: 0.4rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1.6rem;
      font-size: 3.2rem;
      line-height: 4.8rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }
`;
