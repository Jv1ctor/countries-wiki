import styled from "styled-components";

export const ContainerBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.colors.surface || "#f2f2f2"};
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary || "#172554"};
    box-shadow: 0 0 0 2px rgba(23, 37, 84, 0.1);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary || "#111"};
  &::placeholder {
    color: #9ca3af;
  }
`;