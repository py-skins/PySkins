//This is only test component

import React, { useEffect, useState } from "react";

const CaseContainer = () => {
  const [skins, setSkins] = useState([]);

  const getData = async () => {
    const url = "http://127.0.0.1:8000/api/case";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(data),
    });

    const responseData = await response.json();
    setSkins(responseData);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>CaseContainer</div>;
};

export default CaseContainer;
