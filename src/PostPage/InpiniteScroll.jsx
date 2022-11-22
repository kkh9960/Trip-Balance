// // import React, { useState, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import Cardwrap from "../PostPage/Cardwrap";
// // import useIntersect from "../hooks/useIntersect";
// // import instance from "../lib/instance";
// // import { __getBoard } from "../redux/modules/BoardSlice";
// // //////////////////////////////////////////바뀔거
// // const fakeFetch = (delay = 1000) =>
// //   new Promise((res) => setTimeout(res, delay));
// // /* 리스트 아이템 */

// // function InpiniteScroll() {
// //   const dispatch = useDispatch();
// //   /* 아이템 개수와 현재 로딩 상태 */
// //   const data = useSelector((state) => state.BoardSlice.posts);
// //   const [list, setList] = useState(data.slice(0, 20));

// //   ///* fake 비동기 아이템 로드 */

// //   const fetchItems = async () => {
// //     setState((prev) => ({ ...prev, isLoading: true }));
// //     await fakeFetch();
// //     dispatch(__getBoard());

// //     setState((prev) => ({
// //       data: prev.data + 13,
// //       isLoading: false,
// //     }));
// //   };

// //   /* 초기 아이템 로딩 */
// //   useEffect(() => {
// //     fetchItems();
// //   }, []);
// //   ///* 옵저버 등록 */
// //   const [_, setRef] = useIntersect(async (entry, observer) => {
// //     observer.unobserve(entry.target);
// //     // await dispatch(__getBoard());
// //     observer.observe(entry.target);
// //   }, {});

// //   //
// //   return <div className="App">asdas</div>;
// // }

// // export default InpiniteScroll;

// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// import useIntersect from "../hooks/useIntersect";
// import instance from "../lib/instance";
// /////////////////////////////////////////////////////////////////기존거
// const fakeFetch = (delay = 1000) =>
//   new Promise((res) => setTimeout(res, delay));
// /* 리스트 아이템 */
// export const ListItem = ({ number }) => (
//   <div className="ListItem">
//     <span>{number}</span>
//   </div>
// );

// function InpiniteScroll() {
//   /* 아이템 개수와 현재 로딩 상태 */
//   const [state, setState] = useState({ itemCount: 0, isLoading: false });
//   /* fake 비동기 아이템 로드 */
//   const fetchItems = async () => {
//     setState((prev) => ({ ...prev, isLoading: true }));
//     await fakeFetch();

//     setState((prev) => ({
//       itemCount: prev.itemCount + 13,
//       isLoading: false,
//     }));
//   };
//   console.log(fetchItems);
//   //   const posts = useSelector((state) => state.BoardSlice.posts);
//   //
//   /* 초기 아이템 로딩 */
//   useEffect(() => {
//     fetchItems();
//   }, []);
//   ///* 옵저버 등록 */
//   const [_, setRef] = useIntersect(async (entry, observer) => {
//     observer.unobserve(entry.target);
//     await fetchItems();
//     observer.observe(entry.target);
//   }, {});
//   const { itemCount, isLoading } = state;
//   if (!itemCount) return null;
//   //
//   return (
//     <div className="App">
//       {[...Array(itemCount)].map((_, i) => {
//         return <ListItem key={i} number={i} />;
//       })}
//       <div ref={setRef} className="Loading">
//         {isLoading && "Loading..."}
//       </div>
//     </div>
//   );
// }

// export default InpiniteScroll;
