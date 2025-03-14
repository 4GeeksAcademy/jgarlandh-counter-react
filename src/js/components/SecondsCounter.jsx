import React, { useEffect, useState } from "react";

const SecondsCounter = (props) => {
  const { seconds } = props;

  return (
    <div>
      <h1>{seconds} segundos</h1>
    </div>
  );
};

export default SecondsCounter;