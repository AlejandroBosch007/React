import "@testing-library/jest-dom/extend-expect";
import { render, prettyDOM } from "@testing-library/react";
import { Card } from "./Card";

test("Card Render", () => {
  const card = {
    name: "Yahir",
    message: "Hola ¿cómo estás?",
  };

  const component = render(<Card name={card.name} mesage={card.message} />);
  component.getByText("Yahir");
  const container = component.container.querySelector("h2");
  console.log(prettyDOM(container));
});
