import React from "react";
import { AboutMe } from "../Molecule/AboutMe";
import Header from "../Organism/Header";
import Intro from "../Organism/Intro";

export default function MainPage() {
  return (
    <>
      <Header />
      <Intro />
      <AboutMe />
    </>
  );
}
