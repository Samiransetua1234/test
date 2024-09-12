
import Counter from "./components/Counter";
import FormComponent from "./components/FormComponent";
import Getdata from "./components/Getdata";
import RenderStringArray from "./components/RenderStringArray";
import ThemeChange from "./components/ThemeChange";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const arr = ["Item 1", "Item 2", "Item 3", "Item 4"];
 
  return (
    <>
      <ThemeProvider>
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          
          <Counter />
          <RenderStringArray arr={arr} />
          <FormComponent />
          <Getdata/>
          <ThemeChange/>
        </div>
        </ThemeProvider>
      
    </>
  );
}

export default App;
