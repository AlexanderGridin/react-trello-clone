import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/inputs";
import { Checkbox } from "shared/components/Form/Checkbox";
import { FormFooter } from "shared/components/Form/FormFooter";

type FormEventType = FormEvent<HTMLFormElement>;

export class BoardFormValue {
  public title = "";
  public isFavorite = false;
}

export interface BoardFormProps {
  entity?: BoardFormValue;
  onSubmit: (value: BoardFormValue) => void;
  onCancel: () => void;
}

export const BoardForm = ({ entity, onSubmit, onCancel }: BoardFormProps) => {
  const initialFormValue: BoardFormValue = entity || new BoardFormValue();

  const [formValue, dispatch] = useReducer(
    (prevValue: BoardFormValue, payload: Partial<BoardFormValue>) => ({
      ...prevValue,
      ...payload,
    }),
    initialFormValue
  );

  const changeTitle = (title: string) => dispatch({ title });
  const changeIsFavorite = (isFavorite: boolean) => dispatch({ isFavorite });

  const cancel = () => onCancel();
  const add = () => {
    onSubmit(formValue);
  };

  const submit = (e: FormEventType) => {
    e.preventDefault();
    add();
  };

  return (
    <FormContainer onSubmit={submit}>
      <div className="form-row">
        <TextInput placeholder="Enter board title" value={formValue.title} isAutoFocus onChange={changeTitle} />
      </div>

      <div className="form-row">
        <Checkbox value={formValue.isFavorite} label="Favorite" onChange={changeIsFavorite} />
      </div>

      <FormFooter submitText={entity ? "Update board" : "Add board"} onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
