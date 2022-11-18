import React, { useState, useRef } from "react";
import * as t from "./ProfileinformationStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __getMyInformation,
  __postMyInformation,
} from "../../../redux/modules/MyPageSlice";
import profile from "../../../img/profile.jpg";

export default function ProfileInformation() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const myInfomation = useSelector((state) => state);

  const userEmail = localStorage.getItem("email");
  const userNickname = localStorage.getItem("nickName");
  const [profileMode, setProfileMode] = useState(true);
  const [profileImg, setProfileImg] = useState(profile);
  const profileImgInput = useRef(null);

  useEffect(() => {
    dispatch(__getMyInformation({ memberId: 1 }));
  }, []);

  // useEffect(() => {
  //   dispatch(__postMyInformation());
  // });

  const onChange = (e) => {
    if (e.target.files[0]) {
      setProfileImg(e.target.files[0]);
    } else {
      //업로드 취소할 시
      setProfileImg(profileImg);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImg(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const [introduce, setIntroduce] = useState("");
  const introduceonChange = (e) => {
    setIntroduce(e.target.value);
  };

  const changeprofile = () => {
    setProfileMode(false);
  };
  const saveprofile = () => {
    dispatch(
      __postMyInformation({
        img: profileImg,
        self: introduce,
      })
    );
    setProfileMode(true);
  };
  const cancelprofile = () => {
    setProfileMode(true);
  };
  return (
    <t.myInformation>
      {profileMode ? (
        <t.ProfileImgBox src={profileImg} style={{ margin: "20px" }} />
      ) : (
        <>
          <t.ProfileImgBox
            src={profileImg}
            style={{ margin: "20px", cursor: "pointer" }}
            onClick={() => {
              profileImgInput.current.click();
            }}
          />
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/jpg,impge/png,image/jpeg"
            name="profile_img"
            onChange={onChange}
            ref={profileImgInput}
          />
        </>
      )}
      <t.profileinfo>
        <div>{userNickname}님</div>
        <div>{userEmail}</div>
        <t.introduce>
          <div>소개글</div>
          <input type="text" onChange={introduceonChange} />
          <div>{introduce}</div>
        </t.introduce>
        {profileMode ? (
          <button onClick={changeprofile}>프로필변경</button>
        ) : (
          <div>
            <button onClick={saveprofile}>저장</button>
            <button onClick={cancelprofile}>취소</button>
          </div>
        )}
      </t.profileinfo>
      <t.detailPickInfo>여기 아래랑 너무 겹침</t.detailPickInfo>

      <div>
        <t.myInformation>
          <t.ProfileImgBox
            src={profileImg}
            style={{ margin: "20px", cursor: "pointer" }}
          />
          <t.profileinfo>
            <div>{userNickname}님</div>
            <div>{userEmail}</div>
            <t.introduce>
              <div>소개글</div>
              <div>{introduce}</div>
            </t.introduce>
            <button onClick={changeprofile}>프로필변경</button>
          </t.profileinfo>
        </t.myInformation>
      </div>
    </t.myInformation>
  );
}
