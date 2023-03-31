import { Card } from "@alexandergridin/rtc-components-lib";
import { useReducer } from "react";

import { addBoardAsync } from "api/Boards/services";
import { BoardCreateDto, BoardDto, BoardViewModel } from "entities/Board/models";

import { BoardForm } from "../BoardForm";
import { AddBoardButton } from "./components";
import { BoardFormValue } from "../BoardForm/models";
import { AddBoardComponentState } from "./models";

export interface IAddBoardProps {
  onAdd: (board: BoardViewModel) => void;
}

export const AddBoard = ({ onAdd }: IAddBoardProps) => {
  const [componentState, dispatch] = useReducer(
    (state: AddBoardComponentState, payload: Partial<AddBoardComponentState>) => ({
      ...state,
      ...payload,
    }),
    { ...new AddBoardComponentState() }
  );

  const showForm = () => dispatch({ isShowForm: true });
  const hideForm = () => dispatch({ isShowForm: false });

  const startLoading = () => dispatch({ isLoading: true });
  const endLoading = () => dispatch({ isLoading: false });

  const addBoard = async (formValue: BoardFormValue) => {
    startLoading();

    const boardCreateDto = new BoardCreateDto({
      ...formValue,
    });

    const boardDto = await addBoardAsync(boardCreateDto);

    if (boardDto) {
      onAdd(BoardDto.toViewModel(boardDto));
      hideForm();
    }

    endLoading();
  };

  if (componentState.isShowForm) {
    return (
      <Card minHeight={150} backgroundColor="#D8DEE9" isLoading={componentState.isLoading}>
        <BoardForm onSubmit={addBoard} onCancel={hideForm} />
      </Card>
    );
  }

  return <AddBoardButton onClick={showForm}>+ Add board</AddBoardButton>;
};
