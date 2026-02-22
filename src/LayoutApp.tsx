import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/buttons";
import { Container, Layout } from "@/layout";
import { cn } from "@/utils";
import { Brand } from "./components/Brand";
import { FooterContent } from "./components/FooterContent";

export default function App() {
  const [showDimensions, setShowDimensions] = useState(false);

  return (
    <Layout>
      <Layout.Header className={cn(showDimensions && "bg-red-500/5 inset-shadow-sm inset-shadow-red-500")}>
        <Brand />
      </Layout.Header>
      <Layout.Body className={cn(showDimensions && "bg-blue-500/5 inset-shadow-sm inset-shadow-blue-500")}>
        <Container>
          <Link to="/">Home</Link>
        </Container>
        <Container>
          <Button fit onClick={() => setShowDimensions(!showDimensions)} outline>
            {showDimensions ? "Hide " : "Show "} dimensions
          </Button>
        </Container>
      </Layout.Body>
      <Layout.Footer className={cn(showDimensions && "bg-green-500/10 inset-shadow-sm inset-shadow-green-500")}>
        <FooterContent />
      </Layout.Footer>
    </Layout>
  );
}
