import { useRecoilState, useRecoilValue } from "recoil";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import {
  activeIdAtom,
  activeOrderListAtom,
  dataBaseAtom,
  orderDataAtom,
} from "@/src/atoms/dataAtom";
import { useEffect } from "react";
import Header from "@/src/components/Header";
import OrderList from "@/src/components/OrderList";
import OrderItmeList from "@/src/components/OrderItemList";
import Shipping from "@/src/components/Shipping";
import DeliveryCompleted from "@/src/components/DeliveryCompleted";

export default function mypage() {
  const router = useRouter();
  const activeLogin = useRecoilValue(activeIdAtom);
  const activeOrderList = useRecoilValue(activeOrderListAtom);
  const [orderCount, setOrderCount] = useRecoilState(orderDataAtom);
  const dataBase = useRecoilValue(dataBaseAtom);
  const a = () => {
    setOrderCount(dataBase[activeLogin]["order"]["orderList"]);
  };
  useEffect(() => {
    if (activeLogin === "") router.push("/login");
    else a();
  }, []);
  if (activeLogin === "") return <>로딩중</>;
  else {
    return (
      <>
        <Container>
          <Header />
          <OrderList />
          {activeOrderList === "1" ? (
            <OrderItmeList />
          ) : activeOrderList === "2" ? (
            <Shipping />
          ) : activeOrderList === "3" ? (
            <DeliveryCompleted />
          ) : activeOrderList === "4" ? (
            <PurchaseCompleted />
          ) : (
            <></>
          )}
        </Container>
      </>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
