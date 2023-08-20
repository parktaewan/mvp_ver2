import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <Title onClick={() => router.push("/")}>SIMPLZ</Title>
      <SubTitle onClick={() => router.push("/mypage")}>마이페이지</SubTitle>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;
`;

const Title = styled.div`
  width: 160px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 900;
  font-size: 26px;
`;

const SubTitle = styled(Title)`
  width: 130;

  font-size: 16px;
`;

export default Header;
