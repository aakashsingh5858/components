import React, { useState } from "react";
import TipCalculator from "../../components/tip-calculator/TipCalculator";
import Modal from "../../components/modal/Modal";
import AvtarCard from "../../components/card/AvtarCard/AvtarCard";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const projectList = [
    {
      label: "tip calculator",
      projectComponent: <TipCalculator />,
    },
  ];

  const renderCard = (list, index) => {
    return (
      <div onClick={() => setOpenModal(true)}>
        <AvtarCard name={list.label} index={index} />
        <span
          style={{
            textAlign: "center",
            display: "block",
            textTransform: "capitalize",
            paddingTop: "4px",
            fontWeight: "500",
            fontSize: "var( --caption-fs)",
          }}
        >
          {list.label}
        </span>
      </div>
    );
  };

  return (
    <div
      style={{
        margin: "2rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {projectList.map((list, index) => {
        return (
          <div>
            {renderCard(list, index)}
            <Modal isOpen={openModal} setIsClose={setOpenModal}>
              {list.projectComponent}
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
