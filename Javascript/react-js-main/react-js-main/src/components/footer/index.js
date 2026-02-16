import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Footer = () => {
  return (
    <div
      style={{
        // backgroundColor: "blue",
        display: "flex",
        alignItems: "center",
        padding: "5px",
        justifyContent: "center",
        color: "white",
      }}
    >
      <p style={{ fontStyle: "italic" }}>Footer</p>
      <Stack spacing={2} direction="row">
        {/* <Button variant="text">Text</Button>
        <Button color="secondary">Contained</Button>
        <Button variant="outlined">Outlined</Button> */}
      </Stack>
    </div>
  );
};
export default Footer;
