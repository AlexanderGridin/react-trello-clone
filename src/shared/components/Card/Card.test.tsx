import { CardTestId } from "./static-data/CardTestId";
import { Card as CardComponent } from "./Card";
import { render, screen } from "@testing-library/react";

const { Card, Header, Content, Footer, Children, Spinner } = CardTestId;

const HeaderComponent = <div>Header</div>;
const ContentComponent = <div>Content</div>;
const FooterComponent = <div>Footer</div>;

describe("Card", () => {
  it("renders with header slot only", () => {
    render(<CardComponent data-testid={Card} slotHeader={HeaderComponent} />);

    expect(screen.getByTestId(Card)).toBeInTheDocument();
    expect(screen.getByTestId(Header)).toBeInTheDocument();

    expect(screen.queryByTestId(Content)).toBeNull();
    expect(screen.queryByTestId(Footer)).toBeNull();
  });

  it("renders with content slot only", () => {
    render(<CardComponent data-testid={Card} slotContent={ContentComponent} />);

    expect(screen.getByTestId(Card)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();

    expect(screen.queryByTestId(Header)).toBeNull();
    expect(screen.queryByTestId(Footer)).toBeNull();
  });

  it("renders with footer slot only", () => {
    render(<CardComponent data-testid={Card} slotFooter={FooterComponent} />);

    expect(screen.getByTestId(Card)).toBeInTheDocument();
    expect(screen.getByTestId(Footer)).toBeInTheDocument();

    expect(screen.queryByTestId(Header)).toBeNull();
    expect(screen.queryByTestId(Content)).toBeNull();
  });

  it("renders with children", () => {
    render(
      <CardComponent
        data-testid={Card}
        slotHeader={HeaderComponent}
        slotContent={ContentComponent}
        slotFooter={FooterComponent}
      >
        <div data-testid={Children}>Children</div>
      </CardComponent>
    );

    expect(screen.getByTestId(Card)).toBeInTheDocument();
    expect(screen.getByTestId(Children)).toBeInTheDocument();

    expect(screen.queryByTestId(Header)).toBeNull();
    expect(screen.queryByTestId(Content)).toBeNull();
    expect(screen.queryByTestId(Footer)).toBeNull();
  });

  it("renders with spinner", () => {
    render(
      <CardComponent data-testid={Card} isLoading>
        <div data-testid={Children}>Children</div>
      </CardComponent>
    );

    expect(screen.getByTestId(Card)).toBeInTheDocument();
    expect(screen.getByTestId(Spinner)).toBeInTheDocument();
    expect(screen.getByTestId(Children)).toBeInTheDocument();
  });
});
