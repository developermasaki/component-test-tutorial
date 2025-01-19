import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
 
test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button");
  expect(simpleButton).toHaveTextContent("OFF");
});

test("描画されてすぐはOFFと表示されている", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
});