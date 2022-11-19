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
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function ProfileInformation() {
  const dispatch = useDispatch();
  const id = useParams();
  const data = useSelector((state) => state);
  const myInfomation = useSelector((state) => state.MyInforSlice.data);
  console.log(myInfomation);
  const userEmail = localStorage.getItem("email");
  const userNickname = localStorage.getItem("nickName");
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState(profile);
  const [introduce, setIntroduce] = useState();
  const [nickname, setNickname] = useState("");
  const profileImgInput = useRef(null);
  console.log(id);
  useEffect(() => {
    dispatch(__getMyInformation(id));
  }, []);

  // useEffect(() => {
  //   dispatch(__postMyInformation());
  // });

  //이미지업로드
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
        })
        .send((err) => {});
    } else {
    }
  };

  const changenickname = (e) => {
    setNickname(e.target.value);
  };
  const introduceonChange = (e) => {
    setIntroduce(e.target.value);
  };

  const changeprofile = () => {
    setProfileMode(false);
  };
  const saveprofile = () => {
    dispatch(
      __putMyInformation({
        nickName: nickname,
        self: introduce,
      })
    );
    setNickname(nickname);
    setProfileImg(profileImg);
    setIntroduce(introduce);
    setProfileMode(true);
  };
  const cancelprofile = () => {
    setProfileMode(true); //취소하면 그전 데이터 가져오기 작업할것
  };

  return (
    <t.myInformation>
      {profileMode ? (
        <>
          <t.ProfileImgBox src={profileImg} style={{ margin: "20px" }} />
          <t.profileinfo>
            <h2>{userNickname}님</h2>
            <h3 style={{ color: "#848484" }}>{userEmail}</h3>
            <t.introduce>
              <div>자기소개</div>
              <div>{introduce}</div>
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
              onChange={changenickname}
              value={userNickname || ""}
            />
            <div>{userEmail}</div>
            <t.introduce>
              <div>자기소개</div>
              <input
                type="text"
                onChange={introduceonChange}
                value={introduce || ""}
              />
            </t.introduce>
            <t.buttonGroup>
              <button onClick={saveprofile}>저장</button>
              <button onClick={cancelprofile}>취소</button>
            </t.buttonGroup>
          </t.profileinfo>
        </>
      )}

      <t.detailPickInfo>여기 아래랑 너무 겹침</t.detailPickInfo>
    </t.myInformation>
  );
}
