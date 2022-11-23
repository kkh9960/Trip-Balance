import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";

import Card from "./Card";
const initialUrl = `https://dexhome.shop/tb/posts/list/0`;
const fetchUrl = async (url) => {
  const response = await fetch(url);
  // console.log(response);
  return response.json();
};

export const InfiniteTest = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(
    "sw-scroll",
    ({ pageParam = initialUrl }) => fetchUrl(pageParam),

    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  const infiscroll = data?.pages[0]?.data;
  console.log(hasNextPage);
  console.log(data?.pageParams);
  console.log(infiscroll);

  if (isLoading) return <div className="loading">loading</div>;
  if (isError) return <div>Error!{error.toString()}</div>;
  // TODO: get data for InfiniteScroll via React Query
  return (
    <>
      <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
        {infiscroll &&
          infiscroll.map((scroll) => (
            <div key={scroll.postId}>
              <Card title={scroll.title} postId={scroll.postId} />
            </div>
          ))}
      </InfiniteScroll>
      {isFetching && <div className="loading">loading</div>}
    </>
  );
};

// import axios from "axios";
// import { useEffect } from "react";

// import InfiniteScroll from "react-infinite-scroller";
// import { useInView } from "react-intersection-observer";
// import { useInfiniteQuery } from "react-query";

// import Card from "./Card";

// const fetchPostList = async (pageParam) => {
//   const res = await axios.get(
//     `https://dexhome.shop/tb/posts/list?&page=${pageParam}&limit=6`
//   );
//   const { posts, isLast } = res.data;
//   return { posts, nextPage: pageParam + 1, isLast };
// };

// function Posts() {
//   const { ref, inView } = useInView();
//   const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
//     "posts",
//     ({ pageParam = 1 }) => fetchPostList(pageParam),
//     {
//       getNextPageParam: (lastPage) =>
//         !lastPage.isLast ? lastPage.nextPage : undefined,
//     }
//   );

//   useEffect(() => {
//     if (inView) fetchNextPage();
//   }, [inView]);

//   if (status === "loading") return <div>로딩...</div>;
//   if (status === "error") return <div>에러!!</div>;

//   return (
//     <>
//       <div>
//         {data?.pages.map((scroll) => (
//           <div key={scroll.postId}>
//             <Card title={scroll.title} postId={scroll.postId} />
//           </div>
//         ))}
//       </div>
//       {isFetchingNextPage ? <div>로딩...</div> : <div ref={ref}></div>}
//     </>
//   );
// }
// export default Posts;
