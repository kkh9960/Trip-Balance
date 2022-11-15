import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { __getPostData } from '../../../redux/modules/PostSlice';
import './PostBarStyle.css'

export default function Post() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPostData('1'))
  }, [])
  const postData = useSelector((state)=> state.PostSlice)
  console.log(postData)
  
  
  const AllCategory = () => {
    return (
      <div> </div>
    )
  }
  
  
  return (
    <section>
      <div className='postList'>
        {/* {postData &&
          postData.map((post) => {
          <div
            className='post'
            key={post.id}
            onClick={() => {
              navigate(`/posts/get/${post.id}`)
            }}
          >
            <div className='postCategory'>

              <div className='postBox'>
                <div className='postImage'>
                  <img src={post.img}/>
                </div>
                <div className='postBody'>
                  <div className='postTitle'>{post.title}</div>
                  <div className='postComment'>{post.comment}</div>
                </div>
              </div>
              
              <div className='postBox'>
                <div className='postImage'>
                  <img src={''}/>
                </div>
                <div className='postBody'>
                  <div className='postTitle'>제목</div>
                  <div className='postComment'>내용</div>
                </div>
              </div>
            </div>
            <hr />
          </div>
          
          })} */}
        
        <div>
          <div className='postCategory'>

            <div className='postBox'>
              <div className='postImage'>
                <img src={''}/>
              </div>
              <div className='postBody'>
                <div className='postTitle'>{''}</div>
                <div className='postComment'>{''}</div>
              </div>
            </div>
            
            <div className='postBox'>
              <div className='postImage'>
                <img src={''}/>
              </div>
              <div className='postBody'>
                <div className='postTitle'>제목</div>
                <div className='postComment'>내용</div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  )
}
