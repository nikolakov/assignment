import React from "react";
import Container from "react-bootstrap/Container";

import OrganizationsList from "./components/OrganizationsList";

import "./App.scss";

function App() {
  return (
    <Container fluid="md" style={{ textAlign: "center" }}>
      <h1>Github Organizations</h1>
      <OrganizationsList />
    </Container>
  );
}

export default App;
