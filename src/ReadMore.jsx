import React, { useMemo, useState } from "react";

export const ReadMore = ({ data }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  console.log("check5");
  const displayTextWithUseMemo = useMemo(() => {
    console.log("check6");
    return data.slice(0, 100);
  }, [data]);

  const displayFullTextWithUseMemo = useMemo(() => {
    console.log("check7");
    return data;
  }, [data]);

  return (
    <div>
      {isReadMore ? displayTextWithUseMemo : displayFullTextWithUseMemo}
      <button onClick={() => setIsReadMore(!isReadMore)}>
        {isReadMore ? "Read More" : "Show Less"}
      </button>
    </div>
  );
};
