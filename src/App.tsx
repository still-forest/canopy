import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Flex } from "@/layout";

const items = [
  {
    label: "Sidebar",
    to: "/sidebar",
  },
];

function App() {
  return (
    <Flex align="center" className="w-full h-screen" direction="col" gap="4" justify="center">
      <Flex.Item>
        {items.map((item) => (
          <Button asChild key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </Button>
        ))}
      </Flex.Item>
    </Flex>
  );
}

export default App;
