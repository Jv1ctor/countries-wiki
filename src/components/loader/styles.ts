import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 10px;
`

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.muted || "#ccc"};
  border-top-color: ${({ theme }) => theme.colors.primary || "#172554"};
  animation: ${spin} 0.8s linear infinite;
`;