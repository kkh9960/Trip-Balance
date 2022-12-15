import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
import * as t from "./Topbuttonstyle";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const topgo = "/img/Topbutton/topgo.webp";
  const topwrite = "/img/Topbutton/topwrite.webp";
  const topgame = "/img/Topbutton/topgame.webp";
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
          <t.ScrollContainer>
            <t.Bgimg
              src={topgame}
              alt="icon"
              onClick={() => {
                navigate(`/start`);
              }}
            />

            {email ? (
              <t.Writeimg
                src={topwrite}
                alt="icon"
                onClick={() => {
                  navigate(`/write`);
                }}
              />
            ) : (
              <t.Writeimg src={topwrite} alt="icon" onClick={goLogin} />
            )}

            <t.Topimg src={topgo} alt="icon" onClick={scrollToTop} />
            <t.MobileButtonWrap>
              <t.MobileBtnbox>
                <t.MobileBg
                  src={topgame}
                  alt="icon"
                  onClick={() => {
                    navigate(`/start`);
                  }}
                />
                {email ? (
                  <t.MobileWrite
                    src={topwrite}
                    alt="icon"
                    onClick={() => {
                      navigate(`/write`);
                    }}
                  />
                ) : (
                  <t.MobileWrite src={topwrite} alt="icon" onClick={goLogin} />
                )}
                <t.MobileTop src={topgo} alt="icon" onClick={scrollToTop} />
              </t.MobileBtnbox>
            </t.MobileButtonWrap>
          </t.ScrollContainer>
        )
      )}
    </>
  );
};

export default TopButton;
