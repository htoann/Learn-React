import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Paragraph() {
  const context = useContext(ThemeContext);

  return <h1 className={context.theme}>Hello World</h1>;
}
