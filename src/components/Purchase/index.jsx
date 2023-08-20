import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import PurchaseActive from "./PurchaseActive";
import {
  activeIdAtom,
  dataBaseAtom,
  selectedMainAtom,
} from "@/src/atoms/dataAtom";
import LocalStorage from "@/src/utils/localstorage/LocalStorage";

const Purchase = () => {
  const activeId = useRecoilValue(activeIdAtom);
  const [isClick, setIsClick] = useState("false");

  const [updateArray, setUpdateArray] = useState([""]);

  const selectedMain = useRecoilValue(selectedMainAtom);
  const [dataBase, setDataBase] = useRecoilState(dataBaseAtom);

  const a = async () => {
    setUpdateArray(dataBase[activeId][`${"size" + selectedMain}`]["SizeTitle"]);
    console.log(updateArray);
    console.log(dataBase[activeId]["order"]);
  };

  const onSetUpdateArray = (id, sizeTitle) => {
    let result = [];

    for (let i = 0; i < updateArray.length; i++) {
      if (i === id) {
        result.push(sizeTitle);
      } else {
        result.push(updateArray[i]);
      }
    }

    setUpdateArray(result);
  };

  const setUpdateDoc = async (array) => {
    let tmpDataBase = JSON.parse(JSON.stringify(dataBase));
    tmpDataBase[activeId][`${"size" + selectedMain}`]["SizeTitle"] = array;
    tmpDataBase[activeId]["order"] = {
      active: array,
      orderList: dataBase[activeId]["order"]["orderList"],
    };

    setDataBase(tmpDataBase);
    LocalStorage.setItem("dataBase", JSON.stringify(tmpDataBase));

    console.log(tmpDataBase);
    console.log(dataBase);
  };

  useEffect(() => {
    a();
  }, [dataBase]);

  let key = 0;

  return (
    <>
      {isClick === "false" ? (
        <Container
          onClick={() => {
            a().then(() => setIsClick("true"));
          }}
        >
          구매하기
        </Container>
      ) : (
        <BoxContainer>
          <OptionBoxContainer>
            <AllCheckout>사이즈 선택</AllCheckout>
          </OptionBoxContainer>
          {updateArray ? (
            updateArray.map((it) => {
              key = key + 1;
              return (
                <PurchaseActive
                  title={it}
                  key={key}
                  id={key}
                  onClick={onSetUpdateArray}
                />
              );
            })
          ) : (
            <></>
          )}
          <Container_2>
            <Wrapper
              onClick={() => {
                setUpdateDoc(updateArray);
                setIsClick("false");
              }}
              style={{ backgroundColor: "#000", color: "#fff" }}
            >
              장바구니 담기
            </Wrapper>
            <Wrapper
              style={{ backgroundColor: "#fff" }}
              onClick={() => {
                setIsClick("false");
              }}
            >
              취소
            </Wrapper>
          </Container_2>
        </BoxContainer>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  background-color: #fff;

  bottom: 0;

  border-top: 1px solid #000;

  width: 100vw;
  height: 58px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container_2 = styled.div`
  border-top: 1px solid #000;

  width: 100vw;
  height: 58px;

  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;
`;

const BoxContainer = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0;

  width: 100vw;
  border-top: 1px solid #000;
`;

const OptionBoxContainer = styled.div`
  width: 100vw;
  height: 36px;

  margin-top: 1px;
`;

const OptionBox = styled.div`
  width: 60px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;
`;

const AllCheckout = styled(OptionBox)`
  width: 110px;
`;

const OptionTitle = styled(OptionBox)`
  background-color: #000;
  color: #fff;
`;

export default Purchase;
