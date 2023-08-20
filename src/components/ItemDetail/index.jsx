import {
  activeIdAtom,
  dataBaseAtom,
  selectedMainAtom,
  selectedSubAtom,
} from "@/src/atoms/dataAtom";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const ItemDetail = () => {
  const activeId = useRecoilValue(activeIdAtom);
  const [selectedMain, setSelectedMain] = useRecoilState(selectedMainAtom);
  const selectedSub = useRecoilValue(selectedSubAtom);
  const [url, setUrl] = useState([]);
  const dataBase = useRecoilValue(dataBaseAtom);

  const a = async () => {
    setUrl(
      dataBase[activeId][`${"detail" + selectedMain}`][`${"sub" + selectedSub}`]
    );
    console.log(url);
    console.log(selectedSub);
  };

  useEffect(() => {
    a();
  }, [selectedSub]);

  return (
    <Container>
      {url ? (
        url.map((it) => {
          return (
            <Image
              src={it}
              alt="이미지"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          );
        })
      ) : (
        <>로딩중</>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default ItemDetail;
