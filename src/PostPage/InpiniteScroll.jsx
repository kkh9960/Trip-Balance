// import React, { useState, useEffect, useRef, useCallback } from "react";
// import CardWrap from "./Cardwrap";
// // ...

// // data 배열을 받아 옵니다.
// function InpiniteScroll({ data }) {
//   const [list, setList] = useState(data.slice(0, 20));
//   const [isScroll, setIsScroll] = useState(false);
//   const loadRef = useRef(null);
//   const observerRef = useRef(null);
//   console.log("받아오나?", data);
//   const onIntersect = useCallback(
//     async (entry, observer) => {
//       if (entry[0].isIntersecting) {
//         observer.unobserve(entry[0].target);
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         setList((list) =>
//           list.concat(data.slice(list.length, list.length + 20))
//         );
//         observer.observe(entry[0].target);
//       }
//     },
//     [data]
//   );

//   useEffect(() => {
//     if (loadRef.current && list.length !== data.length) {
//       setIsScroll(true);
//       observerRef.current = new IntersectionObserver(onIntersect, {
//         threshold: 0.5,
//       });
//       if (isScroll) {
//         observerRef.current.observe(loadRef.current);
//       }
//     }
//     return () => {
//       setIsScroll(false);
//       observerRef.current && observerRef.current.disconnect();
//     };
//   }, [list, data, onIntersect]);

//   return (
//     <>
//       {data?.map((element) => {
//         return <CardWrap key={element.postId} element={element} />;
//       })}
//       <div ref={loadRef}>{isScroll && <div>로딩..옵저버...</div>}</div>
//     </>
//   );
// }

// export default InpiniteScroll;

// // const Load = styled.div`
// //   ${({ theme }) => theme.common.flexRow};
// //   width: 100%;
// //   background-color: ${({ theme }) => theme.colors.white};
// // `;
// // const InfiniteLoading = styled(ReactLoading)`
// //   width: 3rem;
// //   height: 3rem;
// //   z-index: 999;
// // `;
