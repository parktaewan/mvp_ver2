import styled from "@emotion/styled";
import Image from "next/image";

export default function Main(props) {
  return (
    <Container>
      <Image
        src={props.url}
        alt="이미지"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: calc(100vw / 10000 * 13231);

  display: flex;
  align-items: center;
`;
