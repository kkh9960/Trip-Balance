import React, { useState, useRef } from "react";
import * as t from "./ProfileinformationStyle";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


import AWS from "aws-sdk";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";
import InformationChart from "./InformationChart";

export default function ProfileInformation() {
  const profile = "/img/mypage/noneprofile.webp";
  const camera = "/img/mypage/profileImgChange.webp";
  const insta = "/img/mypage/insta.webp";
  const face = "/img/mypage/facebook.webp";
  const you = "/img/mypage/youtube.webp";
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState(profile);
  const [userEmail, setUserEmail] = useState();
  const [userSelf, setUserSelf, introduceonChange] = useInput();
  const [nickname, setNickname, nicknameChange] = useInput();
  const [topNickname, setTopNickname] = useState();

  const profileImgInput = useRef();
  const [instaLink, setInstaLink, instaChange] = useInput();
  const [faceLink, setFaceLink, faceChange] = useInput();
  const [youLink, setYouLink, youChange] = useInput();
  const [instaInput, setInstaInput] = useState(true);
  const [faceInput, setFaceInput] = useState(true);
  const [youInput, setYouInput] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("/tb/mypage/info");
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

  //이미지업로드
  const S3URL = "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com";
  const onFileUpload = async (e) => {
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
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

    await myBucket
      .putObject(params)
      .on("httpUploadProgress", (Progress, Response) => {
        const imgURL = S3URL + Response.request.httpRequest.path;
        setProfileImg(imgURL);
      })
      .send((err) => {});
  };

  const changeprofile = () => {
    setProfileMode(false);
  };

  const saveprofile = async (e) => {
    const { data } = await instance.put(`tb/mypage/setinfo`, {
      nickName: nickname,
      self: userSelf,
      profileImg: profileImg,
      insta: instaLink,
      facebook: faceLink,
      youtube: youLink,
    });
    if (data.statusCode === "118") {
      alert("중복된 아이디입니다.");
    } else {
      setNickname(nickname);
      setProfileImg(profileImg);
      setUserSelf(userSelf);
      setTopNickname(nickname);
      setInstaLink(instaLink);
      setYouLink(youLink);
      setFaceLink(faceLink);
      setInstaInput(true);
      setProfileMode(true);
    }
  };

  return (
    <t.ProfileInformationView>
      <t.userName>
        {profileMode ? nickname : topNickname}
        <span>님의 마이페이지</span>
      </t.userName>
      <t.UserInfor>
        {profileMode ? (
          <t.myInformation>
            <t.ProfileImgBox src={profileImg} alt="profileimg" />
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
                    <t.snsIcon src={insta} alt="snsicon" />
                    <t.linkBox value={instaLink || ""} readOnly />
                  </t.link>
                  <t.link href={`https://ko-kr.facebook.com/${faceLink}`}>
                    <t.snsIcon src={face} alt="snsicon" />
                    <t.linkBox value={faceLink || ""} readOnly />
                  </t.link>
                  <t.link href={`https://www.youtube.com/${youLink}`}>
                    <t.snsIcon src={you} alt="snsicon" />
                    <t.linkBox value={youLink || ""} readOnly />
                  </t.link>
                </t.linkWrap>
              </t.snsLink>
            </t.profileinfo>
            <t.buttonGroup>
              <button onClick={changeprofile}>프로필변경</button>
            </t.buttonGroup>
          </t.myInformation>
        ) : (
          <t.myInformation>
            <t.ProfileImgBox
              src={profileImg}
              style={{
                margin: "20px",
                cursor: "pointer",
              }}
              onClick={() => profileImgInput.current.click()}
              profileMode={profileMode}
              alt="progileimg"
            />
            <t.profileImgChange onClick={() => profileImgInput.current.click()}>
              <t.camera src={camera} alt="cameraicon" />
            </t.profileImgChange>
            <input
              aria-label="ProfileImgBox"
              type="file"
              style={{ display: "none" }}
              accept="image/jpg,image/png,image/jpeg"
              name="profile_img"
              onChange={onFileUpload}
              ref={profileImgInput}
            />
            <t.mobileID>
              <t.mobileNickName>
                <input
                  type="text"
                  onChange={nicknameChange}
                  defaultValue={nickname}
                  maxLength={8}
                />
              </t.mobileNickName>

              <t.mobileEmail>{userEmail}</t.mobileEmail>
            </t.mobileID>
            <t.profileinfo>
              <t.nickName>
                <t.nickInput
                  type="text"
                  onChange={nicknameChange}
                  defaultValue={nickname || ""}
                  maxLength={8}
                />
              </t.nickName>
              <t.email style={{ top: "130px" }}>{userEmail}</t.email>
              <t.introduce>
                <t.textName>자기소개</t.textName>
                <t.selfBox
                  onChange={introduceonChange}
                  defaultValue={userSelf || ""}
                  maxLength={50}
                />
              </t.introduce>
              <t.snsLink>
                <t.textName>링크걸기</t.textName>
                <t.instaLinkbox>
                  {profileMode ? (
                    <>
                      <t.snsIcon
                        src={insta}
                        alt="snsicon"
                        onClick={() => setInstaInput(false)}
                      />
                    </>
                  ) : (
                    <>
                      <t.snsIcon
                        src={insta}
                        alt="snsicon"
                        onClick={() => setInstaInput(true)}
                      />
                      <t.snsInput
                        type="text"
                        onChange={instaChange}
                        placeholder="아이디를 적어주세요"
                        defaultValue={instaLink || ""}
                        maxLength={15}
                      />
                    </>
                  )}
                </t.instaLinkbox>
                <t.faceLinkbox>
                  {profileMode ? (
                    <>
                      <t.snsIcon
                        src={face}
                        alt="snsicon"
                        onClick={() => setFaceInput(false)}
                      />
                    </>
                  ) : (
                    <>
                      <t.snsIcon
                        src={face}
                        alt="snsicon"
                        onClick={() => setFaceInput(true)}
                      />
                      <t.snsInput
                        type="text"
                        onChange={faceChange}
                        placeholder="아이디를 적어주세요"
                        defaultValue={faceLink || ""}
                        maxLength={15}
                      />
                    </>
                  )}
                </t.faceLinkbox>
                <t.youLinkbox>
                  {profileMode ? (
                    <>
                      <t.snsIcon
                        src={you}
                        alt="snsicon"
                        onClick={() => setYouInput(false)}
                      />
                    </>
                  ) : (
                    <>
                      <t.snsIcon
                        src={you}
                        alt="snsicon"
                        onClick={() => setYouInput(true)}
                      />
                      <t.snsInput
                        type="text"
                        onChange={youChange}
                        placeholder="아이디를 적어주세요"
                        defaultValue={youLink || ""}
                        maxLength={35}
                      />
                    </>
                  )}
                </t.youLinkbox>
              </t.snsLink>
            </t.profileinfo>
            <t.buttonGroup>
              <button onClick={saveprofile}>저장</button>
            </t.buttonGroup>
          </t.myInformation>
        )}
        <InformationChart />
      </t.UserInfor>
    </t.ProfileInformationView>
  );
}
