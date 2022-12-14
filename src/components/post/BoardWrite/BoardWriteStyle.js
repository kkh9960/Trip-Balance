import styled from "styled-components";

export const Countbox = styled.span`
  position: absolute;
  font-size: 25px;
  font-family: "NotoSansKR";
  bottom: 20px;
  right: 20px;
`;

export const Writebox = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.div`
  padding-top: 120px;
  @media screen and (max-width: 480px) {
    padding-top: 80px;
  }
`;

export const Outbtn = styled.button`
  font-size: 16px;
  background-color: #00c1ec;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;
export const Cancelbtn = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #777777;
`;

export const ModalBtnbox = styled.div`
  display: flex;
  gap: 30px;
`;

export const ModalTextbox = styled.div`
  padding: 50px 50px 30px 50px;
  span {
    color: red;
  }
`;

export const ModalCont = styled.div`
  height: 200px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const ModalWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BoardWriteContainer = styled.form`
  width: 95%;
  max-width: 1440px;
  margin: 100px auto;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 480px) {
    width: 95%;
    max-width: 480px;
    margin: 0px auto 50px;
  }
`;
export const BoardContentWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  padding: 5px;
  outline: none;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const BaordWritesection = styled.div`
  width: 100%;
  max-width: 1074px;
  height: auto;
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: url("img/board/imagewrite.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 480px) {
    background: url("img/board/mbwrite.jpg");
    background-position: center center;
    background-size: cover;
  }
`;

export const ImegeSelectBox = styled.div`
  width: 100%;
  max-width: 1074px;
  height: 300px;
  position: relative;
  border: 4px dashed #cdcdcd;
  @media screen and (max-width: 480px) {
    box-sizing: border-box;
    height: 250px;
  }
`;

export const ImegeInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  object-fit: contain;
`;
export const ImegePreviewBox = styled.div`
  width: 100%;
  max-width: 1440px;
  height: auto;
  display: flex;
  padding: 20px 5px;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    box-sizing: border-box;
  }
`;
export const ImegePreviewWrap = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 20px;
  justify-content: center;
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    gap: 5px;
  }
`;
export const ImegePreviewtext = styled.div`
  font-size: 16px;
  color: #b3b3b3;
  margin: 15px 0 0 5px;
`;
export const UploadImegePreview = styled.img`
  width: 110px;
  height: 133px;
  object-fit: cover;
  flex: 1;
  border: 2px solid #b3b3b3;
  border-radius: 4px;
  @media screen and (max-width: 480px) {
    width: 55px;
    height: 70px;
  }
`;
export const UploadImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:first-child::before {
    content: "대표";
    text-align: center;
    line-height: 2;
    width: 114px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    background-color: #00c1ec;
    position: absolute;
    bottom: 4px;
    left: 0;
    border-radius: 4px;
    @media screen and (max-width: 480px) {
      width: 59px;
      height: 20px;
      font-size: 12px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 18%;
  }
`;
export const Imagedelete = styled.div`
  cursor: pointer;
  position: absolute;
  top: -15px;
  right: -4px;
  width: 30px;
  height: 30px;
  border: 1px solid #b3b3b3;
  border-radius: 50%;
  background-image: url(../img/board/imageremove.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    right: -5px;
    top: -10px;
  }
`;

export const BoardWriteTextarea = styled.textarea`
  width: 99%;
  height: 722px;
  outline: none;
  resize: none;
  border: 2px solid #aaaaaa;
  border-radius: 10px;
  font-size: 17px;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 0px;
  }
  @media screen and (max-width: 480px) {
    box-sizing: border-box;
    height: 420px;
  }
`;

export const BoardButtonsection = styled.div`
  width: 100%;
  max-width: 344px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

export const Categorysection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const Categorysectionmobile = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    display: flex;
    margin: 10px auto;
    flex-direction: column;
    gap: 20px;
  }
`;

export const CategorySelect = styled.select`
  appearance: none;
  width: 100%;
  max-width: 344px;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #777777;
  border-radius: 10px;
  border: 2px solid #777777;
  background: url(img/board/category.jpg) no-repeat right 13px center;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: 50px;
    font-size: 18px;
  }
`;

export const PetCheckBox = styled.div`
  width: 100%;
  max-width: 344px;
  height: 60px;
  border: 2px solid #777777;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: 50px;
    font-size: 18px;
    gap: 10px;
  }
`;

export const PetCheck = styled.input`
  width: 60px;
  height: 30px;
  position: relative;
  -webkit-appearance: none;
  background: #c6c6c6;
  border-radius: 15px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  &:checked {
    background: #03a9f4;
  }
  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.1);
    transition: all 0.5s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &:checked::before {
    left: 30px;
  }
`;
export const PetLabel = styled.label`
  font-size: 20px;
  color: #777777;
  @media screen and (max-width: 480px) {
    margin-left: 20px;
  }
`;

export const Buttonsection = styled.div`
  width: 100%;
  height: auto;
  gap: 50px;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const WriteButton = styled.button`
  font-size: 20px;
  color: #fff;
  background-color: #00c1ec;
  width: 344px;
  height: 60px;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
export const Cancelbutton = styled.button`
  font-size: 20px;
  width: 344px;
  height: 60px;
  border-radius: 10px;
  color: #777777;
  border: 2px solid #777777;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
