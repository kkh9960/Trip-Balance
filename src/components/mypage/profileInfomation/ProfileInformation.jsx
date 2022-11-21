import React, { useState, useRef } from "react";
import * as t from "./ProfileinformationStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __putMyInformation } from "../../../redux/modules/MyPageSlice";
import profile from "../../../img/profile.jpg";
import AWS from "aws-sdk";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import useInput from "../../../hooks/useInput";
import instance from "../../../lib/instance";

export default function ProfileInformation({}) {
  const id = useParams();
  const dispatch = useDispatch();
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState();
  const [userEmail, setUserEmail] = useState(profile);
  const [userSns, setUserSns] = useState();
  const [userSelf, setUserSelf, introduceonChange] = useInput();
  const [nickname, setNickname, nicknameChange] = useInput();
  const profileImgInput = useRef(null);
  console.log(profileImg);
  console.log(nickname);

  useEffect(() => {
    async function fetchData() {
      const result = await instance.get("https://tbtbtb.shop/tb/mypage/info");
      setProfileImg(result.data.data.profileImg);
      setNickname(result.data.data.nickName);
      setUserEmail(result.data.data.email);
      setUserSelf(result.data.data.self);
      setUserSns(result.data.data.sns);
    }
    fetchData();
  }, []);
  //이미지업로드z
  const S3URL = "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com";
  const onFileUpload = async (e) => {
    const ACCESS_KEY = "AKIAXQKS7DPZ7R5C4WNA";
    const SECRET_ACCESS_KEY = "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";
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "react-image-seongwoo";

    // AWS ACCESS KEY를 세팅합니다.
    AWS.config.update({
      accessKeyId: ACCESS_KEY,
      secretAccessKey: SECRET_ACCESS_KEY,
    });

    // 버킷에 맞는 이름과 리전을 설정합니다.
    const myBucket = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });
    const file = e.target.files[0];
    const fileName = file.name.replaceAll(" ", "");
    // 파일과 파일이름을 넘겨주면 됩니다.
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
          console.log(imgURL);
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
    setProfileMode(true);
  };

  const cancelprofile = () => {
    setProfileImg(profileImg);
    setNickname(nickname);
    setUserSelf(userSelf);
    setProfileMode(true); //취소하면 그전 데이터 가져오기 작업할것
  };

  return (
    <t.myInformation>
      {profileMode ? (
        <>
          <t.ProfileImgBox src={profileImg} />
          <t.profileinfo>
            <h2>{nickname}님</h2>
            <h3 style={{ color: "#848484" }}>{userEmail}</h3>
            <t.introduce>
              <div>자기소개</div>
              <div>{userSelf}</div>
            </t.introduce>
            <t.buttonGroup>
              <button onClick={changeprofile}>프로필변경</button>
            </t.buttonGroup>
          </t.profileinfo>
        </>
      ) : (
        <>
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
            <input
              type="text"
              onChange={nicknameChange}
              value={nickname || ""}
            />
            <div>{userEmail}</div>
            <t.introduce>
              <div>자기소개</div>
              <input
                type="text"
                onChange={introduceonChange}
                value={userSelf || ""}
              />
            </t.introduce>
            <t.buttonGroup>
              <button onClick={saveprofile}>저장</button>
              <button onClick={cancelprofile}>취소</button>
            </t.buttonGroup>
          </t.profileinfo>
        </>
      )}

      <t.detailPickInfo>
        <t.detailPickInfoTotal>
          <h3>Total</h3>
          <h1>27</h1>
        </t.detailPickInfoTotal>
        <t.detailPickInfoCategory>뭐지</t.detailPickInfoCategory>
        <t.detailPickInfoCategory>뭐지</t.detailPickInfoCategory>
        <t.detailPickInfoCategory>뭐지</t.detailPickInfoCategory>
        <t.detailPickInfoCategory>뭐지</t.detailPickInfoCategory>
        <t.detailPickInfoCategory>뭐지</t.detailPickInfoCategory>
      </t.detailPickInfo>
    </t.myInformation>
  );
}
