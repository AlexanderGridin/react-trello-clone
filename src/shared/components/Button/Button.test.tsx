import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MaterialIcon } from "../Icon/enums/MaterialIcon";
import { Button as ButtonComponent } from "./Button";
import { ButtonTestId } from "./static-data/ButtonTestId";

const { Button, Icon, Text } = ButtonTestId;

describe("Button", () => {
  it("renders without icon", () => {
    const handleClick = jest.fn();
    render(
      <ButtonComponent data-testid={Button} onClick={handleClick}>
        Button text
      </ButtonComponent>
    );

    const button = screen.getByTestId(Button);
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonIcon = screen.queryByTestId(Icon);
    expect(buttonIcon).toBeNull();

    const buttonText = screen.getByTestId(Text);
    expect(buttonText).toBeInTheDocument();
  });

  it("renders with icon", () => {
    const handleClick = jest.fn();
    render(
      <ButtonComponent data-testid={Button} icon={MaterialIcon.Add} onClick={handleClick}>
        Test
      </ButtonComponent>
    );

    const button = screen.getByTestId(Button);
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonIcon = screen.getByTestId(Icon);
    expect(buttonIcon).toBeInTheDocument();

    const buttonText = screen.getByTestId(Text);
    expect(buttonText).toBeInTheDocument();
  });

  it("renders with icon only", () => {
    const handleClick = jest.fn();
    render(<ButtonComponent data-testid={Button} icon={MaterialIcon.Add} onClick={handleClick} />);

    const button = screen.getByTestId(Button);
    userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);

    const buttonIcon = screen.getByTestId(Icon);
    expect(buttonIcon).toBeInTheDocument();

    const buttonText = screen.queryByTestId(Text);
    expect(buttonText).toBeNull();
  });
});
