import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import axios from "../axios";
import Card from "./UI/Card";

const OrganizationsList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [daysAgo, setDaysAgo] = useState<number>(1);
  const [organizations, setOrganizations] = useState<any[]>([]);

  const loadOrganizations = async () => {
    setLoading(true);
    let since = new Date();

    try {
      const res = await axios.get(`organizations?since=${since.toISOString()}`);

      setOrganizations(res.data);
      setDaysAgo((prevState) => prevState + 1);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('useEffect is called');
    loadOrganizations();
  }, []);

  return (
    <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
      {organizations.map((organization) => {
        return (
          <Card
            key={organization.id}
            name={organization.login}
            description={organization.description}
            imageSrc={organization.avatar_url}
            nodeId={organization.id}
          />
        );
      })}
      {loading && <Spinner animation="border" />}
      <Button onClick={loadOrganizations}>Load More</Button>
    </div>
  );
};

export default OrganizationsList;
