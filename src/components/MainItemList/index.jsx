import styled from "@emotion/styled";
import MainItem from "./MainItem";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeIdAtom,
  dataBaseAtom,
  selectedMainAtom,
} from "@/src/atoms/dataAtom";

const MainItemList = () => {
  const activeId = useRecoilValue(activeIdAtom);
  const [mainUrl, setMainUrl] = useState();
  const [selectedMain, setSelectedMain] = useRecoilState(selectedMainAtom);
  const dataBase = useRecoilValue(dataBaseAtom);

  const a = async () => {
    setMainUrl(dataBase[activeId][`${"image_" + selectedMain}`]["sub"]);
  };
  useEffect(() => {
    a();
  }, []);

  let key = 0;

  return (
    <Container>
      {mainUrl ? (
        mainUrl.map((it) => {
          key = key + 1;
          return <MainItem num={it} key={key} id={key.toString()} />;
        })
      ) : (
        <>로딩중</>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 117px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  margin-bottom: 64px;
`;

export default MainItemList;
