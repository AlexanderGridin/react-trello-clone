import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SwitchTestId } from "./static-data";
import { Switch as SwitchComponent } from "./Switch";

const { Switch } = SwitchTestId;
const labelText = "Label";
const emptyFn = () => {};

describe("Switch", () => {
  it("renders without label", () => {
    render(<SwitchComponent onChange={emptyFn} />);

    expect(screen.getByTestId(Switch)).toBeInTheDocument();
    expect(screen.queryByText(labelText)).toBeNull();
  });

  it("renders with label", () => {
    render(<SwitchComponent label={labelText} onChange={emptyFn} />);

    expect(screen.getByTestId(Switch)).toBeInTheDocument();
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it("correctly handles value change", () => {
    const handleChange = jest.fn((value) => value);
    render(<SwitchComponent onChange={handleChange} />);

    userEvent.click(screen.getByTestId(Switch));
    userEvent.click(screen.getByTestId(Switch));

    expect(handleChange).toBeCalledTimes(2);
    expect(handleChange.mock.results[0].value).toBeTruthy();
    expect(handleChange.mock.results[1].value).toBeFalsy();
  });

  it("correctly works with initial value", () => {
    const handleChange = jest.fn((value) => value);
    render(<SwitchComponent initialValue onChange={handleChange} />);

    userEvent.click(screen.getByTestId(Switch));
    userEvent.click(screen.getByTestId(Switch));

    expect(handleChange).toBeCalledTimes(2);
    expect(handleChange.mock.results[0].value).toBeFalsy();
    expect(handleChange.mock.results[1].value).toBeTruthy();
  });
});
