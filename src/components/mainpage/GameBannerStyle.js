import styled from "styled-components";

export const GameBanner = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  font-size: 30px;
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    font-size: 40px;
    transition: 0.5s;
  }
  @media screen and (max-width: 480px) {
    height: 180px;
  }
`;

export const GamestartBannerImg = styled.img`
  width: 100%;
  height: 100%;
`;

// export const GamestartImg = styled.img`
//   width: 150px;
//   height: 18px;
//   animation: sli 1.9s ease-in-out;
//   animation-iteration-count: infinite;

//   @keyframes sli {
//     0% {
//       transform: none;
//     }

//     25% {
//       transform: scale(2);
//     }

//     50% {
//       transform: scale(1.7);
//     }

//     75% {
//       transform: scale(2.1);
//     }

//     100% {
//       transform: none;
//     }
//     /* 0% {
//       transform: none;
//     }

//     50% {
//       transform: rotateY(180deg);
//     }

//     100% {
//       transform: none;
//     } */
//   }
// `;
