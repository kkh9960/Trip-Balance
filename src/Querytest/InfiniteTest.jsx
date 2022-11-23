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
  console.log(infiscroll);
  console.log(data?.pageParams);
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
