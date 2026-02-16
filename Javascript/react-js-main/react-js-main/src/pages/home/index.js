import React, { useState, useEffect } from "react";
import { Card, Layout } from "../../components";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Login true", user);
      } else {
        navigate("/login");
      }
    });
  }, []);

  const data = [
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-09/1384128_022022_updates.jpg",
      title:
        "U.S. President Trump is set to introduce new set of AI policies, including issuing a new executive order to limit states from implementing their own AI rules and creating a single federal standard.",
      text: "The move would deliver a win for Big Tech companies that have cultivated close relationships with the White House and likely draw consternation from both Democratic and Republican state leaders who have said they need the ability to protect state residents.There must be only ‘One Rulebook’ if we are going to continue to lead in AI... I will be doing a ONE RULE Executive Order this week. You can’t expect a company to get 50 approvals every time they want to do something, Trump said in a post on his social media site, Truth Social.",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384109_091559_updates.jpg",
      title:
        "A powerful 7.5-magnitude earthquake shook northeastern Japan late on Monday, prompting orders for about 90,000 residents to evacuate and tsunami warnings that hours later were downgraded to advisories.",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384096_070252_updates.jpg",
      title:
        "The complete list of winners has just dropped and List of nominees for the ",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-09/1384128_022022_updates.jpg",
      title:
        "U.S. President Trump is set to introduce new set of AI policies, including issuing a new executive order to limit states from implementing their own AI rules and creating a single federal standard.",
      text: "The move would deliver a win for Big Tech companies that have cultivated close relationships with the White House and likely draw consternation from both Democratic and Republican state leaders who have said they need the ability to protect state residents.There must be only ‘One Rulebook’ if we are going to continue to lead in AI... I will be doing a ONE RULE Executive Order this week. You can’t expect a company to get 50 approvals every time they want to do something, Trump said in a post on his social media site, Truth Social.",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384109_091559_updates.jpg",
      title:
        "A powerful 7.5-magnitude earthquake shook northeastern Japan late on Monday, prompting orders for about 90,000 residents to evacuate and tsunami warnings that hours later were downgraded to advisories.",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384096_070252_updates.jpg",
      title:
        "The complete list of winners has just dropped and List of nominees for the ",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-09/1384128_022022_updates.jpg",
      title:
        "U.S. President Trump is set to introduce new set of AI policies, including issuing a new executive order to limit states from implementing their own AI rules and creating a single federal standard.",
      text: "The move would deliver a win for Big Tech companies that have cultivated close relationships with the White House and likely draw consternation from both Democratic and Republican state leaders who have said they need the ability to protect state residents.There must be only ‘One Rulebook’ if we are going to continue to lead in AI... I will be doing a ONE RULE Executive Order this week. You can’t expect a company to get 50 approvals every time they want to do something, Trump said in a post on his social media site, Truth Social.",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384109_091559_updates.jpg",
      title:
        "A powerful 7.5-magnitude earthquake shook northeastern Japan late on Monday, prompting orders for about 90,000 residents to evacuate and tsunami warnings that hours later were downgraded to advisories.",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384096_070252_updates.jpg",
      title:
        "The complete list of winners has just dropped and List of nominees for the ",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-09/1384128_022022_updates.jpg",
      title:
        "U.S. President Trump is set to introduce new set of AI policies, including issuing a new executive order to limit states from implementing their own AI rules and creating a single federal standard.",
      text: "The move would deliver a win for Big Tech companies that have cultivated close relationships with the White House and likely draw consternation from both Democratic and Republican state leaders who have said they need the ability to protect state residents.There must be only ‘One Rulebook’ if we are going to continue to lead in AI... I will be doing a ONE RULE Executive Order this week. You can’t expect a company to get 50 approvals every time they want to do something, Trump said in a post on his social media site, Truth Social.",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384109_091559_updates.jpg",
      title:
        "A powerful 7.5-magnitude earthquake shook northeastern Japan late on Monday, prompting orders for about 90,000 residents to evacuate and tsunami warnings that hours later were downgraded to advisories.",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
    {
      imgURL:
        "https://www.thenews.com.pk/assets/uploads/updates/2025-12-08/1384096_070252_updates.jpg",
      title:
        "The complete list of winners has just dropped and List of nominees for the ",
      text: "Tsunami warnings were issued for the prefectures of Hokkaido, Aomori and Iwate, and tsunamis from 20 to 50 cm (7 to 18 inches) high were observed at several ports, JMA said. The epicentre of the quake was 80 km (50 miles) off the coast of Aomori prefecture, at a depth of 50 km (30 miles), the agency added.East Japan Railway (9020.T) suspended some services in the area, which was also hit by the massive 9.0-magnitude quake in March 2011.No irregularities were reported at nuclear power plants in the region run by Tohoku Electric Power (9506.T), and Hokkaido Electric Power (9509.T), the utilities said. Tohoku Electric did say, however, that thousands were without power.The Japan Meteorological Agency (JMA) said a tsunami as high as three metres (10 feet) could hit Japan's northeastern coast after the earthquake struck at 11:15 p.m. (1415 GMT).",
    },
  ];
  return (
    <Layout activePage="Home">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((val, index) => {
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <Card imgURL={val.imgURL} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
};
export default Home;
