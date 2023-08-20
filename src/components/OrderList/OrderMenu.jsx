import { activeOrderListAtom } from "@/src/atoms/dataAtom";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

const OrderMenu = (props) => {
  const [activeOrderList, setActiveOrderList] =
    useRecoilState(activeOrderListAtom);

  let active;
  if (activeOrderList === props.id) active = "true";
  return (
    <Container
      onClick={() => {
        setActiveOrderList(props.id);
      }}
    >
      <Wrapper>
        <Title title={active}>{props.title}</Title>
        <SubTitle title={active}>{props.subtitle}</SubTitle>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: calc(100vw / 4);
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 52px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-family: "NanumGothic";
  font-size: 24px;
  font-weight: 700;

  color: ${(props) => (props.title === "true" ? "#3E68FF" : "#000")};
`;

const SubTitle = styled(Title)`
  font-weight: 400;
  font-size: 16px;
`;

export default OrderMenu;
