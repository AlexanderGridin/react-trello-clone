import { render, screen } from "@testing-library/react";
import { Modal as ModalComponent } from "./Modal";
import { ModalTestId } from "./static-data/ModalTestId";

const { Modal, Title, Content, Spinner } = ModalTestId;

describe("Modal test", () => {
  test("Modal is not opened", () => {
    render(<ModalComponent data-testid={Modal} />);
    expect(screen.queryByTestId(Modal)).toBeNull();
  });

  test("Modal is opened with title only", () => {
    render(<ModalComponent data-testid={Modal} open title="Modal title" />);

    expect(screen.getByTestId(Modal)).toBeInTheDocument();
    expect(screen.getByTestId(Title)).toBeInTheDocument();

    expect(screen.queryByTestId(Content)).toBeNull();
    expect(screen.queryByTestId(Spinner)).toBeNull();
  });

  test("Modal is opened with title content only", () => {
    render(
      <ModalComponent data-testid={Modal} open>
        <div>Content</div>
      </ModalComponent>
    );

    expect(screen.getByTestId(Modal)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();

    expect(screen.queryByTestId(Title)).toBeNull();
    expect(screen.queryByTestId(Spinner)).toBeNull();
  });

  test("Modal is opened with title and content", () => {
    render(
      <ModalComponent data-testid={Modal} open title="Modal title">
        <div>Content</div>
      </ModalComponent>
    );

    expect(screen.getByTestId(Modal)).toBeInTheDocument();
    expect(screen.getByTestId(Title)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();

    expect(screen.queryByTestId(Spinner)).toBeNull();
  });

  test("Modal is opened with title, and content, and loading", () => {
    render(
      <ModalComponent data-testid={Modal} open title="Modal title" isLoading>
        <div>Content</div>
      </ModalComponent>
    );

    expect(screen.getByTestId(Modal)).toBeInTheDocument();
    expect(screen.getByTestId(Title)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();
    expect(screen.getByTestId(Spinner)).toBeInTheDocument();
  });
});
