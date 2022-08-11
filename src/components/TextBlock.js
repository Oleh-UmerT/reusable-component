import React from "react";
import '../styles/TextBlock.css'

function TextBlock({ data }) {
  return (
    <div className="componentBody">
      {
        data.map((el, id) => {
          return (
            <div className="block" key={id}>
              <h1>{el.header}</h1>
              <ul>
                {
                  el.options.map((item, id) => {
                    return (
                      <li key={id}>{item}</li>
                    )
                  })
                }
              </ul>
              <p>{el.text}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default TextBlock;