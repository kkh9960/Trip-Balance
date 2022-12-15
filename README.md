<h1><b>🏝Trip Balane🏝</b></h3>
<h3>여행을 가고싶은데 어디로 갈지 모르겠다면,</h3>
<h3>밸런스 게임을 통해서 정해보세요!</h3>
<h4>📆프로젝트 기간 2022.11.04 ~ 2022.12.16</h4>

-------

<h2> ⚙ 서비스 아키텍쳐 ⚙</h2>

![image](https://user-images.githubusercontent.com/77573910/206633198-1de82ce6-a604-4b8d-a520-6a412251021b.png)
  
-------

</div>

<h2><b>🛠 Skill 🛠</b></h2>

<div>

|🔩 Part|⚙ Stacks ⚙|
|:---:|:---:|
|📃 Code| <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> | 
|🛠 Tech| <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"> </br> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/Kakao API-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white">|
|⚙️ Tool| <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"> <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=Sentry&logoColor=white"> |
|🔍 Cloud| <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white"> <img src="https://img.shields.io/badge/AWS Amplify-FF9900?style=for-the-badge&logo=AWS Amplify&logoColor=white"> <img src="https://img.shields.io/badge/Route 53-FF9900?style=for-the-badge&logo=Amazon EC2&logoColor=white"> |

</div>

-------

<h3>Member</h3>
<p align=>
<img src="https://img.shields.io/badge/곽규현-61DAFB?style=for-the-badge&logo=react&logoColor=white"> 
<a href="https://github.com/kkh9960"><img src="https://img.shields.io/badge/GITHUB-61DAFB?style=for-the-badge&logo=GitHub&logoColor=white&link=https://github.com/kkh9960"/></a>
<br>
<img src="https://img.shields.io/badge/조광익-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<a href="https://github.com/cho-light"><img src="https://img.shields.io/badge/GITHUB-61DAFB?style=for-the-badge&logo=GitHub&logoColor=white&link=https://github.com/cho-light"/></a>
<br>
<img src="https://img.shields.io/badge/이중오-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<a href="https://github.com/jnwnddh"><img src="https://img.shields.io/badge/GITHUB-61DAFB?style=for-the-badge&logo=GitHub&logoColor=white&link=https://github.com/jnwnddh"/></a>
<br>
<img src="https://img.shields.io/badge/박성우-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<a href="https://github.com/seongwoo9156"><img src="https://img.shields.io/badge/GITHUB-61DAFB?style=for-the-badge&logo=GitHub&logoColor=white&link=https://github.com/seongwoo9156"/></a>

-------

<h2> 기술 스택 & 라이브러리 사용 이유 </h2>
<details>
<summary> React </summary>
<div markdown="1">	
<br>
</div>
Component 단위의 작성을 통해 UI를 구성하는 개별적인 view단위의 개발을 하여 하나의 컴포넌트를 여러 부분에 다중 사용할수 있게 만들어 생산성과 유지 보수를 용이하게 하고 JSX를 사용해 컴포넌트를 쉽게 구성할수 있도록 해주며 Vitual DOM을 이용해 연산 비용을 줄일수 있기에 React 라이브러리를 사용하게 되었습니다.
</details>
<details>
<summary> Redux-Toolkik </summary>
<div markdown="1">	
<br>
</div>
컨포넌트 내에서 상태관리 함에 있어서 페이지 이동 하면서 데이터를 유지하기 어려워 전역으로 데이터 저장하는 방법으로 리덕스를 선택하였습니다. <br/>
리덕스 툴킷은 리덕스와 달리 action value와 action Creater를 정의하지 않고 작성할 수 있어 보일러 플레이트 코드를 줄일 수 있고, Redux 자체만으로는 스토어 설정이 어려워 추가적인 라이브러리도 설치해야 하지만, Toolkit의 경우 유틸리티 함수들이 대부분 포함 되어 있어 Redux사용에 추가적인 라이브러리 설치가 필요 없다는 점 때문에 Redux-Toolkit을 선택하게 되었습니다. <br/>
또한 비동기 통신을 수월하게 만들어주는 thunk가 있어 선택하였습니다.
</details>
<details>
<summary> Axios </summary>
<div markdown="1">	
<br>
</div>
axios를 선정한 이유는 Promise 기반으로 만들어졌기 때문에 데이터 다루기가 편리하고 브라우저 호환성이 뛰어나 선정했습니다. <br/>
또한 비동기로 HTTP통신을 할 수 있으며 return을 promise 객체로 해 주기 때문에 response 데이터를 다루기 쉬워 선택하였습니다.
</details>
<details>
<details>
<summary> Styled-components </summary>
<div markdown="1">	
<br>
</div>
  <p> 스타일드 컴포넌트 사용이유 </p>
</details> 

</br>

<h2> 트러블 슈팅 </h2>
<details>
<summary> 검색 필터 후 무한 스크롤 </summary>
<div markdown="1">	
<br>
</div>
  <p> 검색 필터 후 무한 스크롤 내용 </p>
</details>
<details>
<summary> 웹 페이지 성능 최적화 </summary>
<div markdown="1">	
<br>
</div>
  <p> 웹 페이지 성능 최적화 내용 </p>
</details> 

</br>

<h2> UT 개선사항 </h2>
<details>
<summary> SQL문 </summary>
<div markdown="1">	
<br>
</div>
  <p> SQL문 내용 </p>
</details>
<details>
<summary> 게임 재 진행시 기존 데이터가 남아있는 현상 </summary>
<div markdown="1">	
<br>
</div>
  <p> 게임 재 진행시 기존 데이터가 남아있는 현상 </p>
</details> 

-------

  <h2> 🚌 Trip Balane 서비스 미리보기 (Mobile) </h2>

  |메인페이지 | 밸런스게임 | 게시판 | 댓글 | 마이페이지 | 카카오 로그인 |
  | :---:  | :---:  | :---:  | :---:  | :---:  | :---:  |
  | <img src="https://user-images.githubusercontent.com/77573910/207328228-9ed527b8-37c9-4b67-bc07-52aaad650351.gif"> | <img src="https://user-images.githubusercontent.com/77573910/207328269-ce2110a2-2c16-4aad-b8c1-a10be1cd5406.gif"> | <img src="https://user-images.githubusercontent.com/77573910/207328316-7bb0bb2c-4c16-4f04-af5b-a3389a3a136f.gif">  | <img src="https://user-images.githubusercontent.com/77573910/207328442-4c756582-5c74-4836-b9a5-120cb84a7335.gif">  | <img src="https://user-images.githubusercontent.com/77573910/207328857-1d006029-1c77-4f31-b901-3995f11fa623.gif"> | <img src="https://user-images.githubusercontent.com/77573910/207331945-34fff012-41cc-49db-8917-606f2d07b9e8.gif"> | 

</div>

-------
 <h2> 🚌 Trip Balane 서비스 미리보기 (Web) </h2>

<h3> 메인 페이지 </h3>

<img src="https://user-images.githubusercontent.com/77573910/207361774-514c6ea0-0d65-42e9-9c87-af04e8f6c338.gif" width="600" height="300" >
 
<h3> 밸런스 게임 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207361837-3784b70a-b13c-4485-ac44-352efee10990.gif" width="600" height="300" >

<h3> 게시판 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362116-99ac93aa-46f1-4d65-95e6-b9ec2d8cfe0c.gif" width="600" height="300" >

<h3> 검색 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362518-92fe0f3e-a61f-4da6-a168-ef2a8c762c08.gif" width="600" height="300" >

<img src="https://user-images.githubusercontent.com/77573910/207362546-cf2c11c8-0527-4a10-851b-44b3904211ab.gif" width="600" height="300" >

<h3> 게시글 세부조회 좋아요 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362185-4f9005c8-4ab5-4179-ab56-974c9dcffd29.gif" width="600" height="300">

<h3> 글쓰기 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362231-9aa26fee-0313-4c0e-8311-9695bb78fc17.gif" width="600" height="300">

<h3> 댓글 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362390-b91ee5c7-2d56-4fda-b663-6d9993397ac0.gif" width="600" height="300">

<img src="https://user-images.githubusercontent.com/77573910/207362412-9f82b690-9707-453b-859a-75c989a59bcb.gif" width="600" height="300">

<h3> 다른 회원 프로필보기 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362811-33bbef1a-ae15-491b-b4f1-674bb71e8b8e.gif" width="600" height="300">

<h3> 마이페이지 </h3>
<img src="https://user-images.githubusercontent.com/77573910/207362876-46a912f8-d083-4e92-93f9-46cff1b4bfeb.gif" width="600" height="300">

<img src="https://user-images.githubusercontent.com/77573910/207362891-0eb7e051-cc86-468b-9cb9-15f4886dd455.gif" width="600" height="300">

-------
