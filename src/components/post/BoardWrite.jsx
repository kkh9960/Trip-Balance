import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import AWS from "aws-sdk";
import { __postBoard } from "../../redux/modules/BoardSlice";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";
import { useEffect } from "react";

const BoardWrite = () => {
  const form = {
    category1: "",
    category2: "",
    content: "",
    title: "",
  };

  const navigator = useNavigate();
  const dispatch = useDispatch();
  const [FileLink, setFileLink] = useState(null);
  const [ImgPreview, setImgPreview] = useState([]);
  const [Pet, setPet] = useState(0);
  const [contents, setcontents] = useState(form);
  const [Cate, setCate] = useState(0);
  const formoon = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [ModalEdit, setModalEdit] = useState(false);
  const [count, setcount] = useState();
  const [titlecount, settitlecount] = useState(0);

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  // 이미지

  const S3URL = "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com";

  //AWS S3 이미지 업로드 도전
  const onFileUpload = async (e) => {
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "react-image-seongwoo";

    //원본
    const imageFile = e.target.files[0];
    console.log("originalFile instanceof Blob", imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);
    //리사이징
    try {
      const compressedFile = await imageCompression(imageFile, options);
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      );
      // AWS ACCESS KEY를 세팅합니다.

      AWS.config.update({
        accessKeyId: ACCESS_KEY,
        secretAccessKey: SECRET_ACCESS_KEY,
      });

      // 버킷에 맞는 이름과 리전을 설정합니다.
      const myBucket = new AWS.S3({
        params: { Bucket: S3_BUCKET },
        region: REGION,
      });
      const file = compressedFile;

      const fileName = file.name.replaceAll(" ", "");

      // 파일과 파일이름을 넘겨주면 됩니다.
      const params = {
        ACL: "public-read",
        Body: file,
        Bucket: S3_BUCKET,
        Key: fileName,
      };

      if (ImgPreview.length < 10) {
        await myBucket
          .putObject(params)
          .on("httpUploadProgress", (Progress, Response) => {
            console.log(Response.request.httpRequest.path);
            const imgURL = S3URL + Response.request.httpRequest.path;
            setFileLink(imgURL);
            console.log("123", imgURL);
            setImgPreview([...ImgPreview, { imgURL }]);
          })
          .send((err) => {
            if (err) console.log(err);
          });
      } else {
        alert("이미지는 10개까지만 업로드할수있습니다.");
      }
    } catch (error) {
      window.alert(
        "앗, 이미지 업로드에 오류가 있어요! 관리자에게 문의해주세요😿"
      );
    }
  };

  const PetHandler = () => {
    Pet == 1 ? setPet(0) : setPet(1);
  };

  const onChangeDataHandler = (e) => {
    const { name, value } = e.target;
    setcontents({
      ...contents,
      [name]: value,
    });
    setcount(value.length);
    if (value.length >= 1000) {
      alert("내용은 999글자까지만 입력할수있습니다.");
    }
  };

  const BlankRegex = /^\s+|\s+$/g;
  const INJECTIONRegex = /[%=*><]/g;

  const onChangetitleDataHandler = (e) => {
    const { name, value } = e.target;
    setcontents({
      ...contents,
      [name]: value,
    });
    settitlecount(value.length);
  };

  // useEffect(() => {
  //   if ("title" in contents) {
  //     console.log("재미업서");
  //   } else {
  //     console.log("재미잇서");
  //   }
  // }, [contents]);

  const onCategoryHandler = (e) => {
    const { name, value } = e.target;
    setcontents({
      ...contents,
      [name]: value,
    });
  };

  const Categoryopen = (e) => {
    const { name, value } = e.target;
    setCate(value);
    setcontents({
      ...contents,
      [name]: value,
      category2: undefined,
    });
  };

  console.log(contents);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (contents.category2 == "" || contents.category2 == undefined) {
      alert("카테고리를 선택해주세요.");
    } else {
      if (ImgPreview == 0) {
        alert("사진이 없으면 글쓰기가 불가능합니다.");
      } else {
        if (BlankRegex.test(contents.title) || contents.title == "") {
          alert("제목은 공백으로 시작하거나 끝날수 없습니다.");
        } else {
          dispatch(
            __postBoard({
              title: contents?.title,
              content: contents?.content,
              local: contents?.category1,
              localdetail: contents?.category2,
              mediaList: ImgPreview,
              pet: Pet,
            })
          );
        }
      }
    }
  };

  const imagewrite = "img/imagewrite.jpg";
  const noimage = "img/noimage.jpg";

  const imageremove = (id, i, i2) => {
    let target = document.getElementById(id);
    if (target == null) {
    } else {
      setImgPreview(ImgPreview.filter((el) => el.imgURL !== target.src));
      if (i) {
        setFileLink(i);
      } else {
        if (i2) {
          setFileLink(i2);
        } else {
          setFileLink(imagewrite);
        }
      }
    }
  };
  const previewchange = (e) => {
    if (e.target.src.includes("img/noimage.jpg")) {
    } else {
      setFileLink(e.target.src);
    }
  };

  const WriteOut = () => {
    navigator("/post");
  };

  const ModalHandler = () => {
    setModalEdit(!ModalEdit);
  };

  const RegexTest = (e) => {
    if (INJECTIONRegex.test(e.target.value)) {
      alert("보안 : 특수문자(<,>,*,=,%)는 입력이 제한됩니다.");
      e.target.value = e.target.value.replace(/[%=*><]/g, "");
    }
  };

  return (
    <HeaderContainer>
      <BoardWriteContainer onSubmit={onSubmitHandler}>
        <TitleInput
          name="title"
          type="text"
          placeholder="제목을 입력해주세요."
          maxLength="30"
          onChange={onChangetitleDataHandler}
          onKeyUp={RegexTest}
        />
        <BoardContentWrap>
          <BaordWritesection>
            <ImegeSelectBox>
              <ImagePreview src={FileLink} />
              <ImegeInput
                type="file"
                accept="image/*"
                onChange={onFileUpload}
              />
            </ImegeSelectBox>
          </BaordWritesection>

          <BoardButtonsection>
            <Categorysection>
              <CategorySelect
                name="category1"
                id="cate_parent"
                onChange={Categoryopen}
              >
                <option name="category1" value="0">
                  지역을 선택해주세요.
                </option>
                <option name="category1" value="1">
                  수도권
                </option>
                <option name="category1" value="2">
                  경상_강원도
                </option>
                <option name="category1" value="3">
                  충청_전라도
                </option>
                <option name="category1" value="4">
                  제주도
                </option>
                <option name="category1" value="5">
                  기타
                </option>
              </CategorySelect>
              <CategorySelect
                name="category2"
                id="cate_child"
                onChange={onCategoryHandler}
                required
              >
                {Cate == 0 && (
                  <>
                    <option name="category2" value="99">
                      지역을 먼저 선택해주세요.
                    </option>
                  </>
                )}
                {Cate == 1 && (
                  <>
                    <option name="category2" value="0">
                      도시를 선택해주세요.
                    </option>
                    <option name="category2" value="1">
                      서울
                    </option>
                    <option name="category2" value="2">
                      인천
                    </option>
                    <option name="category2" value="3">
                      가평
                    </option>
                    <option name="category2" value="4">
                      용인
                    </option>
                    <option name="category2" value="5">
                      파주
                    </option>
                    <option name="category2" value="33">
                      기타
                    </option>
                  </>
                )}
                {Cate == 2 && (
                  <>
                    <option name="category2" value="0">
                      도시를 선택해주세요.
                    </option>
                    <option name="category2" value="6">
                      속초
                    </option>
                    <option name="category2" value="7">
                      강릉
                    </option>
                    <option name="category2" value="8">
                      춘천
                    </option>
                    <option name="category2" value="9">
                      양양
                    </option>
                    <option name="category2" value="10">
                      평창
                    </option>
                    <option name="category2" value="11">
                      부산
                    </option>
                    <option name="category2" value="12">
                      거제
                    </option>
                    <option name="category2" value="13">
                      통영
                    </option>
                    <option name="category2" value="14">
                      포항
                    </option>
                    <option name="category2" value="15">
                      경주
                    </option>
                    <option name="category2" value="16">
                      안동
                    </option>
                    <option name="category2" value="33">
                      기타
                    </option>
                  </>
                )}
                {Cate == 3 && (
                  <>
                    <option name="category2" value="0">
                      도시를 선택해주세요.
                    </option>
                    <option name="category2" value="17">
                      여수
                    </option>
                    <option name="category2" value="18">
                      목포
                    </option>
                    <option name="category2" value="19">
                      담양
                    </option>
                    <option name="category2" value="20">
                      보성
                    </option>
                    <option name="category2" value="21">
                      해남
                    </option>
                    <option name="category2" value="22">
                      전주
                    </option>
                    <option name="category2" value="23">
                      천안
                    </option>
                    <option name="category2" value="24">
                      태안
                    </option>
                    <option name="category2" value="25">
                      보령
                    </option>
                    <option name="category2" value="26">
                      공주
                    </option>
                    <option name="category2" value="27">
                      단양
                    </option>
                    <option name="category2" value="33">
                      기타
                    </option>
                  </>
                )}
                {Cate == 4 && (
                  <>
                    <option name="category2" value="0">
                      도시를 선택해주세요.
                    </option>
                    <option name="category2" value="32">
                      서귀포
                    </option>
                    <option name="category2" value="33">
                      기타
                    </option>
                  </>
                )}
                {Cate == 5 && (
                  <>
                    <option name="category2" value="0">
                      도시를 선택해주세요.
                    </option>
                    <option name="category2" value="28">
                      대구
                    </option>
                    <option name="category2" value="29">
                      대전
                    </option>
                    <option name="category2" value="30">
                      광주
                    </option>
                    <option name="category2" value="31">
                      울산
                    </option>
                    <option name="category2" value="33">
                      기타
                    </option>
                  </>
                )}
              </CategorySelect>
              <PetCheckBox>
                <PetLabel htmlFor="pet">반려동물동반여부</PetLabel>
                <PetCheck type="checkbox" id="pet" onChange={PetHandler} />
              </PetCheckBox>
            </Categorysection>
          </BoardButtonsection>
        </BoardContentWrap>
        <ImegePreviewBox>
          <ImegePreviewWrap>
            {formoon.map((e, i) => (
              <UploadImageBox key={i}>
                <UploadImegePreview
                  key={i}
                  id={ImgPreview[i]?.imgURL}
                  src={ImgPreview[i]?.imgURL ? ImgPreview[i]?.imgURL : noimage}
                  alt=""
                  onClick={previewchange}
                />
                <Imagedelete
                  onClick={() =>
                    imageremove(
                      ImgPreview[i]?.imgURL,
                      ImgPreview[i - 1]?.imgURL,
                      ImgPreview[i + 1]?.imgURL
                    )
                  }
                ></Imagedelete>
              </UploadImageBox>
            ))}
          </ImegePreviewWrap>
          <ImegePreviewtext>
            이미지는 총 10개까지 첨부 할 수 있으며, 맨 처음 이미지가 대표
            이미지로 설정됩니다.
          </ImegePreviewtext>
        </ImegePreviewBox>
        <Categorysectionmobile>
          <CategorySelect
            name="category1"
            id="cate_parent"
            onChange={Categoryopen}
          >
            <option name="category1" value="0">
              지역을 선택해주세요.
            </option>
            <option name="category1" value="1">
              수도권
            </option>
            <option name="category1" value="2">
              경상_강원도
            </option>
            <option name="category1" value="3">
              충청_전라도
            </option>
            <option name="category1" value="4">
              제주도
            </option>
            <option name="category1" value="5">
              기타
            </option>
          </CategorySelect>
          <CategorySelect
            name="category2"
            id="cate_child"
            onChange={onCategoryHandler}
            required
          >
            {Cate == 0 && (
              <>
                <option name="category2" value="99">
                  지역을 먼저 선택해주세요.
                </option>
              </>
            )}
            {Cate == 1 && (
              <>
                <option name="category2" value="0">
                  도시를 선택해주세요.
                </option>
                <option name="category2" value="1">
                  서울
                </option>
                <option name="category2" value="2">
                  인천
                </option>
                <option name="category2" value="3">
                  가평
                </option>
                <option name="category2" value="4">
                  용인
                </option>
                <option name="category2" value="5">
                  파주
                </option>
                <option name="category2" value="33">
                  기타
                </option>
              </>
            )}
            {Cate == 2 && (
              <>
                <option name="category2" value="0">
                  도시를 선택해주세요.
                </option>
                <option name="category2" value="6">
                  속초
                </option>
                <option name="category2" value="7">
                  강릉
                </option>
                <option name="category2" value="8">
                  춘천
                </option>
                <option name="category2" value="9">
                  양양
                </option>
                <option name="category2" value="10">
                  평창
                </option>
                <option name="category2" value="11">
                  부산
                </option>
                <option name="category2" value="12">
                  거제
                </option>
                <option name="category2" value="13">
                  통영
                </option>
                <option name="category2" value="14">
                  포항
                </option>
                <option name="category2" value="15">
                  경주
                </option>
                <option name="category2" value="16">
                  안동
                </option>
                <option name="category2" value="33">
                  기타
                </option>
              </>
            )}
            {Cate == 3 && (
              <>
                <option name="category2" value="0">
                  도시를 선택해주세요.
                </option>
                <option name="category2" value="17">
                  여수
                </option>
                <option name="category2" value="18">
                  목포
                </option>
                <option name="category2" value="19">
                  담양
                </option>
                <option name="category2" value="20">
                  보성
                </option>
                <option name="category2" value="21">
                  해남
                </option>
                <option name="category2" value="22">
                  전주
                </option>
                <option name="category2" value="23">
                  천안
                </option>
                <option name="category2" value="24">
                  태안
                </option>
                <option name="category2" value="25">
                  보령
                </option>
                <option name="category2" value="26">
                  공주
                </option>
                <option name="category2" value="27">
                  단양
                </option>
                <option name="category2" value="33">
                  기타
                </option>
              </>
            )}
            {Cate == 4 && (
              <>
                <option name="category2" value="0">
                  도시를 선택해주세요.
                </option>
                <option name="category2" value="32">
                  서귀포
                </option>
                <option name="category2" value="33">
                  기타
                </option>
              </>
            )}
            {Cate == 5 && (
              <>
                <option name="category2" value="0">
                  도시를 선택해주세요.
                </option>
                <option name="category2" value="28">
                  대구
                </option>
                <option name="category2" value="29">
                  대전
                </option>
                <option name="category2" value="30">
                  광주
                </option>
                <option name="category2" value="31">
                  울산
                </option>
                <option name="category2" value="33">
                  기타
                </option>
              </>
            )}
          </CategorySelect>
          <PetCheckBox>
            <PetLabel htmlFor="pet">반려동물동반여부</PetLabel>
            <PetCheck type="checkbox" id="pet" onChange={PetHandler} />
          </PetCheckBox>
        </Categorysectionmobile>
        <Writebox>
          <BoardWriteTextarea
            name="content"
            id=""
            cols="30"
            rows="10"
            placeholder="내용을 입력해 주세요 최대 999글자까지 입력됩니다."
            maxLength="999"
            required
            onChange={onChangeDataHandler}
            onKeyUp={RegexTest}
          />
          <Countbox>{count} / 999</Countbox>
        </Writebox>

        <Buttonsection>
          <WriteButton>등록</WriteButton>
          <Cancelbutton type="button" onClick={ModalHandler}>
            취소
          </Cancelbutton>
        </Buttonsection>
      </BoardWriteContainer>

      {ModalEdit ? (
        <Modal onClick={ModalHandler}>
          <ModalWrap>
            <ModalCont
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <ModalTextbox>
                <div>글 작성을 그만두고 나가시겠습니까?</div>
                <span>작성 내용은 저장되지 않습니다.</span>
              </ModalTextbox>
              <ModalBtnbox>
                <Outbtn onClick={WriteOut}>나가기</Outbtn>
                <Cancelbtn onClick={ModalHandler}>취소</Cancelbtn>
              </ModalBtnbox>
            </ModalCont>
          </ModalWrap>
        </Modal>
      ) : null}
    </HeaderContainer>
  );
};

