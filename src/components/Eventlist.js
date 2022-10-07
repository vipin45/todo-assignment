const EventList = ({
  allEnvt,
  deleteEvnt,
  changeCheckBoxState,
  cmpltEvent,
}) => {
  return (
    <div className="list-container">
      <table>
        <tbody>
          {allEnvt.length ? (
            allEnvt.map((evnt, index) => {
              return (
                <tr
                  key={index + evnt.evntName}
                  className={evnt.isCompleted ? "completed" : "incomplete"}
                >
                  <td>
                    <input
                      type="checkbox"
                      disabled={evnt.isCompleted}
                      checked={evnt.isChecked}
                      onChange={(e) => changeCheckBoxState(e, index)}
                    />
                  </td>
                  <td>{evnt.evntName}</td>
                  <td>
                    <button
                      className={
                        evnt.isCompleted
                          ? "button delete disabled"
                          : "button delete"
                      }
                      disabled={evnt.isCompleted}
                      onClick={() => deleteEvnt(evnt.evntName)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    {!evnt.isCompleted ? (
                      <button
                        className={
                          evnt.isChecked
                            ? "button submit-btn"
                            : "button disabled"
                        }
                        disabled={evnt.isChecked ? false : true}
                        onClick={() => {
                          if (
                            window.confirm("Delete the event " + evnt.evntName + "?")
                          ) {
                            cmpltEvent(evnt.evntName);
                          }
                        }}
                      >
                        Click to Complete
                      </button>
                    ) : (
                      <button className="button submit-btn">
                        Completed <span>&#9745;</span>
                      </button>
                    )}{" "}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <th>No event has found !</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
