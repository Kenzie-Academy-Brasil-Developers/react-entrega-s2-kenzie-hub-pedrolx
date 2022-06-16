import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            color: "var(--grey-1)",
            background: "var(--grey-3)"
          },
        }}
      />
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
