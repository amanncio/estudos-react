import { StyledButton } from "./Components/Button.style";
import { AppContainer } from "./Components/Container.style";
import { GlobalStyles } from "./Components/GlobalStyles.styles";

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <StyledButton buttonLabel="Click Here" backgroundColor="coral"></StyledButton>  
    </AppContainer>
  );
}

export default App;
