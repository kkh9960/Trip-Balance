import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as St from "./PostBestfiveStyle";
import LoginPage from "../../login/LoginPage";

const PostBestfive = ({ best }) => {
  const navigator = useNavigate();
  const email = sessionStorage.getItem("email");
  const [modal, setmodal] = useState(false);

  const goPost = (id) => {
    if (email) {
      navigator(`/detail/${id}`);
    } else {
      alert("게시글 조회는 로그인 후 가능합니다.");
      setmodal(!modal);
    }
  };

  return (
    <>
      {modal ? <LoginPage /> : null}
      <St.Main>
        <St.Titlebox>
          <St.BestfiveTitle>인기 게시글</St.BestfiveTitle>
        </St.Titlebox>
        <St.Items>
          {best &&
            best.map((item, idx) => (
              <St.Item
                key={idx}
                onClick={() => {
                  goPost(item.postId);
                }}
              >
                <St.ItemImgBox>
                  <St.ItemImg src={item.img} alt="" />
                </St.ItemImgBox>
                <St.Textbox>
                  <St.HeartCount>{item.heartNum}</St.HeartCount>
                  <St.Heart src="img/board/heart.svg" alt="" />
                </St.Textbox>
              </St.Item>
            ))}
        </St.Items>
        <St.Itemsmobile>
          {best &&
            best.map((item, idx) => (
              <St.Itemmobile
                key={idx}
                onClick={() => {
                  goPost(item.postId);
                }}
              >
                <St.ItemImgBox>
                  <St.ItemImg src={item.img} alt="" />
                </St.ItemImgBox>
                <St.Textbox>
                  <St.HeartCount>{item.heartNum}</St.HeartCount>
                  <St.Heart src="img/board/heart.svg" alt="" />
                </St.Textbox>
              </St.Itemmobile>
            ))}
        </St.Itemsmobile>
      </St.Main>
    </>
  );
};

export default PostBestfive;
