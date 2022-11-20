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
  const gameHotel = useSelector((state) => state.gameResult)
  const blog = useSelector((state) => state.gameResult)
  let blogTitle1 = blog.blog?.[0].title.replace('<b>', '').replace('</b>', '');
  let blogTitle2 = blog.blog?.[1].title.replace('<b>', '').replace('</b>', '');
  let blogTitle3 = blog.blog?.[2].title.replace('<b>', '').replace('</b>', '');
  let blogTitle4 = blog.blog?.[3].title.replace('<b>', '').replace('</b>', '');

  // for (let i = 0; i <= blog?.blog?.length; i++) {
  //   let blogTitle = blog.blog?.[i].title.replace('<b>', '').replace('</b>', '');
  //   console.log(blogTitle)
  // }

 
  useEffect(() => {
    if (resultLocal === null || undefined) {
    console.log("fail")
    } else {
      console.log(resultLocal)
      dispatch(__GameResultIBlogGet(resultLocal));
    } 
  }, [resultLocal]); 

  console.log(localId)
  const resultImg = `../../img/resultImg/${localId === null ? (32) : (localId)}.jpg`
  const imgFind = `../../img/resultImg/59.jpg`

  return (
    <div>
      <div>
        <g.localImg src={resultImg}/>
      </div>
      <g.localText>
        {game.data.data =="" ? ("로딩중입니다") : (game.data.data)}
      </g.localText>
      <g.bigName>추천 블로그</g.bigName>
      <g.hotelWrap>
        <g.hotelInfo>
          <div>
            <a href={blog.blog?.[0].url && blog.blog?.[0].url}>
            <g.hotelImg src={blog.blog?.[0]?.thumbnail && blog.blog?.[0]?.thumbnail}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {blogTitle1 && blogTitle1}
          </g.hotelName>
        </g.hotelInfo>
        <g.hotelInfo>
          <div>
            <a href={blog.blog?.[1].url && blog.blog?.[1].url}>
            <g.hotelImg src={blog.blog?.[1]?.thumbnail && blog.blog?.[1]?.thumbnail}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {blogTitle2 && blogTitle2}
          </g.hotelName>
        </g.hotelInfo>
        <g.hotelInfo>
          <div>
            <a href={blog.blog?.[2].url && blog.blog?.[2].url}>
            <g.hotelImg src={blog.blog?.[2]?.thumbnail && blog.blog?.[2]?.thumbnail}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {blogTitle3 && blogTitle3}
          </g.hotelName>
        </g.hotelInfo>
        <g.hotelInfo>
          <div>
            <a href={blog.blog?.[3].url && blog.blog?.[3].url}>
            <g.hotelImg src={blog.blog?.[3]?.thumbnail && blog.blog?.[3]?.thumbnail}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {blogTitle4 && blogTitle4}
          </g.hotelName>
        </g.hotelInfo>
      </g.hotelWrap>
      <g.bigName>추천 숙소</g.bigName>
      <g.hotelWrap>
        <g.hotelInfo>
          <div>
            <a href={gameHotel.hotel?.data[0]?.url && gameHotel.hotel?.data[0]?.url}>
            <g.hotelImg src={gameHotel.hotel?.data[0]?.img && gameHotel.hotel?.data[0]?.img}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {gameHotel.hotel?.data[0]?.title && gameHotel.hotel?.data[0]?.title}
          </g.hotelName>
        </g.hotelInfo>
        <g.hotelInfo>
          <div>
            <a href={gameHotel.hotel?.data[1]?.url && gameHotel.hotel?.data[1]?.url}>
            <g.hotelImg src={gameHotel.hotel?.data[1]?.img && gameHotel.hotel?.data[1]?.img}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {gameHotel.hotel?.data[1]?.title && gameHotel.hotel?.data[1]?.title}
          </g.hotelName>
        </g.hotelInfo>
        <g.hotelInfo>
          <div>
            <a href={gameHotel.hotel?.data[2]?.url && gameHotel.hotel?.data[2]?.url}>
            <g.hotelImg src={gameHotel.hotel?.data[2]?.img && gameHotel.hotel?.data[2]?.img}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {gameHotel.hotel?.data[2]?.title && gameHotel.hotel?.data[2]?.title}
          </g.hotelName>
        </g.hotelInfo>
        <g.hotelInfo>
          <div>
            <a href={gameHotel.hotel?.data[3]?.url && gameHotel.hotel?.data[3]?.url}>
            <g.hotelImg src={gameHotel.hotel?.data[3]?.img && gameHotel.hotel?.data[3]?.img}></g.hotelImg>
            </a>
          </div>
          <g.hotelName>
            {gameHotel.hotel?.data[3]?.title && gameHotel.hotel?.data[3]?.title}
          </g.hotelName>
        </g.hotelInfo>
      </g.hotelWrap>
      </div>
  )
}