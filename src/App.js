import { useEffect } from "react";
import useOnlineStatus from "./data/hooks/useOnlineStatus";

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if(!isOnline){
      alert("Sua conexão caiu!");
    }
  }, [isOnline])

  return <div>{isOnline ? "Você esta Online" : "Você esta desconectado"}</div>;
}

export default App;
