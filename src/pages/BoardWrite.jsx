import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import AWS from "aws-sdk";
import { __postBoard } from "../redux/modules/BoardSlice";

const BoardWrite = () => {
  const dispatch = useDispatch();
  const [FileLink, setFileLink] = useState(null);
  const DefaultImega = "img/default1.jpg";
  const [ImgPreview, setImgPreview] = useState([]);
  const [Pet, setPet] = useState(0);
  const [contents, setcontents] = useState();
  const [Cate, setCate] = useState("0");

  console.log(ImgPreview.length);

  // 이미지

  const S3URL = "https://react-image-seongwoo.s3.ap-northeast-2.amazonaws.com";

  //AWS S3 이미지 업로드 도전

  const onFileUpload = async (e) => {
    const ACCESS_KEY = "AKIAXQKS7DPZ7R5C4WNA";
    const SECRET_ACCESS_KEY = "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";
    const REGION = "ap-northeast-2";
    const S3_BUCKET = "react-image-seongwoo";

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
    const file = e.target.files[0];
    console.log(file);
    console.log(file.name);

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
          alert("SUCCESS");
          console.log(Response.request.httpRequest.path);
          const ImgURL = S3URL + Response.request.httpRequest.path;
          setFileLink(ImgURL);
          setImgPreview([...ImgPreview, ImgURL]);
        })
        .send((err) => {
          if (err) console.log(err);
        });
    } else {
      alert("이미지는 10개까지만 업로드할수있습니다.");
    }
  };

  // 카테고리 선택박스 //
  // let cate_parent = [
  //   { c: "category1", v: "0", t: "카테고리를 선택해주세요." },
  //   { c: "category1", v: "1", t: "카테고리1" },
  //   { c: "category1", v: "2", t: "카테고리2" },
  // ];

  // let cate_child_1 = [
  //   { c: "category2", v: "1", t: "카테고리1번의 항목1" },
  //   { c: "category2", v: "2", t: "카테고리1번의 항목2" },
  //   { c: "category2", v: "3", t: "카테고리1번의 항목3" },
  // ];

  // let cate_child_2 = [
  //   { c: "category2", v: "1", t: "카테고리2번의 항목1" },
  //   { c: "category2", v: "2", t: "카테고리2번의 항목2" },
  //   { c: "category2", v: "3", t: "카테고리2번의 항목3" },
  // ];
  // const loadCateParent = () => {
  //   let h = [];
  //   cate_parent.forEach((item) => {
  //     h.push(
  //       '<option name="' +
  //         item.c +
  //         '" value="' +
  //         item.v +
  //         '">' +
  //         item.t +
  //         "</option>"
  //     );
  //   });
  //   document.getElementById("cate_parent").innerHTML = h.join("");
  // };
  // useEffect(() => {
  //   loadCateParent();
  // }, []);
  // const loadCateChild = () => {
  //   let test = "onChange={onCategoryHandler}";
  //   let parent_cate = document.getElementById("cate_parent").value;
  //   let h = [];
  //   if (parent_cate === "") {
  //   } else {
  //     if (parent_cate === "1") {
  //       cate_child_1.forEach((item) => {
  //         h.push(
  //           '<option name="' +
  //             item.c +
  //             '" value="' +
  //             item.v +
  //             '"' +
  //             test +
  //             ">" +
  //             item.t +
  //             "</option>"
  //         );
  //       });
  //     } else if (parent_cate === "2") {
  //       cate_child_2.forEach((item) => {
  //         h.push(
  //           '<option onChange={onCategoryHandler} name="' +
  //             item.c +
  //             '" value="' +
  //             item.v +
  //             '">' +
  //             item.t +
  //             "</option>"
  //         );
  //       });
  //     }
  //   }
  //   document.getElementById("cate_child").innerHTML = h.join("");
  // };
  // 여기까지 카테고리 선택박스 //

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
    setcontents({
      ...contents,
      [name]: value,
    });
  };
  const Categoryopen = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setCate(value);
    setcontents({
      ...contents,
      [name]: value,
    });
  };

  console.log(contents);
  const onSubmitHandler = () => {
    dispatch(__postBoard({}));
  };

  console.log(
    contents.title,
    contents.content,
    contents.category1,
    contents.category2,
    ImgPreview
  );

  return (
    <BoardWriteContainer onSubmit={onSubmitHandler}>
      <BoardWriteWrap>
        <WriteTitle>
          <TitleInput
            name="title"
            type="text"
            placeholder="제목을 입력해주세요."
            maxLength="30"
            required
            onChange={onChangeDataHandler}
          />
        </WriteTitle>
        <ImegeCategoryBox>
          <ImegeBox>
            <ImagePreview src={FileLink} />
            <ImegeTitle>
              업로드 업로드 & 드래그
              <ImegeInput
                type="file"
                name="img"
                accept="image/*"
                onChange={onFileUpload}
              />
            </ImegeTitle>
          </ImegeBox>
          <CategoryWrap>
            <CategoryBox>
              <CategorySelect
                name="category1"
                id="cate_parent"
                onChange={Categoryopen}
              >
                <option name="category1" value="0">
                  카테고리를 선택해주세요.
                </option>
                <option name="category1" value="1">
                  카테고리1
                </option>
                <option name="category1" value="2">
                  카테고리2
                </option>
              </CategorySelect>
              <CategorySelect
                name="category2"
                id="cate_child"
                onChange={onCategoryHandler}
                required
              >
                {Cate == 1 && (
                  <>
                    <option name="category2" value="1">
                      카테고리1번의 항목1
                    </option>
                    <option name="category2" value="2">
                      카테고리1번의 항목2
                    </option>
                    <option name="category2" value="3">
                      카테고리1번의 항목3
                    </option>
                  </>
                )}
                {Cate == 2 && (
                  <>
                    <option name="category2" value="1">
                      카테고리2번의 항목1
                    </option>
                    <option name="category2" value="2">
                      카테고리2번의 항목2
                    </option>
                    <option name="category2" value="3">
                      카테고리2번의 항목3
                    </option>
                  </>
                )}
              </CategorySelect>
              <PetCheckBox>
                <PetCheck type="checkbox" id="pet" onChange={PetHandler} />
                <PetLabel htmlFor="pet">반려동물</PetLabel>
              </PetCheckBox>
            </CategoryBox>
          </CategoryWrap>
        </ImegeCategoryBox>
        <ImegePreviewBox>
          <UploadImegePreview
            src={ImgPreview[0] ? ImgPreview[0] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[1] ? ImgPreview[1] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[2] ? ImgPreview[2] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[3] ? ImgPreview[3] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[4] ? ImgPreview[4] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[5] ? ImgPreview[5] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[6] ? ImgPreview[6] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[7] ? ImgPreview[7] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[8] ? ImgPreview[8] : DefaultImega}
            alt=""
          />
          <UploadImegePreview
            src={ImgPreview[9] ? ImgPreview[9] : DefaultImega}
            alt=""
          />
        </ImegePreviewBox>
        <WriteContentBox>
          <WriteContent
            name="content"
            id=""
            cols="30"
            rows="10"
            placeholder="내용을 입력해 주세요."
            required
            onChange={onChangeDataHandler}
          />
        </WriteContentBox>
        <ButtonWrap>
          <WriteButton>저장</WriteButton>
          <CancleButton type="button">취소</CancleButton>
        </ButtonWrap>
      </BoardWriteWrap>
    </BoardWriteContainer>
  );
};

