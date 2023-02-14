import styled from "styled-components";

export const Input = styled.input`
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  border: 2px solid #4c566a;
  padding: 7px 15px;
  color: #3b4252;
  width: 100%;
  font-size: 16px;
  transition: border 0.4s;

  &:hover,
  &:focus {
    border: 2px solid #5e81ac;
    outline: none;
  }
`;
