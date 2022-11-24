import React, { useState, useRef } from "react";
import * as t from "./ProfileinformationStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getMyInformation,
  __putMyInformation,
} from "../../../redux/modules/MyPageSlice";
import profile from "../../../img/profile.jpg";
import AWS from "aws-sdk";
import { useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";
import InformationChart from "./InformationChart";
import IconFacebooke from "../../../img/Facebook.png";
import IconInstagram from "../../../img/Instagram.png";
import IconYoutube from "../../../img/Youtube.png";
import styled from "styled-components";

export default function ProfileInformation({}) {
  const id = useParams();
  const dispatch = useDispatch();
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState(profile);
  const [userEmail, setUserEmail] = useState();
  const [userSns, setUserSns] = useState();
  const [userSelf, setUserSelf, introduceonChange] = useInput();
  const [nickname, setNickname, nicknameChange] = useInput();
  const [topNickname, setTopNickname] = useState();
  const profileImgInput = useRef(null);
  const [instaInput, setInstaInput] = useState(true);
  const [faceInput, setFaceInput] = useState(true);
  const [youInput, setYouInput] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("/tb/mypage/info");
      setProfileImg(result.data.data.profileImg);
      console.log(result.data.data.profileImg);
      if (result.data.data.profileImg === "") {
        setProfileImg(profile);
      } else {
        setProfileImg(result.data.data.profileImg);
      }
      setNickname(result.data.data.nickName);
      setUserEmail(result.data.data.email);
      setUserSelf(result.data.data.self);
      setUserSns(result.data.data.sns);

      setTopNickname(result.data.data.nickname);
    }
    fetchData();
  }, [nickname]);
  //이미지업로드

  const S3URL = "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com";
  const onFileUpload = async (e) => {
    const ACCESS_KEY = "AKIAXQKS7DPZ7R5C4WNA";
    const SECRET_ACCESS_KEY = "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";
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "react-image-seongwoo";
    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });
    const file = e.target.files[0];
    const fileName = file.name.replaceAll(" ", "");
    const params = {
      ACL: "public-read",
      Body: file,
      Bucket: S3_BUCKET,
      Key: fileName,
    };

    if (profileImg) {
      await myBucket
        .putObject(params)
        .on("httpUploadProgress", (Progress, Response) => {
          const imgURL = S3URL + Response.request.httpRequest.path;
          setProfileImg(imgURL);
        })
        .send((err) => {});
    } else {
    }
  };
  const changeprofile = () => {
    setProfileMode(false);
  };
  const saveprofile = () => {
    dispatch(
      __putMyInformation({
        nickName: nickname,
        self: userSelf,
        profileImg: profileImg,
      })
    );
    setNickname(nickname);
    setProfileImg(profileImg);
    setUserSelf(userSelf);
    setTopNickname(nickname);
    setProfileMode(true);
  };

  // const cancelprofile = () => {
  //   setProfileMode(true);
  //   setNickname(nickname);
  //   setProfileImg(profileImg);
  //   setUserSelf(userSelf);
  // };
  // const instalink = () => {
  //   instaInput ? setInstaInput(false) : setInstaInput(true);
  // };
  // const facelink = () => {
  //   faceInput ? setFaceInput(false) : setFaceInput(true);
  // };
  // const youlink = () => {
  //   youInput ? setYouInput(false) : setYouInput(true);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); //clean up
  //   };
  // }, []);
  // const handleScroll = () => {
  //   console.log("scrolled");
  //   if (window.scrollY > 80) {
  //   }
  // };

  return (
    <>
      <t.userName>
        {profileMode ? nickname : topNickname}
        <span>님의 마이페이지</span>
      </t.userName>
      <t.UserInfor $mode="dark">
        {profileMode ? (
          <t.myInformation>
            <t.ProfileImgBox src={profileImg} />
            <t.profileinfo>
              <t.nickName>HI.{nickname}</t.nickName>
              <t.email style={{ color: "#848484" }}>{userEmail}</t.email>
              <t.introduce>
                <t.textName>자기소개</t.textName>
                <t.selfBox value={userSelf}></t.selfBox>
              </t.introduce>
              <t.snsLink>
                {/* <t.textName>링크걸기</t.textName> */}
                {/* <t.snsIcon src={IconInstagram} />
                <t.snsIcon src={IconFacebooke} />
                <t.snsIcon src={IconYoutube} /> */}
              </t.snsLink>
              <t.buttonGroup>
                <button onClick={changeprofile}>프로필변경</button>
              </t.buttonGroup>
            </t.profileinfo>
          </t.myInformation>
        ) : (
          <t.myInformation>
            <t.ProfileImgBox
              src={profileImg}
              style={{
                margin: "20px",
                cursor: "pointer",
              }}
              onClick={() => {
                profileImgInput.current.click();
              }}
            />
            <input
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,impge/png,image/jpeg"
              name="profile_img"
              onChange={onFileUpload}
              ref={profileImgInput}
            />
            <t.profileinfo>
              <t.nickName>
                <input
                  type="text"
                  onChange={nicknameChange}
                  defaultValue={nickname || ""}
                  maxLength={10}
                />
              </t.nickName>
              <t.email style={{ top: "130px" }}>{userEmail}</t.email>
              <t.introduce>
                <t.textName>자기소개</t.textName>
                <t.selfBox
                  onChange={introduceonChange}
                  defaultValue={userSelf || ""}
                  maxLength={100}
                />
              </t.introduce>
              <t.snsLink>
                {/* <t.textName>링크걸기</t.textName>
                {instaInput ? (
                  <>
                    <t.snsIcon src={IconInstagram} onClick={instalink} />
                  </>
                ) : (
                  <>
                    <t.snsIcon src={IconInstagram} onClick={instalink} />
                    <input type="text" />
                  </>
                )}
                {faceInput ? (
                  <>
                    <t.snsIcon src={IconFacebooke} onClick={facelink} />
                  </>
                ) : (
                  <>
                    <t.snsIcon src={IconFacebooke} onClick={facelink} />
                    <input type="text" />
                  </>
                )}
                {youInput ? (
                  <>
                    <t.snsIcon src={IconYoutube} onClick={youlink} />
                  </>
                ) : (
                  <>
                    <t.snsIcon src={IconYoutube} onClick={youlink} />
                    <input type="text" />
                  </>
                )} */}
              </t.snsLink>
              <t.buttonGroup>
                <button onClick={saveprofile}>저장</button>
                {/* <button onClick={cancelprofile}>취소</button> */}
              </t.buttonGroup>
            </t.profileinfo>
          </t.myInformation>
        )}
        <InformationChart />
      </t.UserInfor>
    </>
  );
}
