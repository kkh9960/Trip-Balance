import React from "react";
import * as g from "./GameResultPageStyle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __GameResultInfoGet,
  __GameResultIHotelGet,
  __GameResultIBlogGet,
} from "../../redux/modules/GameResultSlice";

export default function GameResultPage() {
  const id = useParams();
  const dispatch = useDispatch();

  const resultId = id.aa;
  const localId = id.id;

  useEffect(() => {
    dispatch(__GameResultInfoGet(resultId));
  }, [id]);
  useEffect(() => {
    dispatch(__GameResultIHotelGet(resultId));
  }, [id]);

  const game = useSelector((state) => state.gameResult);
  const resultLocal =
    game.data.data.trip === null || undefined
      ? undefined
      : game?.data?.data?.trip;
  const gameHotel = useSelector((state) => state.gameResult?.hotel?.data);
  const blog = useSelector((state) => state.gameResult?.blog?.data)?.slice(
    0,
    4
  );

  useEffect(() => {
    if (resultLocal === null || undefined) {
    } else {
      dispatch(__GameResultIBlogGet(resultLocal));
    }
  }, [resultLocal]);

  const resultImg = `../../img/resultImg/${localId === null ? (32) : (localId)}.webp`


  return (

    <g.top>
      <g.localImgBox>
        <g.localImg src={resultImg} />
        <g.localText>
          {game.data.data.trip == "" ? "로딩중입니다" : game.data.data.trip}
        </g.localText>
        <g.localTextContent>
          {game.data.data.tripcontent == ""
            ? "로딩중입니다"
            : game.data.data.tripcontent}
        </g.localTextContent>
      </g.localImgBox>

      <g.resultImgBox>

        <g.bigName>추천 숙소</g.bigName>
        <g.hotelWrap>
          {gameHotel &&
            gameHotel.map((hotel) => (
              <g.hotelInfo key={hotel.id}>
                <div>
                  <a href={hotel.url && hotel.url} target="_blank">

                    <g.hotelImg alt="hotel img" src={hotel.img && hotel.img}></g.hotelImg>

                  </a>
                </div>
                <g.hotelName>{hotel.title && hotel.title}</g.hotelName>
              </g.hotelInfo>
            ))}
        </g.hotelWrap>
      </g.resultImgBox>
      <g.resultImgBox>
      <g.blogName>추천 블로그</g.blogName>
      <g.hotelWrap>
        {blog &&
          blog.map((blog) => (
            <g.hotelInfo key={blog.id}>
              <div>
                <a href={blog.url && blog.url} target="_blank">

                  <g.hotelImg alt="blog img"

                    src={blog.thumbnail && blog.thumbnail}
                  ></g.hotelImg>
                </a>
              </div>
              <g.hotelName>{blog.title && blog.title}</g.hotelName>
            </g.hotelInfo>
          ))}
      </g.hotelWrap>
      

      </g.resultImgBox> 
    </g.top>
    

  );
}
