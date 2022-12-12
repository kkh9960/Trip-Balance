import React, { useState, useRef } from "react";
import * as t from "./MemberInformationStyle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";
import InformationChart from "./MemberInformationChart";
import MemberInformationChart from "./MemberInformationChart";

export default function MemberInformation() {
  const id = useParams();
  const profile = "/img/mypage/noneporfile.webp";
  const [profileImg, setProfileImg] = useState(profile);
  const [userEmail, setUserEmail] = useState();
  const [userSns, setUserSns] = useState();
  const [userSelf, setUserSelf, introduceonChange] = useInput();
  const [nickname, setNickname, nicknameChange] = useInput();
  const [topNickname, setTopNickname] = useState();

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
              <t.selfBox value={userSelf} readOnly />
            </t.introduce>
            <t.snsLink>
              {/* <t.textName>링크걸기</t.textName> */}
              {/* <t.snsIcon src={IconInstagram} />
                <t.snsIcon src={IconFacebooke} />
                <t.snsIcon src={IconYoutube} /> */}
            </t.snsLink>
          </t.profileinfo>
        </t.myInformation>
        <MemberInformationChart />
      </t.UserInfor>
    </t.ProfileInformationView>
  );
}
