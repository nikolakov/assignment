import React, { useState } from "react";
import BootstrapCard from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import OrganizationModal from "../OrganizationModal";

import "./Card.scss";

interface Props {
  name: string;
  description: string;
  imageSrc: string;
  nodeId: string;
}

const Card: React.FC<Props> = ({ name, description, imageSrc, nodeId }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <BootstrapCard className="custom-card">
        <div className="cardContent">
          <div className="organizationInfo">
            <img className="avatarImage" src={imageSrc} />
            <div className="infoContainer">
              <h5>{name}</h5>
              <p>{description}</p>
            </div>
          </div>
          <div className="cardButton">
            <Button onClick={() => setShowModal(true)}>View More</Button>
          </div>
        </div>
      </BootstrapCard>
      <OrganizationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        organization={name}
      ></OrganizationModal>
    </>
  );
};

export default Card;
