import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X09BlogsDetailsPageMobile from "./components/X09BlogsDetailsPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|09-blogs-details-page-mobile)">
          <X09BlogsDetailsPageMobile {...x09BlogsDetailsPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const frame122Data = {
    children: "Comment",
    className: "",
};

const textInputsNormal3Data = {
    frame122Props: frame122Data,
};

const frame1222Data = {
    children: "Name",
    className: "frame-1-2",
};

const textInputsNormal32Data = {
    className: "text-inputs-normal-2",
    frame122Props: frame1222Data,
};

const frame1223Data = {
    children: "Email",
    className: "frame-1-3",
};

const textInputsNormal33Data = {
    className: "text-inputs-normal",
    frame122Props: frame1223Data,
};

const frame1224Data = {
    children: "Phone Number",
    className: "frame-1",
};

const textInputsNormal34Data = {
    className: "text-inputs-normal",
    frame122Props: frame1224Data,
};

const buttonData = {
    children: "POST COMMENT",
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-2@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const instagramData = {
    instagram: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-379@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group87Data = {
    facebookAppSymbolProps: facebookAppSymbolData,
    facebookAppSymbolProps2: instagramData,
    twitterProps: twitterData,
};

const group32Data = {
    place: "Contact",
    overlapGroup4: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-49@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-14@2x.svg",
    overlapGroup5: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-27@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-16@2x.svg",
    text21: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text20: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
    className: "frame-14-1",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
    className: "frame-14",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group212Data = {
    group862Props: group8622Data,
    group87Props: group87Data,
    group862Props2: group32Data,
    frame5Props: frame5Data,
};

const x09BlogsDetailsPageMobileData = {
    text7: "Lorem Ipsum passages of Lorem Ipsum available",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@2x.png",
    address: "5 June 2021",
    text8: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo, ac tincidunt sem pharetra nec. Nunc faucibus ipsum vel metus aliquam, interdum feugiat massa viverra. Donec velit magna, sodales sed convallis eu, egestas vel nisl. Etiam fermentum felis ac risus scelerisque, ac euismod diam finibus. Suspendisse lacus sem, gravida vestibulum ligula et, pulvinar mattis purus.<br /><br />Etiam fermentum felis ac risus scelerisque, ac euismod diam finibus. Suspendisse lacus sem, gravida vestibulum ligula et, pulvinar mattis purus. Phasellus mollis molestie ante sed rhoncus.<br /><br />Sed eu faucibus libero. Nunc at libero eget massa lobortis consectetur vel eu ligula. Suspendisse est mauris, fermentum id pellentesque ut, pharetra quis risus. Aliquam placerat orci turpis, quis venenatis massa lobortis a. Integer nec magna erat. Nullam vel dui vel purus consequat fermentum. Donec rhoncus convallis erat sit amet vestibulum. Duis lacinia, purus eget fermentum volutpat, justo ipsum mattis risus, a efficitur sapien nisi nec augue.</>,
    rectangle97: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-97-1@2x.png",
    rectangle98: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-98-1@2x.png",
    followUs: "Share:",
    f1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-2@2x.svg",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-21@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-22@2x.svg",
    line56: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-56-1@2x.svg",
    ellipse105: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/ellipse-105@2x.png",
    spanText: "Written by:",
    spanText2: " Darlene Robertson",
    text10: "Donec vitae mi metus. Vestibulum ac aliquam ligula. Sed vestibulum eu mi in finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    line57: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/line-56-1@2x.svg",
    leaveAReply: "Leave a reply",
    frame145Props: frame145Data,
    textInputsNormal3Props: textInputsNormal3Data,
    textInputsNormal32Props: textInputsNormal32Data,
    textInputsNormal33Props: textInputsNormal33Data,
    textInputsNormal34Props: textInputsNormal34Data,
    buttonProps: buttonData,
    group212Props: group212Data,
};