export default BoardWrite;

const Countbox = styled.span`
  position: absolute;
  font-size: 25px;
  font-family: "NotoSansKR";
  bottom: 20px;
  right: 20px;
`;

const Writebox = styled.div`
  position: relative;
`;

const HeaderContainer = styled.div`
  padding-top: 120px;
  @media screen and (max-width: 480px) {
    padding-top: 80px;
  }
`;

const Outbtn = styled.button`
  font-size: 16px;
  background-color: #00c1ec;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;
const Cancelbtn = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #777777;
`;

const ModalBtnbox = styled.div`
  display: flex;
  gap: 30px;
`;

const ModalTextbox = styled.div`
  padding: 50px 50px 30px 50px;
  span {
    color: red;
  }
`;

const ModalCont = styled.div`
  height: 200px;
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const ModalWrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BoardWriteContainer = styled.form`
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
const BoardContentWrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const TitleInput = styled.input`
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

const BaordWritesection = styled.div`
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

const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  background: url("img/imagewrite.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 480px) {
    background: url("img/mbwrite.jpg");
    background-position: center center;
    background-size: cover;
  }
`;

const ImegeSelectBox = styled.div`
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

const ImegeInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
  object-fit: contain;
`;
const ImegePreviewBox = styled.div`
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
const ImegePreviewWrap = styled.div`
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
const ImegePreviewtext = styled.div`
  font-size: 16px;
  color: #b3b3b3;
  margin: 15px 0 0 5px;
