import React, { useState, useRef } from "react";
import * as t from "./MemberInformationStyle";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";
import MemberInformationChart from "./MemberInformationChart";

export default function MemberInformation() {
  const id = useParams();
  const profile = "/img/mypage/noneprofile.webp";
  const insta = "/img/mypage/insta.webp";
  const face = "/img/mypage/facebook.webp";
  const you = "/img/mypage/youtube.webp";
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState(profile);
  const [userEmail, setUserEmail] = useState();
  const [userSelf, setUserSelf, introduceonChange] = useInput();
  const [nickname, setNickname, nicknameChange] = useInput();
  const [topNickname, setTopNickname] = useState();

  const [instaLink, setInstaLink, instaChange] = useInput();
  const [faceLink, setFaceLink, faceChange] = useInput();
  const [youLink, setYouLink, youChange] = useInput();

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
      setInstaLink(result.data.data.insta);
      setFaceLink(result.data.data.facebook);
      setYouLink(result.data.data.youtube);
      setTopNickname(result.data.data.nickName);
    }
    fetchData();
  }, []);

  return (
    <t.ProfileInformationView>
      <t.userName>
        <span>{nickname}님의 페이지</span>
      </t.userName>
      <t.UserInfor>
        <t.myInformation>
          <t.ProfileImgBox src={profileImg} alt="프로필사진" />
          <t.mobileID>
            <t.mobileNickName>{nickname} 님</t.mobileNickName>
            <t.mobileEmail>{userEmail}</t.mobileEmail>
          </t.mobileID>
          <t.profileinfo>
            <t.nickName>{nickname} 님</t.nickName>
            <t.email>{userEmail}</t.email>
            <t.introduce>
              <t.textName>자기소개</t.textName>
              <t.selfBox value={userSelf || ""} readOnly />
            </t.introduce>
            <t.snsLink profileMode={profileMode}>
              <t.textName>링크걸기</t.textName>
              <t.linkWrap>
                <t.link href={`https://www.instagram.com/${instaLink}`}>
                  <t.snsIcon src={insta} />
                  <t.linkBox value={instaLink || ""} readOnly />
                </t.link>
                <t.link href={`https://ko-kr.facebook.com/${faceLink}`}>
                  <t.snsIcon src={face} />
                  <t.linkBox value={faceLink || ""} readOnly />
                </t.link>
                <t.link href={`https://www.youtube.com/${youLink}`}>
                  <t.snsIcon src={you} />
                  <t.linkBox value={youLink || ""} readOnly />
                </t.link>
              </t.linkWrap>
            </t.snsLink>
          </t.profileinfo>
        </t.myInformation>
        <MemberInformationChart />
      </t.UserInfor>
    </t.ProfileInformationView>
  );
}
