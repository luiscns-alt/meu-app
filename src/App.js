import { useEffect } from "react";
import useOnlineStatus from "./data/hooks/useOnlineStatus";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./ui/themes/theme";

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
          {isOnline ? "Você esta Online" : "Você esta desconectado"}
          <Button variant={"contained"}>click</Button>
        </div>
      </ThemeProvider>
      <Button variant={"contained"}>click</Button>
    </div>
  );
}

export default App;
