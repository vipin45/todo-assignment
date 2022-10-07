const EventForm = ({ evntName, addEvent, changeInptVal }) => {
  const inptObj = {
    inptType: "text",
    inptName: "evntName",
    inptPlcHlder: "Enter the Event Name",
    inptId: "evntName",
  };
  const btnObj = {
    btnName: "Add Event",
    btnType: "submit",
    disabled: false,
  };
  return (
    <div className="evnt-form-container">
      <form>
        <input
          type={inptObj.inptType}
          name={inptObj.inptName}
          id={inptObj.inptId}
          placeholder={inptObj.inptPlcHlder}
          value={evntName}
          onChange={(e) => changeInptVal((prevState)=>  {
            return {...prevState, evntName:e.target.value}
          })}
        />
        <button className="button submit-btn"
          type={btnObj.btnType}
          disabled={btnObj.disabled}
          onClick={addEvent}
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
