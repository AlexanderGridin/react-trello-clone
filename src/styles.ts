import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #3179ba;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px;
  flex-grow: 0;
  background-color: #ebecf0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  background-color: #fff;
  box-shadow: #091e4240 0px 1px 0px 0px;
`;

/*
 * Styled component with defined props type
 * Can be written as:
 *
 * interface AddItemButtonProps {
 *	dark?: boolean
 * }
 * export const AddItemButton = styled.button<AddItemButtonProps>`
 *
 * If you forget to provide the props type you will have an error on color parameter, where we use the value of the prop dark.
 * */
export const AddItemButton = styled.button<{ dark?: boolean }>`
  background-color: #ffffff3d;
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? "#000" : "#FFF")};
  cursor: pointer;
  width: 100%;
  padding: 10px 12px;
  transition: background 0.4s ease-in;
  text-align: left;

  &:hover {
    background-color: #ffffff52;
  }
`;

export const AddItemFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const AddButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;

  &:hover {
    cursor: pointer;
  }
`;

export const AddItemInput = styled.input`
  border: none;
  border-radius: 3px;
  box-shadow: #091e4240 0px 1px 0px 0px;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;
