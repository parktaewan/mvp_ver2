import { activeIdAtom, activeRefundAtom } from "@/src/atoms/dataAtom";
import Header from "@/src/components/Header";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilValue } from "recoil";

export default function refund() {
  const activeLogin = useRecoilValue(activeIdAtom);
  const [reason, setReason] = useState("");
  const router = useRouter();
  const refundData = useRecoilValue(activeRefundAtom);
  let tmp = [];

  const onChange = (e) => {
    setReason(e.target.value);
  };

  return (
    <Container>
      <Header />
      <ItemWrapper>
        <Title>{`${refundData.title} 상품`}</Title>
        <Item>
          {/* <Refund
            url={refundData.url}
            brand={refundData.brand}
            title={refundData.title}
            name={refundData.name}
          /> */}
        </Item>
      </ItemWrapper>
      <TextWrapper>
        <TextTitle>{`${refundData.title} 사유`}</TextTitle>
        <Text onChange={(e) => onChange(e)}></Text>
        <ButtonWrapper>
          <Button
            onClick={() => {
              router.push("/mypage");
            }}
          >
            취소
          </Button>
          <Button
            onClick={() => {
              setData();
              router.push("/mypage");
            }}
          >
            확인
          </Button>
        </ButtonWrapper>
      </TextWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e5e5e5;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ItemWrapper = styled.div`
  width: 100vw;
  height: 144px;

  background-color: #fff;
`;

const Title = styled.div`
  font-family: "NanumGothic";
  font-weight: 700;

  height: 48px;
  display: flex;
  align-items: center;

  padding-left: 15px;
  font-family: "NanumGothic";
  font-size: 16;
  font-weight: 700;
`;

const Item = styled.div`
  width: 100%;
  height: 78px;

  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
`;

const TextWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 144px - 40px - 60px);

  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

const TextTitle = styled.div`
  font-family: "NanumGothic";
  font-weight: 700;
  padding-left: 15px;

  height: 53px;

  display: flex;
  align-items: center;
`;

const Text = styled.textarea`
  box-sizing: border-box;
  font-family: "NanumGothic";
  font-weight: 400;

  padding: 10px;
  margin: 0px 15px;
  background-color: #e6e6e6;

  height: calc(100vh - 144px - 40px - 60px - 54px - 80px);

  border: 1.4px solid #000;
  resize: none;
`;

const ButtonWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80px;

  display: flex;
  gap: 15px;
  padding: 15px;
`;

const Button = styled.div`
  font-family: "NanumGothic";
  font-weight: 700;

  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1.4px solid #000;
`;
