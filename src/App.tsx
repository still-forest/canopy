import { Container, SidebarLayout } from "@/layout";
import ThemeProvider from "@src/context/ThemeProvider";
import { useTheme } from "./context/useTheme";

const InnerApp = () => {
  const { theme, setTheme } = useTheme();

  return (
    <SidebarLayout setTheme={setTheme} theme={theme} items={[]}>
      <Container>Canopy</Container>
    </SidebarLayout>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="canopy-theme">
      <InnerApp />
    </ThemeProvider>
  );
}

export default App;
