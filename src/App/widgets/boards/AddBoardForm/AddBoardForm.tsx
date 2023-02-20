import { FormEvent, useReducer } from "react";
import { FormContainer } from "shared/components/Form/FormContainer";
import { TextInput } from "shared/components/Form/Input";
import { useInputFocus } from "shared/hooks/useInputFocus";
import { Checkbox } from "shared/components/Form/Checkbox";
import { FormFooter } from "shared/components/Form/FormFooter";

type FormEventType = FormEvent<HTMLFormElement>;

export interface AddBoardFormValue {
  title: string;
  isFavorite: boolean;
}

export interface AddBoardFormProps {
  onSubmit: (value: AddBoardFormValue) => void;
  onCancel: () => void;
}

export const AddBoardForm = ({ onSubmit, onCancel }: AddBoardFormProps) => {
  const initialFormValue: AddBoardFormValue = { title: "", isFavorite: false };

  const [formValue, dispatch] = useReducer(
    (prevValue: AddBoardFormValue, payload: Partial<AddBoardFormValue>) => ({
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
        <TextInput
          ref={useInputFocus()}
          placeholder="Enter board title"
          value={formValue.title}
          onChange={changeTitle}
        />
      </div>

      <div className="form-row">
        <Checkbox
          value={formValue.isFavorite}
          label="Favorite"
          onChange={changeIsFavorite}
        />
      </div>

      <FormFooter submitText="Add board" onSubmit={add} onCancel={cancel} />
    </FormContainer>
  );
};
