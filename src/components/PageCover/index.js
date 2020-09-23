import React from "react";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <div className="page-image">
          <img
            src={props.image}
            alt="page"
            style={{ width: "400px", height: "600px" }}
          />
        </div>
      </div>
    </div>
  );
});

export default PageCover;