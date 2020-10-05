import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import axios from "../axios";

interface Props {
  show: boolean;
  onHide: Function;
  organization: string;
}

const OrganizationModal: React.FC<Props> = ({ show, onHide, organization }) => {
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [organizationInfo, setOrganizationInfo] = useState();

  const loadOrganization = async () => {
    try {
      const res = await axios.get(`orgs/${organization}`);
      console.log(res.data);
      setOrganizationInfo(res.data);
      setLoadingInfo(false);
    } catch (e) {
      console.log(e);
      setLoadingInfo(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} onEnter={loadOrganization}>
      {loadingInfo ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Modal.Header closeButton>
            <Modal.Title>organization</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
        </>
      )}
    </Modal>
  );
};

export default OrganizationModal;
