import React from "react";

function Button(props) {
  const { name, type } = props;
  
  return (
    <>
      <button type={type} onClick={() => alert("Clicked")} className="btn-primary rounded">
        {name}
      </button>
     
    </>
  );
}

export default Button;
