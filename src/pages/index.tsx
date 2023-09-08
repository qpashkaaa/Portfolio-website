import Header from "../components/Header"
import Wrapper from "../components/Wrapper"
import Head from "next/head";
import MainPage from "@/components/MainPage";
import MainShortInfo from "@/components/MainShortInfo";
import AboutMePage from "@/components/AboutMePage";
import MySkillsPage from "@/components/MySkillsPage";
import DevToolsPage from "@/components/DevToolsPage";
import PortfolioPage from "@/components/PortfolioPage";
import ResumePage from "@/components/ResumePage";
import ContactPage from "@/components/ContactPage";
import Footer from "@/components/Footer";
import BackButton from "@/components/UI/BackButton";
import HeaderMobile from "@/components/mobile/HeaderMobile";
import MySkillsPageMobile from "@/components/mobile/MySkillsPageMobile";
import DevToolsPageMobile from "@/components/mobile/DevToolsPageMobile";

const index = () => {
  return (
    <>
      <Wrapper>
        <BackButton></BackButton>
        <section>
          <Header></Header>
          <HeaderMobile></HeaderMobile>
        </section>
        <MainPage></MainPage>
        <MainShortInfo></MainShortInfo>
        <AboutMePage></AboutMePage>
        <section>
          <MySkillsPage></MySkillsPage>
          <MySkillsPageMobile></MySkillsPageMobile>
        </section>
        <section>
          <DevToolsPage></DevToolsPage>
          <DevToolsPageMobile></DevToolsPageMobile>
        </section>
        <PortfolioPage></PortfolioPage>
        <ResumePage></ResumePage>
        <ContactPage></ContactPage>
        <Footer></Footer>
      </Wrapper>
    </>
  )
}

export default index