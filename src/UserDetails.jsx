import { Card } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export const UserDetails = () => {
  const location = useLocation();
  console.log(location.state.userData, "checkuserDetails");
  return (
    <Card>
      <h2>User Details</h2>
      <p>
        <strong>ID:</strong> {location.state.userData.id}
      </p>
    </Card>
  );
};
