//This is only test component

import React, { useEffect, useState } from "react";

const CaseContainer = () => {
  const [skins, setSkins] = useState([]);

  const getData = async () => {
    const url = "http://127.0.0.1:8000/api/case"; // Replace with your API endpoint
    // const data = {"case_id": 2}; // Replace with your data
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set the appropriate content type
        // Additional headers if needed
      },
      // body: JSON.stringify(data), // Convert your data to JSON format
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
