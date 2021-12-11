import React, { useState } from "react";
import { SessionCard } from "../../../../Components";
import data from "./classData";
import ClassesWrapper from "./style";
import { PersonAddAlt1 } from "@styled-icons/material/PersonAddAlt1";
import { ModalPopup } from "../../../../Components";

const Sessions = (props) => {
  const [getData, setData] = useState(data);

  const [{ show }, setShow] = useState({
    show: false,
  });

  const handleClose = (prev, index) => {
    setShow({ show: false });
    console.log("dd", index);
  };
  const handleShow = (prev, index) => {
    setShow({ show: true });
    console.log("dd", index);
  };

  return (
    <ClassesWrapper>
      {getData.map(({ id, subject }) => {
        // const getIconText = subject.split("")[0];
        return (
          <div
            key={id}
            className="join-session mb-3 py-3 px-4 d-flex align-items-center justify-content-between"
          >
            <span className="text-capitalize">{subject}</span>
            <button onClick={handleShow}>
              <PersonAddAlt1 size="20" />
            </button>

            {/* Confirmation Modal */}
            <ModalPopup
              show={show}
              headerTitle="Join session"
              hideModal={handleClose}
              cancelButtonText="Cancel"
              actionButton="Yes"
            >
              I am Children
            </ModalPopup>
          </div>
        );
      })}
    </ClassesWrapper>
  );
};

export default Sessions;
