import {
  activeIdAtom,
  activeLoginAtom,
  dataBaseAtom,
  selectedMainAtom,
  selectedSubAtom,
} from "@/src/atoms/dataAtom";
import Header from "@/src/components/Header";
import ItemDetail from "@/src/components/ItemDetail";
import Main from "@/src/components/Main";
import MainItemList from "@/src/components/MainItemList";
import Purchase from "@/src/components/Purchase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export default function Home() {
  const activeLogin = useRecoilValue(activeIdAtom);
  const [mainUrl, setMainUrl] = useState("");
  const dataBase = useRecoilValue(dataBaseAtom);
  const selectedMain = useRecoilValue(selectedMainAtom);
  const router = useRouter();
  const activeId = useRecoilValue(activeIdAtom);
  const selectedSub = useRecoilValue(selectedSubAtom);

  const a = async (activeId) => {
    setMainUrl(dataBase[activeId][`${"image_" + selectedMain}`]["main"]);
  };

  useEffect(() => {
    // if (activeLogin === "") router.push("/login");
    // else
    a(activeId);
  }, []);

  if (activeId === "")
    return (
      <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh" }}>
        로딩중
      </div>
    );
  else {
    return (
      <>
        <Header />
        <Main url={mainUrl} />
        <MainItemList />
        {selectedSub === "" ? <></> : <ItemDetail />}
        <Purchase />
      </>
    );
  }
}
