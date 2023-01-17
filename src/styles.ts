import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextInput = styled.input`
  border: none;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

// BUTTONS
export const BaseButton = styled.button`
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  margin-right: 7px;
  transition: background 0.4s ease-in;

  &:hover {
    cursor: pointer;
  }
`;

export const SuccessButton = styled(BaseButton)`
  background-color: #a3be8c;
`;

export const ErrorButton = styled(BaseButton)`
  background-color: #bf616a;
`;

export const WarningButton = styled(BaseButton)`
  background-color: #ebcb8b;
`;

export const FullWidthButton = styled(BaseButton)`
  width: 100%;
  text-align: left;
`;
