import React, { useState } from "react";
import TipCalculator from "../../components/tip-calculator/TipCalculator";
import Modal from "../../components/modal/Modal";
import AvtarCard from "../../components/card/AvtarCard/AvtarCard";
import AgeCalculator from "../../components/age-calculator/AgeCalculator";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openProject, setOpenProject] = useState(null);

  const projectList = [
    {
      label: "tip calculator",
      projectComponent: <TipCalculator />,
    },
    {
      label: "Age calculator",
      projectComponent: <AgeCalculator />,
    },
  ];

  const handleOpenModal = (list) => {
    setOpenProject(list.projectComponent);
    if (openProject) {
      setOpenModal(true);
    }
  };

  const renderCard = (list, index) => {
    return (
      <div onClick={() => handleOpenModal(list)}>
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
      }}
    >
      {projectList.map((list, index) => {
        return <div>{renderCard(list, index)}</div>;
      })}
      <Modal isOpen={openModal} setIsClose={setOpenModal}>
        {openProject}
      </Modal>
    </div>
  );
};

export default Home;
