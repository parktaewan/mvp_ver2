import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import ShippingItem from "./ShippingItem";
import { activeIdAtom, dataBaseAtom } from "@/src/atoms/dataAtom";

const Shipping = () => {
  const activeLogin = useRecoilValue(activeIdAtom);
  const [shippingCount, setShippingCount] = useState([]);
  const [shippingArray, setShippingArray] = useState([]);

  const dataBase = useRecoilValue(dataBaseAtom);

  const a = async () => {
    setShippingCount(dataBase[activeLogin]["shipping"]["active"]);
    setShippingArray(dataBase[activeLogin]["shipping"]["orderList"]);
  };
  let i = -1;

  useEffect(() => {
    a();
  }, []);
  return (
    <Container>
      {shippingCount ? (
        shippingCount.map((it) => {
          i = i + 1;
          if (it.split(".")[1] === "none") return <></>;
          else {
            console.log(shippingArray);
            return (
              <ShippingItem
                url={shippingArray[i][it.split(".")[0]].image}
                brand={shippingArray[i][it.split(".")[0]].brand}
                title={shippingArray[i][it.split(".")[0]].name}
                sizeTitle={it.split(".")[1]}
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

export default Shipping;
