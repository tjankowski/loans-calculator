import React from "react";
import { StoreProvider } from "./store";
import Container from "./components/Container";
import Form from "./containers/Form";

export default function App() {
  return (
    <StoreProvider>
      <Container>
        <Form />
      </Container>
    </StoreProvider>
  );
}
