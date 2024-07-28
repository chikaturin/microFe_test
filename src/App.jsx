import React from "react";
import { LoginForm } from "remote/Remote";
import { MantineProvider } from "@mantine/hooks";

function App() {
  return (
    <MantineProvider>
      <LoginForm />
      <p>Welcome to the Micro Frontend App</p>
    </MantineProvider>
  );
}

export default App;
