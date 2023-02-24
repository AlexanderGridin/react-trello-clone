import { render, screen } from "@testing-library/react";
import { AppLayout } from "./AppLayout";
import { AppLayoutTestId } from "./static-data/AppLayoutTestId";

const { Layout, Aside, Main } = AppLayoutTestId;

describe("AppLayout test", () => {
  test("AppLayout rendered with aside only", () => {
    render(<AppLayout slotAside={<div>Aside</div>} />);

    expect(screen.getByTestId(Layout)).toBeInTheDocument();
    expect(screen.getByTestId(Aside)).toBeInTheDocument();

    expect(screen.queryByTestId(Main)).toBeNull();
  });

  test("AppLayout rendered with content only", () => {
    render(
      <AppLayout>
        <div>Content</div>
      </AppLayout>
    );

    expect(screen.getByTestId(Layout)).toBeInTheDocument();
    expect(screen.getByTestId(Main)).toBeInTheDocument();

    expect(screen.queryByTestId(Aside)).toBeNull();
  });

  test("AppLayout rendered with aside and content", () => {
    render(
      <AppLayout slotAside={<div>Aside</div>}>
        <div>Content</div>
      </AppLayout>
    );

    expect(screen.getByTestId(Layout)).toBeInTheDocument();
    expect(screen.getByTestId(Aside)).toBeInTheDocument();
    expect(screen.getByTestId(Main)).toBeInTheDocument();
  });
});
