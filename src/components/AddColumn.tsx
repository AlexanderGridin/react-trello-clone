import { useAppState } from "hooks/useAppState";
import { ColumnContainerTransparent } from "styles";
import { AddItem } from "components/AddItem";
import { addList } from "state/actions/list/addList";

export const AddColumn = () => {
  const { dispatch } = useAppState();
  const ADD_ITEM_TEXT = "+ Add another list";

  const addNewList = (title: string) => dispatch(addList(title));

  return (
    <ColumnContainerTransparent>
      <AddItem buttonText={ADD_ITEM_TEXT} onAdd={addNewList} />
    </ColumnContainerTransparent>
  );
};
