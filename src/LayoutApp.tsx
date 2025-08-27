import { useState } from "react";
import { Link } from "react-router";
import { ThemeSelector } from "@/components/ThemeSelector/ThemeSelector";
import { Button } from "@/forms";
import { Container, Layout } from "@/layout";
import { cn } from "@/utils";
import { Brand } from "./components/Brand";
import { FooterContent } from "./components/FooterContent";
import { useTheme } from "./context/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();
  const [showDimensions, setShowDimensions] = useState(true);

  return (
    <Layout>
      <Layout.Header className={cn(showDimensions && "bg-red-500/5 inset-shadow-sm inset-shadow-red-500")}>
        <Brand />
      </Layout.Header>
      <Layout.Body className={cn(showDimensions && "bg-blue-500/5 inset-shadow-sm inset-shadow-blue-500")}>
        <Container>
          <Button asChild fit>
            <Link to="/">Home</Link>
          </Button>
        </Container>
        <Container>
          <Button fit onClick={() => setShowDimensions(!showDimensions)} variant="outline">
            {showDimensions ? "Hide " : "Show "} dimensions
          </Button>
        </Container>
      </Layout.Body>
      <Layout.Footer className={cn(showDimensions && "bg-green-500/10 inset-shadow-sm inset-shadow-green-500")}>
        <FooterContent>
          <ThemeSelector setTheme={setTheme} theme={theme} />
        </FooterContent>
      </Layout.Footer>
    </Layout>
  );
}
