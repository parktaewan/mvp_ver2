import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import DCItem from "./DCItem";
import { activeIdAtom, dataBaseAtom } from "@/src/atoms/dataAtom";

const DeliveryCompleted = () => {
  const [loading, setLoading] = useState(true);
  const activeLogin = useRecoilValue(activeIdAtom);

  const [tmp, setTmp] = useState([]);
  const [dcCount, setShippingCount] = useState([]);
  const [dcArray, setShippingArray] = useState([]);

  const dataBase = useRecoilValue(dataBaseAtom);

  const a = async () => {
    setShippingCount(dataBase[activeLogin]["DC"]["active"]);
    setShippingArray(dataBase[activeLogin]["DC"]["orderList"]);
    setTmp(dataBase[activeLogin]["refund"]["tmp"]);
  };
  let i = -1;

  useEffect(() => {
    const start = async () => {
      a().then(() => {
        setLoading(false);
        console.log(loading);
      });
    };
    start();
  }, []);
  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        width: "100vw",
        height: "100vh",
      }}
    >
      로딩중
    </div>
  ) : (
    <Container>
      {dcCount ? (
        dcCount.map((it) => {
          i = i + 1;
          if (it.split(".")[1] === "none") return <></>;
          else {
            let refund = "";
            if (!tmp || tmp.length <= 0) {
            } else {
              tmp.map((that) => {
                console.log(it.item, that["상품"]);
                if (dcArray[i][it.split(".")[0]].name === that["상품"]) {
                  refund = that["종류"];
                }
              });
            }
            return (
              <DCItem
                url={dcArray[i][it.split(".")[0]].image}
                brand={dcArray[i][it.split(".")[0]].brand}
                title={dcArray[i][it.split(".")[0]].name}
                refund={refund}
              />
            );
          }
        })
      ) : (
        <></>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 266px);

  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

export default DeliveryCompleted;
