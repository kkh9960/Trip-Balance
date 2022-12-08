import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "../../login/LoginPage";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  const email = sessionStorage.getItem("email");
  const navigate = useNavigate();
  const goLogin = () => {
    alert("로그인이 필요합니다!");
    setModal(!modal);
  };

  const [modal, setModal] = useState(false);

  return (
    <>
      {modal ? (
        <LoginPage />
      ) : (
        showButton && (
          <ScrollContainer>
            <Bgimg
              src="../../img/bgbtn.webp"
              onClick={() => {
                navigate(`/start`);
              }}
            />

            {email ? (
              <Write
                src="../../img/writebtn.webp"
                onClick={() => {
                  navigate(`/write`);
                }}
              />
            ) : (
              <Write src="../../img/writebtn.webp" onClick={goLogin} />
            )}

            <Top src="../../img/topbtn.webp" onClick={scrollToTop} />
          </ScrollContainer>
        )
      )}
    </>
  );
};

export default TopButton;

const Bgimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`;

const Writeimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`;
const Topimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  cursor: pointer;
`;

const ScrollContainer = styled.div`
  position: fixed;
  right: 3%;
  bottom: 10%;
  z-index: 1;

  width: 80px;
  height: 150px;
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    right: 0%;
    align-items: center;
    justify-content: center;
    bottom: -20px;
    display: none;
  }
`;
const Top = styled.button`
  margin-top: 7px;
  font-weight: bold;
  font-size: 15px;
  height: 70px;
  width: 70px;
  padding: 15px 10px;
  background-color: #d9d9d9;
  color: black;
  border: 1px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  :hover {
    color: rgb(142, 26, 26);
  }
  @media screen and (max-width: 480px) {
    border-radius: 10px;
    width: 120px;
    background-color: white;
  }
`;
const Write = styled.button`
  border: 1px solid red;
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: #d9d9d9;
  color: black;
  border: 1px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  height: 70px;
  margin-top: 8px;
  width: 70px;
  cursor: pointer;
  :hover {
    color: rgb(142, 26, 26);
  }
  @media screen and (max-width: 480px) {
    border-radius: 10px;
    width: 120px;
    background-color: white;
  }
`;
const Balance = styled.button`
  border: 1px solid red;
  font-weight: bold;
  font-size: 15px;
  padding: 15px 10px;
  background-color: #d9d9d9;
  color: black;
  border: 1px solid rgb(210, 204, 193);
  border-radius: 50%;
  outline: none;
  height: 81px;
  margin-top: 8px;
  width: 81px;
  cursor: pointer;
  :hover {
    color: rgb(142, 26, 26);
  }
  @media screen and (max-width: 480px) {
    border-radius: 10px;
    width: 120px;
    background-color: white;
  }
`;
