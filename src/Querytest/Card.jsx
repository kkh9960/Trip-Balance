import styled from "styled-components";

export function Card({ title, postId }) {
  return (
    <div>
      <Title>타이틀:{title}</Title>
      <Title>아이디{postId}</Title>
    </div>
  );
}

export default Card;

const Title = styled.div`
  margin-top: 10px;
`;
const Img = styled.img``;
