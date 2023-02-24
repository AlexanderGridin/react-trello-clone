import { render, screen } from "@testing-library/react";
import { AppPageLayout } from "./AppPageLayout";
import { AppPageLayoutTestId } from "./static-data/AppPageLayoutTestId";

const { Layout, Header, Content, Spinner } = AppPageLayoutTestId;

describe("AppPageLayout", () => {
  it("renders content without header", () => {
    render(
      <AppPageLayout>
        <div>Content</div>
      </AppPageLayout>
    );

    expect(screen.getByTestId(Layout)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();

    expect(screen.queryByTestId(Header)).toBeNull();
    expect(screen.queryByTestId(Spinner)).toBeNull();
  });

  it("renders content with header slot", () => {
    render(
      <AppPageLayout slotHeader={<div>Header</div>}>
        <div>Content</div>
      </AppPageLayout>
    );

    expect(screen.getByTestId(Layout)).toBeInTheDocument();
    expect(screen.getByTestId(Header)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();

    expect(screen.queryByTestId(Spinner)).toBeNull();
  });

  it("renders spinner when loading", () => {
    render(
      <AppPageLayout slotHeader={<div>Header</div>} isLoading>
        <div>Content</div>
      </AppPageLayout>
    );

    expect(screen.getByTestId(Layout)).toBeInTheDocument();
    expect(screen.getByTestId(Header)).toBeInTheDocument();
    expect(screen.getByTestId(Content)).toBeInTheDocument();
    expect(screen.getByTestId(Spinner)).toBeInTheDocument();
  });
});
