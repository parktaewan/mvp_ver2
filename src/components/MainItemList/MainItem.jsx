import { selectedSubAtom } from "@/src/atoms/dataAtom";
import styled from "@emotion/styled";
import Image from "next/image";
import { useRecoilState } from "recoil";

const MainItem = (props) => {
  const [clickedSub, setClickedSub] = useRecoilState(selectedSubAtom);
  return (
    <Container
      onClick={() => {
        setClickedSub(props.id);
      }}
    >
      <Image
        src={props.num}
        alt="이미지"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;

  width: 107px;
  height: 100%;

  background-color: #fff;
`;

export default MainItem;
