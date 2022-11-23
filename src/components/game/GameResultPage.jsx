import React from 'react'
import * as g from './GameResultPageStyle'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __GameResultInfoGet, __GameResultIHotelGet, __GameResultIBlogGet } from '../../redux/modules/GameResultSlice';

export default function GameResultPage() {
  const id = useParams();
  const dispatch = useDispatch();
  
  const resultId = id.aa
  const localId = id.id
  
  useEffect(() => {
    dispatch(__GameResultInfoGet(resultId));
  }, [id]);
  useEffect(() => {
    dispatch(__GameResultIHotelGet(resultId));
  }, [id]);

  const game = useSelector((state) => state.gameResult)
  const resultLocal = (game.data.data === null || undefined ? (undefined) : game?.data?.data)
  const gameHotel = useSelector((state) => state.gameResult?.hotel?.data)
  const blog = useSelector((state) => state.gameResult?.blog?.data)?.slice(5,9); 

  useEffect(() => {
    if (resultLocal === null || undefined) {
    console.log("fail")
    } else {
      dispatch(__GameResultIBlogGet(resultLocal));
    } 
  }, [resultLocal]); 

  const resultImg = `../../img/resultImg/${localId === null ? (32) : (localId)}.jpg`

  return (
    <div>
      <div>
        <g.localImg src={resultImg}/>
      </div>
      <g.localText>
        {game.data.data =="" ? ("로딩중입니다") : (game.data.data)}
      </g.localText>
      <g.bigName>추천 숙소</g.bigName>
        <g.hotelWrap>
          {gameHotel && gameHotel.map((hotel) => (
            <g.hotelInfo key={hotel.id}>
            <div>
              <a href={hotel.url && hotel.url}>
              <g.hotelImg src={hotel.img && hotel.img}></g.hotelImg>
              </a>
            </div>
            <g.hotelName>
              {hotel.title && hotel.title}
            </g.hotelName>
        </g.hotelInfo>
        ))}
      </g.hotelWrap>
      <g.bigName>추천 블로그</g.bigName>
      <g.hotelWrap>
        {blog && blog.map((blog) => (
            <g.hotelInfo key={blog.id}>
            <div>
              <a href={blog.url && blog.url}>
              <g.hotelImg src={blog.thumbnail && blog.thumbnail}></g.hotelImg>
              </a>
            </div>
            <g.hotelName>
              {blog.title && blog.title}
            </g.hotelName>
          </g.hotelInfo>
          ))}
      </g.hotelWrap>
      </div>
  )
}