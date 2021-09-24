import { useEffect } from "react";
import useOnlineStatus from "./data/hooks/useOnlineStatus";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/themes/theme";
import Contador from "./components/MeuComponente/Contador";

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (!isOnline) {
      alert("Sua conexão caiu!");
    }
  }, [isOnline]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
         <Contador />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
