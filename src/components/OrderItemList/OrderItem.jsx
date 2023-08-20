import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import OrderSizeBox from "./OrderSizeBox";
import {
  activeIdAtom,
  dataBaseAtom,
  selectedMainAtom,
} from "@/src/atoms/dataAtom";

const OrderItem = (props) => {
  const activeLogin = useRecoilValue(activeIdAtom);
  console.log(props.sizeTitle);
  const onClick = (title, id = props.id) => {
    setSelectedSize(title);
    props.onClick(id, `${props.sizeTitle.split(".")[0] + "." + title}`);
  };
  const selectedMain = useRecoilValue(selectedMainAtom);
  const [size, setSize] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const dataBase = useRecoilValue(dataBaseAtom);

  const a = async () => {
    setSize(
      dataBase[activeLogin][`${"size" + selectedMain}`][
        props.sizeTitle.split(".")[0]
      ]
    );
  };
  useEffect(() => {
    // b();
    a();
    setSelectedSize(props.sizeTitle.split(".")[1]);
  }, []);

  return (
    <Container>
      <LeftWrapper>
        <Image
          src={props.url}
          alt="이미지"
          width={0}
          height={0}
          sizes="100vh"
          style={{ width: "auto", height: "100%" }}
        />
      </LeftWrapper>
      <RightWrapper>
        <BrandText>{props.brand}</BrandText>
        <TitleText>{props.title}</TitleText>
        <SizeWrapper>
          {size ? (
            size.map((it) => {
              return (
                <OrderSizeBox
                  title={it}
                  theme={selectedSize}
                  onClick={onClick}
                />
              );
            })
          ) : (
            <></>
          )}
        </SizeWrapper>
      </RightWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 80px;

  border-bottom: 1px solid #d4d4d4;

  display: grid;
  grid-template-columns: 100px 3fr;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80px;
`;

const RightWrapper = styled.div`
  padding: 10px 0px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  overflow: hidden;
`;

const BrandText = styled.div`
  font-family: "NanumGothic";
  font-weight: 400;
  font-size: 12px;
`;

const TitleText = styled(BrandText)`
  font-size: 14px;
  font-weight: 700;
  height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SizeWrapper = styled.div`
  display: flex;
  gap: 1px;
`;

export default OrderItem;
