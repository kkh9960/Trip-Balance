import React, { useState, useRef } from "react";
import * as t from "./MemberInformationStyle";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import profile from "../../../img/noneprofile.webp";
import { useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";
import InformationChart from "./MemberInformationChart";


export default function MemberInformation() {
  const id = useParams();

  
 
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
          <t.profileinfo>
            <t.nickName>HI. {nickname} 님</t.nickName>
            <t.email style={{ color: "#848484" }}>{userEmail}</t.email>
            <t.introduce>
              <t.textName>자기소개</t.textName>
              <t.selfBox value={userSelf} />
            </t.introduce>
            <t.snsLink>
            
            </t.snsLink>
          </t.profileinfo>
        </t.myInformation>

        <InformationChart />
      </t.UserInfor>
    </t.ProfileInformationView>
  );
}
