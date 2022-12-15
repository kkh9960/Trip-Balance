import React, { useEffect, useState } from "react";
import * as St from "./BoardPostModifyStyle";
import { useDispatch, useSelector } from "react-redux";
import AWS from "aws-sdk";
import { useParams } from "react-router-dom";
import {
  __getBoardDetail,
  __modifyBoard,
} from "../../../redux/modules/BoardSlice";
import imageCompression from "browser-image-compression";

const BoardPostModify = () => {
  const dispatch = useDispatch();
  const [FileLink, setFileLink] = useState(null);
  const [ImgPreview, setImgPreview] = useState([]);
  const [Pet, setPet] = useState(0);
  const [contents, setcontents] = useState();
  const [Cate, setCate] = useState("0");
  const [Category, setCategory] = useState();
  const [Category2, setCategory2] = useState();
  const formoon = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const id = useParams();
  const mediaList = useSelector((state) => state.BoardSlice.post?.mediaList);
  const post = useSelector((state) => state.BoardSlice.post);
  const isLoading = useSelector((state) => state.BoardSlice.isLoading);
  const [loading, setloading] = useState(true);
  const [ModalEdit, setModalEdit] = useState(false);
  const imagewrite = "../img/board/imagewrite.jpg";
  const noimage = "../img/board/noimage.jpg";

  let localint = "";
  let localdetailint = "";

  //지역 숫자변환
  switch (post?.local) {
    case "수도권":
      localint = 1;
      break;
    case "경상_강원도":
      localint = 2;
      break;
    case "충청_전라도":
      localint = 3;
      break;
    case "제주도":
      localint = 4;
      break;
    case "기타":
      localint = 5;
      break;
    default:
      localint = 0;
  }
  //지역2 숫자변환
  switch (post?.localdetail) {
    case "서울":
      localdetailint = 1;
      break;
    case "인천":
      localdetailint = 2;
      break;
    case "가평":
      localdetailint = 3;
      break;
    case "용인":
      localdetailint = 4;
      break;
    case "파주":
      localdetailint = 5;
      break;
    case "속초":
      localdetailint = 6;
      break;
    case "강릉":
      localdetailint = 7;
      break;
    case "춘천":
      localdetailint = 8;
      break;
    case "양양":
      localdetailint = 9;
      break;
    case "평창":
      localdetailint = 10;
      break;
    case "부산":
      localdetailint = 11;
      break;
    case "거제":
      localdetailint = 12;
      break;
    case "통영":
      localdetailint = 13;
      break;
    case "포항":
      localdetailint = 14;
      break;
    case "경주":
      localdetailint = 15;
      break;
    case "안동":
      localdetailint = 16;
      break;
    case "여수":
      localdetailint = 17;
      break;
    case "목포":
      localdetailint = 18;
      break;
    case "담양":
      localdetailint = 19;
      break;
    case "보성":
      localdetailint = 20;
      break;
    case "해남":
      localdetailint = 21;
      break;
    case "전주":
      localdetailint = 22;
      break;
    case "천안":
      localdetailint = 23;
      break;
    case "태안":
      localdetailint = 24;
      break;
    case "보령":
      localdetailint = 25;
      break;
    case "공주":
      localdetailint = 26;
      break;
    case "단양":
      localdetailint = 27;
      break;
    case "대구":
      localdetailint = 28;
      break;
    case "대전":
      localdetailint = 29;
      break;
    case "광주":
      localdetailint = 30;
      break;
    case "울산":
      localdetailint = 31;
      break;
    case "서귀포":
      localdetailint = 32;
      break;
    case "기타":
      localdetailint = 33;
      break;
    default:
      localint = 0;
  }

  useEffect(() => {
    setCategory(localint);
    setCategory2(localdetailint);
  }, [localint, localdetailint]);

  useEffect(() => {
    if (!isLoading) {
      setloading(false);
    }
  }, [isLoading]);

  let data = [];

  //setState는 즉각적으로 업데이트하지않고 promise를 통해 비동기적으로 변경시키므로
  //반복문이 끝나기전까지는 state가 변경되지않는다. 1번부터 4번까지라면, 4번째 데이터만 state에 반영된다.
  //변수에 담아서 해결
  useEffect(() => {
    if (mediaList) {
      for (let x in mediaList) {
        const imgURL = mediaList[x];
        data = [...data, { imgURL }];
        setImgPreview(data);
        setFileLink(mediaList[0]);
      }
    }
  }, [mediaList]);

  useEffect(() => {
    if (localint) {
      setCate(localint);
    }
  }, [localint]);

  useEffect(() => {
    dispatch(__getBoardDetail(id));
  }, []);

  useEffect(() => {
    if (post) {
      setcontents({
        title: post?.title,
        content: post?.content,
        local: Category,
        localdetail: Category2,
        pet: post?.Pet,
      });
    }
    setPet(post?.pet);
  }, [post]);

  // 이미지

  const S3URL = "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com";

  //AWS S3 이미지 업로드 도전

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  const onFileUpload = async (e) => {
    const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
    const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "react-image-seongwoo";

    //원본
    const imageFile = e.target.files[0];
    //리사이징
    try {
      const compressedFile = await imageCompression(imageFile, options);
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
            const imgURL = S3URL + Response.request.httpRequest.path;
            setFileLink(imgURL);
            setImgPreview([...ImgPreview, { imgURL }]);
          })
          .send((err) => {
            if (err);
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
  };

  const onCategoryHandler = (e) => {
    const { name, value } = e.target;
    setCategory2(value);
    setcontents({
      ...contents,
      [name]: value,
    });
  };

  const Categoryopen = (e) => {
    const { name, value } = e.target;
    setCate(value);
    setCategory(value);
    setcontents({
      ...contents,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      __modifyBoard({
        title: contents?.title,
        content: contents?.content,
        pet: Pet,
        mediaList: ImgPreview,
        category1: +Category,
        category2: +Category2,
        id: id.id,
      })
    );
  };

  // 이미지 누르면 지워지기 + 남아있는 이미지 그림 보여주기
  const [imgremovelength, setimgremovelength] = useState(true);

  useEffect(() => {
    for (let x in ImgPreview) {
      setFileLink(ImgPreview[x].imgURL);
    }
  }, [imgremovelength]);

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
    if (e.target.src.includes("img/board/noimage.jpg")) {
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

  const INJECTIONRegex = /[%=*><]/g;
  const RegexTest = (e) => {
    if (INJECTIONRegex.test(e.target.value)) {
      alert("보안 : 특수문자(<,>,*,=,%)는 입력이 제한됩니다.");
      e.target.value = e.target.value.replace(/[%=*><]/g, "");
    }
  };

  return loading ? null : (
    <St.HeaderContainer>
      <St.BoardWriteContainer onSubmit={onSubmitHandler}>
        <St.TitleInput
          name="title"
          type="text"
          placeholder="제목을 입력해주세요."
          maxLength="30"
          value={contents?.title || ""}
          required
          onChange={onChangeDataHandler}
          onKeyUp={RegexTest}
        />
        <St.BoardContentWrap>
          <St.BaordWritesection>
            <St.ImegeSelectBox>
              <St.ImagePreview src={FileLink} alt="" />
              <St.ImegeInput
                type="file"
                accept="image/*"
                onChange={onFileUpload}
              />
            </St.ImegeSelectBox>
          </St.BaordWritesection>

          <St.BoardButtonsection>
            <St.Categorysection>
              <St.CategorySelect
                name="category1"
                id="cate_parent"
                value={Category}
                onChange={Categoryopen}
              >
                <option name="category1" value="0">
                  카테고리를 선택해주세요.
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
              </St.CategorySelect>
              <St.CategorySelect
                name="category2"
                id="cate_child"
                value={Category2}
                onChange={onCategoryHandler}
                required
              >
                {Cate == 1 && (
                  <>
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
              </St.CategorySelect>
              <St.PetCheckBox>
                <St.PetLabel htmlFor="pet">반려동물동반여부</St.PetLabel>
                <St.PetCheck type="checkbox" id="pet" onChange={PetHandler} />
              </St.PetCheckBox>
            </St.Categorysection>
          </St.BoardButtonsection>
        </St.BoardContentWrap>
        <St.ImegePreviewBox>
          <St.ImegePreviewWrap>
            {formoon.map((e, i) => (
              <St.UploadImageBox key={i}>
                <St.UploadImegePreview
                  key={i}
                  id={ImgPreview[i]?.imgURL}
                  src={ImgPreview[i]?.imgURL ? ImgPreview[i]?.imgURL : noimage}
                  alt=""
                  onClick={previewchange}
                />
                <St.Imagedelete
                  onClick={() =>
                    imageremove(
                      ImgPreview[i]?.imgURL,
                      ImgPreview[i - 1]?.imgURL,
                      ImgPreview[i + 1]?.imgURL
                    )
                  }
                ></St.Imagedelete>
              </St.UploadImageBox>
            ))}
          </St.ImegePreviewWrap>
          <St.ImegePreviewtext>
            이미지는 총 10개까지 첨부 할 수 있으며, 맨 처음 이미지가 대표
            이미지로 설정됩니다.
          </St.ImegePreviewtext>
        </St.ImegePreviewBox>

        <St.Categorysectionmobile>
          <St.CategorySelect
            name="category1"
            id="cate_parent"
            value={Category}
            onChange={Categoryopen}
          >
            <option name="category1" value="0">
              카테고리를 선택해주세요.
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
          </St.CategorySelect>
          <St.CategorySelect
            name="category2"
            id="cate_child"
            value={Category2}
            onChange={onCategoryHandler}
            required
          >
            {Cate == 1 && (
              <>
                <option name="category2" value="0">
                  카테고리를 선택해주세요.
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
                  카테고리를 선택해주세요.
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
                  카테고리를 선택해주세요.
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
                  카테고리를 선택해주세요.
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
                  카테고리를 선택해주세요.
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
          </St.CategorySelect>
          <St.PetCheckBox>
            <St.PetLabel htmlFor="pet">반려동물동반여부</St.PetLabel>
            <St.PetCheck type="checkbox" id="pet" onChange={PetHandler} />
          </St.PetCheckBox>
        </St.Categorysectionmobile>

        <St.BoardWriteTextarea
          name="content"
          value={contents?.content}
          cols="30"
          rows="10"
          placeholder="내용을 입력해 주세요."
          required
          onChange={onChangeDataHandler}
          onKeyUp={RegexTest}
        />

        <St.Buttonsection>
          <St.WriteButton>등록</St.WriteButton>
          <St.Cancelbutton type="button" onClick={ModalHandler}>
            취소
          </St.Cancelbutton>
        </St.Buttonsection>
      </St.BoardWriteContainer>

      {ModalEdit ? (
        <St.Modal onClick={ModalHandler}>
          <St.ModalWrap>
            <St.ModalCont
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <St.ModalTextbox>
                <div>글 수정을 취소하고 나가시겠습니까?</div>
                <span>작성 내용은 저장되지 않습니다.</span>
              </St.ModalTextbox>
              <St.ModalBtnbox>
                <St.Outbtn onClick={WriteOut}>나가기</St.Outbtn>
                <St.Cancelbtn onClick={ModalHandler}>취소</St.Cancelbtn>
              </St.ModalBtnbox>
            </St.ModalCont>
          </St.ModalWrap>
        </St.Modal>
      ) : null}
    </St.HeaderContainer>
  );
};

export default BoardPostModify;
