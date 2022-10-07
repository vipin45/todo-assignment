import { useState, useEffect } from "react";

import EventForm from "./EventForm";
import EventList from "./Eventlist";

function EventMain() {
  const [allEvnt, setAllEvent] = useState([]);
  const [evnt, setEvnt] = useState({
    evntName: "",
    isCompleted: false,
    isChecked: false,
  });
  // storing the event in the array...
  const addEvent = (e) => {
    e.preventDefault();
    setAllEvent([...allEvnt, evnt]);
  };
  // updating the state when checkbox state is change...
  const changeCheckBoxState = (e, index) => {
    const currentState = allEvnt.map((evntObj, i) => {
      if (i === index) {
        evntObj.isChecked = e.target.checked;
      }
      return evntObj;
    });
    setAllEvent(currentState);
  };
  // initialize the event field name as blank after the submit the event ...
  useEffect(() => {
    setEvnt((prevState) => {
      return { ...prevState, evntName: "" };
    });
  }, [allEvnt]);
  // Deleteing the event ...................
  const deleteEvnt = (evntName) => {
    setAllEvent(allEvnt.filter((evnt) => evnt.evntName !== evntName));
  };
  // Finally event completing.......
  const cmpltEvent = (evntName) => {
    const currentState = allEvnt.map((evntObj) => {
      if (evntName === evntObj.evntName) {
        evntObj.isCompleted = true;
      }
      return evntObj;
    });
    setAllEvent(currentState);
  };

  return (
    <>
      <div className="left-section">
        <EventForm
          evntName={evnt.evntName}
          addEvent={addEvent}
          changeInptVal={setEvnt}
        />
      </div>
      <div className="right-section">
        <EventList
          allEnvt={allEvnt}
          deleteEvnt={deleteEvnt}
          changeCheckBoxState={changeCheckBoxState}
          cmpltEvent = { cmpltEvent }
        />
      </div>
    </>
  );
}

export default EventMain;