`;
const UploadImegePreview = styled.img`
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
const UploadImageBox = styled.div`
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
const Imagedelete = styled.div`
  cursor: pointer;
  position: absolute;
  top: -15px;
  right: -3px;
  width: 30px;
  height: 30px;
  border: 1px solid #b3b3b3;
  border-radius: 50%;
  background-image: url(img/imageremove.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    right: 3px;
    top: -10px;
  }
`;

const BoardWriteTextarea = styled.textarea`
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

const BoardButtonsection = styled.div`
  width: 100%;
  max-width: 344px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Categorysection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const Categorysectionmobile = styled.div`
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

const CategorySelect = styled.select`
  appearance: none;
  width: 100%;
  max-width: 344px;
  height: 60px;
  text-align: center;
  font-size: 20px;
  color: #777777;
  border-radius: 10px;
  border: 2px solid #777777;
  background: url(img/category.jpg) no-repeat right 13px center;
  @media screen and (max-width: 480px) {
    max-width: 100%;
    height: 50px;
    font-size: 18px;
  }
`;

const PetCheckBox = styled.div`
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

const PetCheck = styled.input`
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
const PetLabel = styled.label`
  font-size: 20px;
  color: #777777;
  @media screen and (max-width: 480px) {
    margin-left: 20px;
  }
`;

const Buttonsection = styled.div`
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
const WriteButton = styled.button`
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
const Cancelbutton = styled.button`
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
