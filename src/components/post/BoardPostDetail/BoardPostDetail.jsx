import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as St from "./BoardPostDetailStyle";
import Topbutton from "../../common/button/TopButton";
import "./BoardPostDetail.css";
import {
  __getComment,
  __postComment,
} from "../../../redux/modules/CommentSlice";
import { useParams } from "react-router-dom";
import {
  __getBoardDetail,
  __getmypost,
  __deleteBoard,
  __boardlike,
} from "../../../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";

import PostComment from "../PostComment/PostComment";
import BoardMypost from "../BoardMypost/BoardMypost";
import Footer from "../../common/Footer";

const BoardPostDetail = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [comment, setcomment] = useState("");
  const [cmtcount, setcmtcount] = useState(0);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const DefaultImega = "../img/board/default2.jpg";
  const heartsvg = "../img/board/heart.svg";
  const binheartsvg = "../img/board/binheart.svg";
  const DefaultCmtImg = "../img/board/cmtdefault.svg";

  const post = useSelector((state) => state.BoardSlice.post);
  const isLoading = useSelector((state) => state.BoardSlice.isLoading);
  const mypost = useSelector((state) => state.BoardSlice.myposts);
  const comments = useSelector((state) => state.commentSlice.comments);
  const render = useSelector((state) => state.rootReducer.profilebtn.lender);

  const nickname = sessionStorage.getItem("nickName");

  const [heart, setHeart] = useState(false);
  const [heartnum, setheartnum] = useState();
  const [commentImg, setcommentImg] = useState();
  const [mypostready, setmypostready] = useState(false);

  useEffect(() => {
    dispatch(__getBoardDetail(id));
  }, []);

  useEffect(() => {}, [render]);

  useEffect(() => {
    if (post == null) {
    } else {
      dispatch(__getmypost(post?.authorId));
      setmypostready(true);
    }
  }, [isLoading]);

  useEffect(() => {
    dispatch(__getComment(id));
  }, []);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setHeart(post?.heartYn);
    setheartnum(post?.heartNum);
    setcommentImg(post?.profileImg);
  }, [post]);

  const CheckLength = (e) => {
    let text = e.target.value;
    let Cmtlength = text.length;
    let max_length = 200;

    if (Cmtlength > max_length) {
      alert(max_length + "자 이상 작성할수 없습니다.");
      text = text.substr(0, max_length);
      e.target.value = text;
      e.target.focus();
      setcmtcount(text);
    }

    setcmtcount(Cmtlength);
  };

  const CommentHandler = (e) => {
    setcomment(e.target.value);
  };

  const Reg = /^\s+|\s+$/g;

  //댓글쓰기
  const WriteComment = () => {
    if (Reg.test(comment) || comment == "") {
      alert("댓글은 빈칸으로 시작하거나 빈칸으로 끝날수 없습니다.");
    } else {
      dispatch(__postComment({ id, content: comment }));
      setcomment("");
    }
  };

  const modifyPost = () => {
    navigate(`/modify/${id.id}`);
  };
  const DeletePost = () => {
    dispatch(__deleteBoard(id));
  };

  //트러블슈팅## 좋아요 갯수 실시간 변환
  //setState에 바로 연산자를 먹이면 예상결괏값으로 출력되지않는다. update 함수를 넣어줘야한다.

  const Boardpostlike = () => {
    setHeart(!heart);
    dispatch(__boardlike(id.id));

    if (heart) {
      setheartnum(heartnum - 1);
    } else {
      setheartnum(heartnum + 1);
    }
  };

  const goProfile = () => {
    navigate(`/memberpage/${post?.authorId}`);
  };

  const ImgHandlerTest = () => {};

  //이미지 슬라이드 부분
  useEffect(() => {
    setTimeout(() => {
      const sliderImg = document.querySelector(".slider__img");
      const sliderInner = document.querySelector(".slider__inner");
      const slider = document.querySelectorAll(".slider");
      const sliderBtn = document.querySelector(".slider__btn");
      const sliderBtnPrev = sliderBtn.querySelector(".prev");
      const sliderBtnNext = sliderBtn.querySelector(".next");
      const sliderDot = document.querySelector(".slider__dot");
      let currentIndex = 0;
      let sliderWidth = sliderImg.offsetWidth; //이미지 가로 값
      let sliderLength = slider.length; //이미지 갯수
      let sliderFirst = slider[0]; //첫 번째 이미지
      let sliderLast = slider[sliderLength - 1]; //마지막 이미지
      let cloneFirst = sliderFirst.cloneNode(true); //첫 번째 이미지 복사
      let cloneLast = sliderLast.cloneNode(true); //마지막 이미지 복사
      let dotIndex = "";
      let sliderTimer = "";
      let interval = 3000;

      //이미지 복사
      sliderInner.appendChild(cloneFirst);
      sliderInner.insertBefore(cloneLast, sliderFirst);

      //닷 메뉴 셋탕
      function dotInit() {
        for (let i = 0; i < sliderLength; i++) {
          dotIndex += "<div class='dot'></div>";
        }
        dotIndex += "<div class='play'>play</div>";
        dotIndex += "<div class='stop show'>stop</div>";
        sliderDot.innerHTML = dotIndex;
        sliderDot.firstElementChild.classList.add("active");
      }
      dotInit();

      const dotActive = document.querySelectorAll(".slider__dot .dot");
      //이미지 움직이기
      function gotoSlider(index) {
        dotActive.forEach((el) => {
          el.classList.remove("active");
        });

        if (index == sliderLength) {
          dotActive[0].classList.add("active");
        } else {
          dotActive[index]?.classList.add("active");
        }

        sliderInner.classList.add("transition");
        sliderInner.style.left = -sliderWidth * (index + 1) + "px";

        currentIndex = index;

        //두 번째 이미지 : left: -2880px
        //세 번째 이미지 : left: -4320px ...
      }

      //닷버튼 클릭
      document.querySelectorAll(".slider__dot .dot").forEach((dot, index) => {
        dot.addEventListener("click", () => {
          gotoSlider(index);
        });
      });
      //미리보기 클릭
      document.querySelectorAll(".ImgPreview").forEach((dot, index) => {
        dot.addEventListener("click", () => {
          gotoSlider(index);
        });
      });

      //자동재생
      function autoPlay() {
        sliderTimer = setInterval(() => {
          if (document.querySelectorAll(".ImgPreview").length == 1) {
          } else {
            if (sliderInner.classList.contains("transition")) {
            } else {
              gotoSlider(currentIndex + 1);
            }
          }
        }, interval);
      }

      //자동스탑
      function stopPlay() {
        clearInterval(sliderTimer);
      }
      stopPlay();

      //이전
      sliderBtnPrev.addEventListener("click", () => {
        let prevIndex = currentIndex - 1;
        if (sliderInner.classList.contains("transition")) {
        } else {
          gotoSlider(prevIndex);
        }
      });

      //다음
      sliderBtnNext.addEventListener("click", () => {
        let nextIndex = currentIndex + 1;
        if (sliderInner.classList.contains("transition")) {
        } else {
          gotoSlider(nextIndex);
        }
      });

      sliderInner.addEventListener("transitionend", () => {
        sliderInner.classList.remove("transition");
        if (currentIndex == -1) {
          sliderInner.style.left = -(sliderLength * sliderWidth) + "px";
          currentIndex = sliderLength - 1;
        }
        if (currentIndex == sliderLength) {
          sliderInner.style.left = -(1 * sliderWidth) + "px";
          currentIndex = 0;
        }
      });

      sliderInner.addEventListener("mouseenter", () => {
        stopPlay();
      });
      sliderInner.addEventListener(
        "mouseleave",
        () => {
          if (document.querySelector(".play").classList.contains("show")) {
            stopPlay();
          } else {
            autoPlay();
          }
        },
        []
      );

      document.querySelector(".play").addEventListener("click", () => {
        document.querySelector(".play").classList.remove("show");
        document.querySelector(".stop").classList.add("show");
        autoPlay();
      });

      document.querySelector(".stop").addEventListener("click", () => {
        document.querySelector(".stop").classList.remove("show");
        document.querySelector(".play").classList.add("show");
        stopPlay();
      });
    }, 1000);
  }, []);

  const INJECTIONRegex = /[%=*><]/g;
  const RegexTest = (e) => {
    if (INJECTIONRegex.test(e.target.value)) {
      alert("보안 : 특수문자(<,>,*,=,%)는 입력이 제한됩니다.");
      e.target.value = e.target.value.replace(/[%=*><]/g, "");
    }
  };

  return loading ? null : (
    <St.HeaderContainer>
      <St.BoardPostDetailContainer>
        <St.BoardPostDetailWrap>
          <St.Postnickname>{post?.author} 님의 여행이야기</St.Postnickname>
          <St.ImegeWrap>
            <St.ImegeSlide>
              <div className="slider__wrap">
                <div className="slider__img">
                  <div className="slider__inner">
                    {post?.mediaList[0]
                      ? post?.mediaList.map((item, idx) => {
                          return (
                            <div className="slider" key={idx}>
                              <img className="sliderimg" src={item} alt="" />
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
                <div className="slider__btn">
                  <div
                    href="#"
                    className="prev"
                    style={{ background: "url(../img/board/leftarrow.svg)" }}
                  ></div>
                  <div
                    href="#"
                    className="next"
                    style={{ background: "url(../img/board/rightarrow.svg)" }}
                  ></div>
                </div>
                <div className="slider__dot"></div>
              </div>
            </St.ImegeSlide>
            <St.ImegePreview>
              {post &&
                post?.mediaList.map((el, idx) => (
                  <St.PreviewItem
                    className="ImgPreview"
                    key={idx}
                    src={
                      post?.mediaList[idx] ? post?.mediaList[idx] : DefaultImega
                    }
                    alt=""
                    onClick={ImgHandlerTest}
                  />
                ))}
            </St.ImegePreview>
          </St.ImegeWrap>

          <St.BoardcontentWrap>
            <St.BoardContentsbox>
              <St.BoardTitleWrap>
                <St.BoardTitle>{post?.title}</St.BoardTitle>
                <St.TitleButtonWarp>
                  {nickname == post?.author ? (
                    <>
                      <St.ModifyButton onClick={modifyPost}>
                        수정
                      </St.ModifyButton>
                      <St.DeleteButton onClick={DeletePost}>
                        삭제
                      </St.DeleteButton>
                    </>
                  ) : (
                    <St.UserProfile onClick={goProfile}>
                      글쓴이 프로필
                    </St.UserProfile>
                  )}
                </St.TitleButtonWarp>
              </St.BoardTitleWrap>
              <St.UserNameBox>
                <St.BoardCateGory>
                  <St.CateLocal>지역 : {post?.local}</St.CateLocal>
                  <St.CateDetail>도시 : {post?.localdetail}</St.CateDetail>
                </St.BoardCateGory>
                <St.TitleButtonWarpmobile>
                  {nickname == post?.author ? (
                    <>
                      <St.ModifyButton onClick={modifyPost}>
                        수정
                      </St.ModifyButton>
                      <St.DeleteButton onClick={DeletePost}>
                        삭제
                      </St.DeleteButton>
                    </>
                  ) : (
                    <St.UserProfile onClick={goProfile}>
                      글쓴이 프로필
                    </St.UserProfile>
                  )}
                </St.TitleButtonWarpmobile>
              </St.UserNameBox>
              <St.BoardBody>{post?.content}</St.BoardBody>
            </St.BoardContentsbox>
            <St.BoardLike onClick={Boardpostlike}>
              <St.BoardLikeImage
                src={post && heart ? heartsvg : binheartsvg}
                alt=""
              />

              <St.BoardLikeCount>{heartnum}</St.BoardLikeCount>
            </St.BoardLike>
          </St.BoardcontentWrap>

          <St.BoardCommentWrap>
            <St.BoardCommentBox>
              <St.CommentWriteUserBox>
                <St.CommentWriteImg
                  src={commentImg ? commentImg : DefaultCmtImg}
                  alt=""
                />
                <St.CommentWriteUser>{post?.nickName}</St.CommentWriteUser>
              </St.CommentWriteUserBox>
              <St.CommentTextarea
                name=""
                maxLength="200"
                id="comment"
                placeholder="댓글을 작성해 보세요."
                value={comment}
                onKeyUp={(e) => {
                  CheckLength(e);
                  RegexTest(e);
                }}
                onChange={CommentHandler}
              />
              <St.CommentButtonBox>
                <St.CommentCount>{cmtcount}</St.CommentCount>
                <St.CommentCount>/200</St.CommentCount>
                <St.CommentWriteButton onClick={WriteComment}>
                  댓글 등록
                </St.CommentWriteButton>
              </St.CommentButtonBox>
            </St.BoardCommentBox>
            <St.BoardCommentBoxmobile>
              <St.CommentUserboxmobile>
                <St.CommentImgmobile
                  src={commentImg ? commentImg : DefaultCmtImg}
                />
                <St.CommentWriteUser>{post?.nickName}</St.CommentWriteUser>
              </St.CommentUserboxmobile>
              <St.CommentTextarea
                name=""
                maxLength="50"
                id="comment"
                placeholder="댓글을 남겨보세요."
                value={comment}
                onKeyUp={CheckLength}
                onChange={CommentHandler}
              />
              <St.CommentWritebuttonmobile onClick={WriteComment}>
                등록
              </St.CommentWritebuttonmobile>
            </St.BoardCommentBoxmobile>
            {comments &&
              comments?.map((item, idx) => (
                <PostComment
                  key={idx}
                  item={item}
                  idx={idx}
                  id={id}
                  post={post}
                />
              ))}
          </St.BoardCommentWrap>
          {mypostready && <BoardMypost post={post} mypost={mypost} />}
        </St.BoardPostDetailWrap>
      </St.BoardPostDetailContainer>
      <Topbutton />
      <Footer />
    </St.HeaderContainer>
  );
};
export default BoardPostDetail;
