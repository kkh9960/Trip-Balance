import React from "react";
import { useSelector } from "react-redux";
import * as t from "./PostBarStyle";

export default function Post() {
  const data = useSelector((state) => state.MapSlice.data);
  const cityName = useSelector((state) => state.MapSlice.data?.cnt[0].location);
  const hotelList = useSelector((state) => state.MapSlice.data.hotel);
  const blogList = useSelector((state) => state.MapSlice?.data.blog);

  console.log(hotelList);
  return (
    <t.postContainer>
      <t.hotelContainer>
        <t.hotelText>{cityName.split(" ")[0]}추천숙소</t.hotelText>
        <t.hotelList>
          {hotelList &&
            hotelList[0].map((idx) => {
              if (hotelList === undefined) {
                console.log(hotelList);
              } else {
                if (hotelList.length === 0) {
                  return <h1 key={idx.id}>작성한 글이 없습니다.</h1>;
                } else {
                  return (
                    <t.hotelListBox
                      key={idx.id}
                      onClick={() => window.open(idx.url, "_blank")}
                    >
                      <t.hotelImgBox src={idx.img} alt="게시글이미지" />
                      <t.hotelTitle>{idx.title}</t.hotelTitle>
                    </t.hotelListBox>
                  );
                }
              }
            })}
        </t.hotelList>
      </t.hotelContainer>
      <t.blogContainer>
        <t.blogList>
          <t.blogText>{cityName.split(" ")[0]}추천 블로그</t.blogText>
          {blogList &&
            blogList[0].map((idx) => {
              if (blogList.length === 0) {
                return <h1 key={idx.id}>작성한 글이 없습니다.</h1>;
              } else {
                return (
                  <t.blogListBox
                    key={idx.id}
                    onClick={() => window.open(idx.url, "_blank")}
                  >
                    <t.blogImgBox src={idx.thumbnail} alt="게시글이미지" />
                    <t.blogContentsBox>
                      <t.blogTitle>{idx.title}</t.blogTitle>
                      <t.blogContents>{idx.contents}</t.blogContents>
                      <t.blogName>{idx.blogName}</t.blogName>
                    </t.blogContentsBox>
                  </t.blogListBox>
                );
              }
            })}
        </t.blogList>
      </t.blogContainer>
    </t.postContainer>
  );
}
