// import InfiniteScroll from "react-infinite-scroller";
// import { useInfiniteQuery } from "react-query";

// import Card from "./Card";
// const initialUrl = `https://dexhome.shop/tb/posts?page=0`;

// const fetchUrl = async (url) => {
//   const response = await fetch(url);
//   // console.log(response);
//   return response.json();
// };

// export const InfiniteTest = () => {
//   const {
//     data,
//     fetchNextPage,
//     hasNextPage,
//     isFetching,
//     isLoading,
//     isError,
//     error,
//   } = useInfiniteQuery(
//     "sw-scroll",
//     ({ pageParam = initialUrl }) => fetchUrl(pageParam),

//     {
//       getNextPageParam: (lastPage) => lastPage.next || undefined,
//     }
//   );

//   const infiscroll = data?.pages[0]?.data;
//   console.log(data);
//   if (isLoading) return <div className="loading">loading</div>;
//   if (isError) return <div>Error!{error.toString()}</div>;
//   // TODO: get data for InfiniteScroll via React Query
//   return (
//     <>
//       <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
//         {infiscroll &&
//           infiscroll.map((scroll) => (
//             <div key={scroll.postId}>
//               <Card title={scroll.title} postId={scroll.postId} />
//             </div>
//           ))}
//       </InfiniteScroll>
//       {isFetching && <div className="loading">loading</div>}
//     </>
//   );
// };

import axios from "axios";
import { useEffect } from "react";

import InfiniteScroll from "react-infinite-scroller";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import Card from "./Card";
const fetchPostList = async (pageParam) => {
  const res = await axios.get(`https://tbtbtb.shop/tb/posts?page=${pageParam}`);
  const data = res.data;
  console.log(res.data.data);
  return { data, nextPage: pageParam + 1 };
};
function Posts() {
  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "posts",

    ({ pageParam = 1 }) => fetchPostList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        !lastPage.isLast ? lastPage.nextPage : undefined,
    }
  );

  const infiscroll = data?.pages;
  console.log(infiscroll);
  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  if (status === "loading") return <div>로딩...</div>;
  if (status === "error") return <div>에러!!</div>;

  return (
    <>
      <div>
        {infiscroll &&
          infiscroll.map((posts) => (
            <div key={posts.postId}>
              <Card title={posts.title} postId={posts.postId} />
            </div>
          ))}
      </div>
      {isFetchingNextPage ? <div>로딩...</div> : <div ref={ref}></div>}
    </>
  );
}
export default Posts;
