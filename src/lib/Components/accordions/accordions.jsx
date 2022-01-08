import React, { useContext } from "react";

import {
  useAccordionToggle,
  Accordion,
  Card,
  AccordionContext,
} from "react-bootstrap";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className={`d-block ${isCurrentEventKey ? "open" : ""}`}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function Accordions(props) {
  const { accordionTitle, accordionBody, eventKeyValue } = props;

  console.log("value", eventKeyValue);

  return (
    <Accordion defaultActiveKey={1}>
      <Card>
        <Card.Header>
          <ContextAwareToggle eventKey={eventKeyValue}>
            {accordionTitle}
          </ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKeyValue}>
          <Card.Body>{accordionBody}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default Accordions;
