import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MaterialIcon } from "shared/components/Icon/enums";

import { IconButton } from "./IconButton";
import { IconButtonTestId } from "./static-data";

const { Button, Icon, Placeholder } = IconButtonTestId;

describe("IconButton", () => {
  it("renders with placeholder", () => {
    const handleClick = jest.fn();
    render(<IconButton data-testid={Button} icon={MaterialIcon.None} onClick={handleClick} />);

    expect(screen.getByTestId(Button)).toBeInTheDocument();
    expect(screen.getByTestId(Placeholder)).toBeInTheDocument();

    expect(screen.queryByTestId(Icon)).toBeNull();

    userEvent.click(screen.getByTestId(Button));
    expect(handleClick).toBeCalledTimes(1);
  });

  it("renders with icon", () => {
    const handleClick = jest.fn();
    render(<IconButton data-testid={Button} icon={MaterialIcon.Home} onClick={handleClick} />);

    expect(screen.getByTestId(Button)).toBeInTheDocument();
    expect(screen.getByTestId(Icon)).toBeInTheDocument();

    expect(screen.queryByTestId(Placeholder)).toBeNull();

    userEvent.click(screen.getByTestId(Button));
    expect(handleClick).toBeCalledTimes(1);
  });
});
