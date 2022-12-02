import React, { useState, useRef } from "react";
import * as t from "./MemberInformationStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getMyInformation,
  __putMyInformation,
} from "../../../redux/modules/MyPageSlice";
import profile from "../../../img/noneprofile.webp";
import AWS from "aws-sdk";
import { useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";
import InformationChart from "./MemberInformationChart";
// import IconFacebooke from "../../../img/Facebook.png";
// import IconInstagram from "../../../img/Instagram.png";
// import IconYoutube from "../../../img/Youtube.png";

export default function MemberInformation() {
  const id = useParams();

  const dispatch = useDispatch();
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState(profile);
  const [userEmail, setUserEmail] = useState();
  const [userSns, setUserSns] = useState();
  const [userSelf, setUserSelf, introduceonChange] = useInput();
  const [nickname, setNickname, nicknameChange] = useInput();
  const [topNickname, setTopNickname] = useState();

  const profileImgInput = useRef();
  const [instaInput, setInstaInput] = useState(true);
  const [faceInput, setFaceInput] = useState(true);
  const [youInput, setYouInput] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const result = await instance.get(`/tb/memberinfo/${id.id}`);
      if (result.data.data.profileImg === null || undefined) {
        setProfileImg(profile);
      } else {
        setProfileImg(result.data.data.profileImg);
      }
      setNickname(result.data.data.nickName);
      setUserEmail(result.data.data.email);
      setUserSelf(result.data.data.self);
      setUserSns(result.data.data.sns);
      setTopNickname(result.data.data.nickName);
    }
    fetchData();
  }, []);

  // const instalink = () => {
  //   instaInput ? setInstaInput(false) : setInstaInput(true);
  // };
  // const facelink = () => {
  //   faceInput ? setFaceInput(false) : setFaceInput(true);
  // };
  // const youlink = () => {
  //   youInput ? setYouInput(false) : setYouInput(true);
  // };

  return (
    <t.ProfileInformationView>
      <t.userName>
        <span>{nickname}님의 페이지</span>
      </t.userName>
      <t.UserInfor>
        <t.myInformation>
          <t.ProfileImgBox src={profileImg} alt="프로필사진" />
          <t.profileinfo>
            <t.nickName>HI. {nickname} 님</t.nickName>
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
          </t.profileinfo>
        </t.myInformation>

        <InformationChart />
      </t.UserInfor>
    </t.ProfileInformationView>
  );
}
