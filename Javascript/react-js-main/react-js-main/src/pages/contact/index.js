import React from "react";
import { Layout } from "../../components";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { BiLogoFacebook } from "react-icons/bi";
import ReactPlayer from "react-player";

const Contact = () => {
  return (
    <Layout activePage="Contact" hideFooter={true}>
      <h1>Contact Data</h1>
      <ReactPlayer
        src={require("./../../video/mov_bbb.mp4")}
        controls={true}
      />

      <FacebookIcon style={{ color: "green", width: "50px", height: "50px" }} />
      <ArrowForwardIcon />
      <AccessTimeFilledIcon
        style={{ color: "blue", width: "150px", height: "150px" }}
      />
      <BiLogoFacebook />
    </Layout>
  );
};
export default Contact;
