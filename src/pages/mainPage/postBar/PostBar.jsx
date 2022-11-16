import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPostData } from "../../../redux/modules/PostSlice";
import "./PostBarStyle.css";

export default function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostData("1"));
  }, []);

  const postData = useSelector((state) => state.PostSlice.data.data);
  console.log(postData);

  // const categoryHandler = () => {
  //   console.log();
  // };

  return (
    <>
      <div className="postCategory">
        {/* <div type="text" onClick={categoryHandler}>
            수도권
          </div> */}
        <ul>
          <li onClick={() => dispatch(__getPostData("1"))}>수도권</li>
          <li onClick={() => dispatch(__getPostData("2"))}>강원/경상</li>
          <li onClick={() => dispatch(__getPostData("3"))}>충청/전라</li>
          <li onClick={() => dispatch(__getPostData("4"))}>제주도</li>
          <li onClick={() => dispatch(__getPostData("5"))}>기타</li>
        </ul>
      </div>
      <div className="postList">
        {postData ? (
          postData.length === 0 ? (
            <div className="error">카테고리에 내용이 없습니다.</div>
          ) : (
            postData.map((post) => (
              <div className="postContainer">
                <div className="post" key={post.id}>
                  <div className="postBox">
                    <img
                      className="postImage"
                      src={post.img}
                      onClick={() => {
                        navigate(`/posts/get/${post.id}`);
                      }}
                    />
                    <div
                      className="postBody"
                      onClick={() => {
                        navigate(`/posts/get/${post.id}`);
                      }}
                    >
                      <div className="postLocal">{post.localdetail}</div>
                      <div className="postTitle">{post.title}</div>
                      <div className="postComment">{post.comment}</div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            ))
          )
        ) : null}
      </div>
    </>
  );
}
