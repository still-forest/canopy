import { Link } from "react-router";
import { Button } from "@/forms";
import { Container, Layout } from "@/layout";
import { Brand } from "./components/Brand";
import { FooterContent } from "./components/FooterContent";
import { useTheme } from "./context/useTheme";

export default function App() {
  const { theme, setTheme } = useTheme();

  return (
    <Layout>
      <Layout.Header>
        <Brand />
      </Layout.Header>
      <Layout.Body>
        <Container>
          <Button asChild fit>
            <Link to="/">Home</Link>
          </Button>
        </Container>
      </Layout.Body>
      <Layout.Footer>
        <FooterContent />
      </Layout.Footer>
    </Layout>
  );
}
