import React from "react";
import { useSelector } from "react-redux";
import * as t from "./BlogListStyle";

export default function Post() {
  const cityName = useSelector((state) => state.MapSlice.data?.cnt[0].location);
  const blogList = useSelector((state) => state.MapSlice?.data.blog);
  return (
    <t.blogSection>
      <t.blogContainer>
        <t.blogText>{cityName.split(" ")[1]} 여행 추천 블로그</t.blogText>
        <t.blogList>
          {blogList &&
            blogList.map((idx) => {
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
                      <t.blogName>{idx.blogName}</t.blogName>
                      <t.blogTitle>{idx.title}</t.blogTitle>
                      <t.blogContents>{idx.contents}</t.blogContents>
                    </t.blogContentsBox>
                  </t.blogListBox>
                );
              }
            })}
            <t.hr1/>
            <t.hr2/>
        </t.blogList>
      </t.blogContainer>
    </t.blogSection>
  );
}
