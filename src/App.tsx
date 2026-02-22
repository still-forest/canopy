import { Link } from "react-router";
import { buildButtonClassNames } from "@/buttons/Button/utils";
import { Flex } from "@/layout";

const items = [
  {
    label: "Layout",
    to: "/layout",
  },
  {
    label: "SidebarLayout",
    to: "/sidebar",
  },
];

function App() {
  return (
    <Flex align="center" className="w-full h-screen" direction="col" gap="4" justify="center">
      {items.map((item) => (
        <Flex.Item className="w-48" key={item.label}>
          <Link className={buildButtonClassNames({ fit: false })} to={item.to}>
            {item.label}
          </Link>
        </Flex.Item>
      ))}
    </Flex>
  );
}

export default App;
