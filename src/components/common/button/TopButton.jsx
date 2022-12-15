import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../login/LoginPage";
import * as t  from "./Topbuttonstyle"
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
          <t.ScrollContainer>
            <t.Bgimg
              src="../../img/topgame.webp"
              onClick={() => {
                navigate(`/start`);
              }}
            />

            {email ? (
              <t.Writeimg
                src="../../img/topwrite.webp"
                onClick={() => {
                  navigate(`/write`);
                }}
              />
            ) : (
              <t.Writeimg src="../../img/topwrite.webp" onClick={goLogin} />
            )}

            <t.Topimg src="../../img/topgo.webp" onClick={scrollToTop} />
            <t.MobileButtonWrap>
              <t.MobileBtnbox>
                <t.MobileBg
                  src="../../img/topgame.webp"
                  onClick={() => {
                    navigate(`/start`);
                  }}
                />
                {email ? (
                  <t.MobileWrite
                    src="../../img/topwrite.webp"
                    onClick={() => {
                      navigate(`/write`);
                    }}
                  />
                ) : (
                  <t.MobileWrite
                    src="../../img/topwrite.webp"
                    onClick={goLogin}
                  />
                )}
                <t.MobileTop src="../../img/topgo.webp" onClick={scrollToTop} />
              </t.MobileBtnbox>
            </t.MobileButtonWrap>
          </t.ScrollContainer>
        )
      )}
    </>
  );
};

export default TopButton;

