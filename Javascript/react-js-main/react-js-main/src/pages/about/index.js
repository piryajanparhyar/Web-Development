import React from "react";
import { Card, Layout } from "../../components";
const About = () => {
  const data = [
    {
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxtx5uOH2FwWtC_-HAnN75PQqBFgfLF9D2w&s",
      title:
        "Photographs: Realistic visual representations of people, places, and things.",
      text: "An image is a visual representation, like a photograph, drawing, or painting, used to communicate information or tell stories. Images  can be found online through search engines like Google Images, or on",
    },
    {
      imgURL:
        "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
      title:
        "Photographs: Realistic visual representations of people, places, and things.",
      text: "An image is a visual representation, like a photograph, drawing, or painting, used to communicate information or tell stories. Images  can be found online through search engines like Google Images, or on",
    },
  ];
  return (
    <Layout activePage="About">
      <h1>About Data</h1>
      <Card data={data} />
    </Layout>
  );
};
export default About;
