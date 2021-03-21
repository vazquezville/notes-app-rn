import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import AppNavigator from "./navigation/Index";
import { Provider as StoreProvider } from "react-redux";
import Store from "./reducer/Store";

const App = () => {
  return (
    <StoreProvider store={Store}>
      <PaperProvider>
        <AppNavigator></AppNavigator>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
