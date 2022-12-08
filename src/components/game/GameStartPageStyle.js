import styled from "styled-components";

export const gameStartWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-image: url("../../img/gameCommonImg/backGroundImg.webp");
  background-size: cover;
  @media screen and (max-width: 480px) {
    background-image: url("../../img/gameCommonImg/backGroundImgM.webp");
    background-repeat: no-repeat;
    height: 100vh;
    width: 100vw;
  }
`;

export const gameStartTextWrap = styled.div`
  width: 1326px;
  height: 624.89px;
  margin-top: 162.19px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-top: 5%;
    //margin-top: 105.16px;
  }
`;

export const BalanceGameTITLE = styled.div`
  width: 540px;

  height: 114px;
  background-image: url("../../img/gameCommonImg/BalanceGame.webp");
  background-repeat: no-repeat;
  background-position: center;
  @media (max-width: 480px) {
    background-image: url("../../img/gameCommonImg/balanceGameM.webp");
    width: 299px;
    height: 193.17px;
  }
`;

export const gameStartText = styled.div`
  width: 572px;
  height: 176px;
  padding-top: 25px;
  font-family: "DungGeunMo";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  color: #333333;
  @media (max-width: 480px) {
    width: 96%;
    height: 176px;
    padding-top: 25px;
    font-family: "DungGeunMo";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    color: #333333;
  }
`;

export const gameStartButton = styled.button`
  width: 309.28px;
  height: 35.09px;
  background-image: url("../../img/gameCommonImg/startGame.webp");
  animation: sli 1.9s ease-in-out;
  animation-iteration-count: infinite;
  @keyframes sli {
    0% {
      transform: none;
    }

    25% {
      transform: scale(1.5);
    }

    50% {
      transform: scale(1);
    }

    75% {
      transform: scale(1.3);
    }

    100% {
      transform: none;
    }
  }
  @media (max-width: 480px) {
    margin-top: 28.77px;
    @keyframes sli {
      0% {
        transform: none;
      }

      25% {
        transform: scale(1);
      }

      50% {
        transform: scale(0.7);
      }

      75% {
        transform: scale(0.9);
      }

      100% {
        transform: none;
      }
    }
  }
`;

export const gameStartIcon = styled.div`
  width: 85.51px;
  height: 95.19px;
  background-image: url("../../img/gameCommonImg/startImg.webp");
  margin-top: 54px;
  @media (max-width: 480px) {
    //margin-top: 201.56px;
    margin-top: auto;
    margin-bottom: 18%;
  }
`;
