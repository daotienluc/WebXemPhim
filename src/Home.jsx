import React from "react";
import Header from "./components/Main/Header";
import Banner from "./components/Main/Banner";
import Banner2 from "./components/Main/Banner2";
import HotMovie from "./components/HotMovie/HotMovie";
import TopMovie from "./components/TopMovie/TopMovie";
import SpecialMovie from "./components/SpecialMovie/SpecialMovie";
import DocumentMovie from "./components/DocumentMovie/DocumentMovie";
import ComedyMovie from "./components/ComedyMovie/ComedyMovie";
import KoreaMovie from "./components/KoreaMovie/KoreaMovie";
import AnimeMovie from "./components/AnimeMovie/AnimeMovie";
import ScienceFictionMovie from "./components/ScienceFictionMovie/ScienceFictionMovie";
import HorrorMovie from "./components/HorrorMovie/HorrorMovie";
import Banner3 from "./components/Main/Banner3";
import Footer from "./components/Main/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HotMovie />
      <Banner2 />
      <TopMovie />
      <SpecialMovie />
      <DocumentMovie />
      <ComedyMovie />
      <KoreaMovie />
      <AnimeMovie />
      <ScienceFictionMovie />
      <HorrorMovie />
      <Banner3 />
      <Footer />
    </>
  );
};

export default Home;
