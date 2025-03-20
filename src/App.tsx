import Rotas from "./routes";
import { GlobalCss } from "./style";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
