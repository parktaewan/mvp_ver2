import styled from "@emotion/styled";
import OrderItem from "./OrderItem";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import {
  orderCountAtom,
  orderDataAtom,
  selectedMainAtom,
  activeIdAtom,
  dataBaseAtom,
} from "@/src/atoms/dataAtom";

const OrderItmeList = () => {
  const activeLogin = useRecoilValue(activeIdAtom);

  const [onClick, setOnClick] = useState(false);
  const [updateArray, setUpdateArray] = useState([""]);

  const [dataBase, setDataBase] = useRecoilState(dataBaseAtom);

  const ssetUpdateArray = async (result) => {
    setUpdateArray(result);
    console.log("server", result);
  };

  const selectedMain = useRecoilValue(selectedMainAtom);

  const a = async () => {
    setUpdateArray(
      dataBase[activeLogin][`${"size" + selectedMain}`]["SizeTitle"]
    );
  };

  const onSetUpdateArray = async (id, sizeTitle) => {
    let result = [];
    for (let i = 0; i < updateArray.length; i++) {
      if (i === id) {
        result.push(sizeTitle);
      } else {
        result.push(updateArray[i]);
      }
    }
    ssetUpdateArray(result).then(() => {
      console.log("여기", updateArray);
      setUpdateDoc(result);
    });
  };

  const setUpdateDoc = async (array) => {
    let tmpDataBase = JSON.parse(JSON.stringify(dataBase));
    tmpDataBase[activeLogin][`${"size" + selectedMain}`]["SizeTitle"] = array;
    tmpDataBase[activeLogin]["order"] = {
      active: array,
      orderList: dataBase[activeLogin]["order"]["orderList"],
    };

    setDataBase(tmpDataBase);
    console.log(tmpDataBase);
    console.log(dataBase);
  };

  const onClickUpdate = (id, sizeTitle) => {
    onSetUpdateArray(id, sizeTitle);
  };

  useEffect(() => {
    // b();
    a();
    setOnClick(true);
  }, []);

  const title = useRecoilValue(orderCountAtom);

  let count = -1;
  const [orderCount, setOrderCount] = useRecoilState(orderDataAtom);
  console.log(updateArray[count]);
  return (
    <Container>
      {orderCount.length !== 0 && title && onClick ? (
        orderCount.map((it) => {
          count = count + 1;
          console.log(count);
          if (title[count].split(".")[1] === "none") {
            return <></>;
          } else {
            console.log(it);
            return title[count].split(".")[0] && updateArray ? (
              <OrderItem
                sizeTitle={updateArray[count]}
                id={count}
                key={count}
                onClick={onClickUpdate}
                url={it[title[count].split(".")[0]].image}
                title={it[title[count].split(".")[0]].name}
                brand={it[title[count].split(".")[0]].brand}
              />
            ) : (
              <></>
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

export default OrderItmeList;
