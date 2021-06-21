import React from "react";
import Frame145 from "../Frame145";
import TextInputsNormal3 from "../TextInputsNormal3";
import Button from "../Button";
import Group212 from "../Group212";
import "./X09BlogsDetailsPageMobile.css";

function X09BlogsDetailsPageMobile(props) {
  const {
    text7,
    rectangle76,
    address,
    text8,
    rectangle97,
    rectangle98,
    followUs,
    f1,
    overlapGroup,
    vector2,
    vector3,
    line56,
    ellipse105,
    spanText,
    spanText2,
    text10,
    line57,
    leaveAReply,
    frame145Props,
    textInputsNormal3Props,
    textInputsNormal32Props,
    textInputsNormal33Props,
    textInputsNormal34Props,
    buttonProps,
    group212Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x09-blogs-details-page-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <h1 className="text-1 valign-text-middle typographyheadlineh4-extrabold-24">{text7}</h1>
        <img className="rectangle-76" src={rectangle76} />
        <div className="group-196">
          <div className="address valign-text-middle typography-body-smalltext-14-regular">{address}</div>
          <p className="text-2 typography-body-smalltext-14-regular">{text8}</p>
        </div>
        <div className="frame-1636">
          <img className="rectangle-97" src={rectangle97} />
          <img className="rectangle-98" src={rectangle98} />
          <div className="frame-1645">
            <div className="follow-us valign-text-middle typographybody16-regular">{followUs}</div>
            <div className="frame-1561">
              <div className="facebook-app-symbol">
                <img className="f-1" src={f1} />
              </div>
              <div className="instagram">
                <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
                  <img
                    className="vector"
                    src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg"
                  />
                  <img className="vector-1" src={vector2} />
                </div>
              </div>
              <div className="twitter">
                <img className="vector-2" src={vector3} />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-200">
          <img className="line-56" src={line56} />
          <div className="frame-1646">
            <img className="ellipse-105" src={ellipse105} />
            <div className="frame-199">
              <div className="text-3 valign-text-middle typographyheadlineh5-extrabold-20">
                <span>
                  <span className="span0 typographyheadlineh5-extrabold-20">{spanText}</span>
                  <span className="span1 typographyheadlineh5-extrabold-20">{spanText2}</span>
                </span>
              </div>
              <p className="text-4 typographybodysmall-12-regular">{text10}</p>
            </div>
          </div>
          <img className="line-57" src={line57} />
        </div>
        <div className="frame-1649">
          <div className="leave-a-reply valign-text-middle typographyheadlineh4-extrabold-24">{leaveAReply}</div>
          <div className="frame-1648">
            <TextInputsNormal3 frame122Props={textInputsNormal3Props.frame122Props} />
            <div className="frame-1647">
              <TextInputsNormal3
                className={textInputsNormal32Props.className}
                frame122Props={textInputsNormal32Props.frame122Props}
              />
              <TextInputsNormal3
                className={textInputsNormal33Props.className}
                frame122Props={textInputsNormal33Props.frame122Props}
              />
              <TextInputsNormal3
                className={textInputsNormal34Props.className}
                frame122Props={textInputsNormal34Props.frame122Props}
              />
            </div>
          </div>
          <Button>{buttonProps.children}</Button>
        </div>
        <Group212
          group862Props={group212Props.group862Props}
          group87Props={group212Props.group87Props}
          group862Props2={group212Props.group862Props2}
          frame5Props={group212Props.frame5Props}
        />
      </div>
    </div>
  );
}

export default X09BlogsDetailsPageMobile;