export default BoardWrite;

const ImegePreviewBox = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  display: flex;
  gap: 10px;
`;

const UploadImegePreview = styled.img`
  flex: 1;
  width: 91px;
  height: 100px;
  object-fit: cover;
`;

const PetLabel = styled.label`
  font-size: 22px;
  margin-left: 20px;
`;

const PetCheckBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PetCheck = styled.input`
  width: 80px;
  height: 40px;
  position: relative;
  -webkit-appearance: none;
  background: #c6c6c6;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  &:checked {
    background: #03a9f4;
  }
  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transform: scale(1.1);
    transition: all 0.5s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
  &:checked::before {
    left: 40px;
  }
`;

const ButtonWrap = styled.div`
  text-align: center;
  padding: 20px;
  gap: 20px;
  display: flex;
  justify-content: center;
`;
const WriteButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  color: white;
  background-color: #222;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;
const CancleButton = styled.button`
  width: 150px;
  height: 50px;
  border: 1px solid #ddd;
  color: 222;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    border: 1px solid #222;
  }
`;

const BoardWriteContainer = styled.form`
  width: 90%;
  max-width: 1000px;
  height: auto;
  min-height: 1000px;
  margin: 0 auto;
  margin-top: 100px;
`;
const BoardWriteWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const WriteTitle = styled.div`
  width: 100%;
  padding: 0 20px;
  text-align: center;
`;
const TitleInput = styled.input`
  width: 100%;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid #999;
  padding: 5px;
  outline: none;
`;
const ImegeCategoryBox = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  gap: 20px;
  padding: 20px;
`;
const ImagePreview = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
`;
const ImegeBox = styled.div`
  flex: 2;
  position: relative;
  border: 3px dashed #cdcdcd;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const ImegeTitle = styled.div``;
const ImegeInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
`;
const CategoryWrap = styled.div`
  flex: 1;
`;
const CategoryBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const CategorySelect = styled.select`
  width: 70%;
  height: 50px;
  font-size: 15px;
  color: #999;
  border: 2px solid #ddd;
  appearance: none;
  -webkit-appearance: none;
`;
const WriteContentBox = styled.div`
  width: 100%;
  padding: 0 20px;
`;
const WriteContent = styled.textarea`
  width: 100%;
  min-height: 100px;
  max-height: 500px;
  font-size: 18px;
  outline: none;
  border-radius: 5px;
  resize: none;
  border: 1px solid #999;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;
