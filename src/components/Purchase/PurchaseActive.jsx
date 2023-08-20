import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import OptionBox from "./OptionBox";
import {
  activeIdAtom,
  dataBaseAtom,
  selectedMainAtom,
} from "@/src/atoms/dataAtom";

const PurchaseActive = (props) => {
  const activeId = useRecoilValue(activeIdAtom);
  const onClick = (title, id = props.id - 1) => {
    setSelectedSize(title);
    props.onClick(id, `${props.title.split(".")[0] + "." + title}`);
  };
  const selectedMain = useRecoilValue(selectedMainAtom);
  const [size, setSize] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const dataBase = useRecoilValue(dataBaseAtom);
  const a = async () => {
    setSize(
      dataBase[activeId][`${"size" + selectedMain}`][props.title.split(".")[0]]
    );
    console.log(size);
    console.log(dataBase);
  };
  useEffect(() => {
    // b();
    a();
    setSelectedSize(props.title.split(".")[1]);
  }, []);

  return (
    <OptionBoxContainer>
      {props.title.split(".")[1] === "none" ? (
        <OptionTitle style={{ backgroundColor: "#fff", color: "#000" }}>
          {props.title.split(".")[0]}
        </OptionTitle>
      ) : (
        <OptionTitle>{props.title.split(".")[0]}</OptionTitle>
      )}

      {size ? (
        size.map((it) => {
          return (
            <OptionBox title={it} theme={selectedSize} onClick={onClick} />
          );
        })
      ) : (
        <></>
      )}
    </OptionBoxContainer>
  );
};

const OptionBoxContainer = styled.div`
  width: 100vw;
  height: 36px;

  margin-top: 1px;

  display: flex;
`;

const OptionTitle = styled.div`
  width: 60px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;

  background-color: #000;
  color: #fff;

  margin-right: 1px;
`;

export default PurchaseActive;
