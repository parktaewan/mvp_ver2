import styled from "@emotion/styled";
import OrderMenu from "./OrderMenu";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import {
  activeIdAtom,
  dataBaseAtom,
  dcCountAtom,
  orderCountAtom,
  shippingCountAtom,
} from "@/src/atoms/dataAtom";

const OrderList = () => {
  const activeLogin = useRecoilValue(activeIdAtom);

  const [orderCount, setOrderCount] = useRecoilState(orderCountAtom);
  const [shippingCount, setShippingCount] = useRecoilState(shippingCountAtom);
  const [dCCount, setDCCount] = useRecoilState(dcCountAtom);

  const dataBase = useRecoilValue(dataBaseAtom);

  const a = async () => {
    setOrderCount(dataBase[activeLogin]["order"]["active"]);
  };
  const b = async () => {
    setShippingCount(dataBase[activeLogin]["shipping"]["active"]);
  };
  const c = async () => {
    setDCCount(dataBase[activeLogin]["DC"]["active"]);
  };
  useEffect(() => {
    // b();
    a();
    b();
    c();
  }, []);
  let oCount = 0;
  if (orderCount) {
    orderCount.map((it) => {
      if (it.split(".")[1] !== "none") oCount++;
    });
  }
  let sCount = 0;
  if (shippingCount) {
    shippingCount.map((it) => {
      console.log(it);
      if (it.split(".")[1] !== "none") sCount++;
    });
  }
  let dCount = 0;
  if (dCCount) {
    dCCount.map((it) => {
      if (it.split(".")[1] !== "none") dCount++;
    });
  }

  console.log("hi", sCount);

  return (
    <Container>
      <Title>주문 목록</Title>
      <Wrapper>
        <OrderMenu title={oCount} subtitle="구매예정" id="1" />
        <OrderMenu title={sCount} subtitle="배송중" id="2" />
        <OrderMenu title={dCount} subtitle="배송완료" id="3" />
        <OrderMenu title="0" subtitle="구매내역" id="4" />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 170px;

  background-color: #fff;
`;

const Title = styled.div`
  height: 48px;
  display: flex;
  align-items: center;

  padding-left: 15px;
  font-family: "NanumGothic";
  font-size: 16;
  font-weight: 700;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 120px;
  border-top: 1px solid #e5e5e5;

  display: flex;
`;

export default OrderList;
