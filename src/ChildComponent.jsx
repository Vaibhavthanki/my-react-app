import React, { memo } from "react";

const ChildComponent = ({ data, handleSubmit }) => {
  console.log(data, "check4", handleSubmit);
  return <div>ChildComponent</div>;
};

const MemoizedChildComponent = memo(ChildComponent, (prevProps, nextProps) => {
  return prevProps.data === nextProps.data;
});

export default MemoizedChildComponent;
// export default ChildComponent;
