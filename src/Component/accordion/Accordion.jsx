import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setenablemultiSelection] = useState(false);

  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setenablemultiSelection(!enableMultiSelection)}>
        enable MultiSelection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((p) => {
            return (
              <div
                className="item"
                key={p.id}
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(p.id)
                    : () => handleSingleSelection(p.id)
                }
              >
                <div className="title">
                  <h3>{p.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection
                  ? multiple.indexOf(p.id) !== -1 && (
                      <div className="content">{p.answer}</div>
                    )
                  : selected === p.id && (
                      <div className="content">{p.answer}</div>
                    )}
              </div>
            );
          })
        ) : (
          <div>null</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
