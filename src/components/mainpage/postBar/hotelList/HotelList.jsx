import React from "react";
import { useSelector } from "react-redux";
import * as t from "./HotelListStyle";

export default function Post() {
  const cityName = useSelector((state) => state.MapSlice.data?.cnt[0].location);
  const hotelList = useSelector((state) => state.MapSlice.data.hotel);
  return (
    <t.hotelSection>
      <t.hotelContainer>
        <t.hotelText>{cityName.split(" ")[1]} 추천 숙소</t.hotelText>
        <t.hotelList>
          {hotelList &&
            hotelList[0].map((idx) => {
              if (hotelList === undefined) {
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
          <t.hr />
        </t.hotelList>
      </t.hotelContainer>
    </t.hotelSection>
  );
}
