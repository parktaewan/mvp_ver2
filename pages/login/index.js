import { activeIdAtom, activeLoginAtom } from "@/src/atoms/dataAtom";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function login() {
  const [activeLogin, setActiveLogin] = useRecoilState(activeIdAtom);
  const loginData = useRecoilValue(activeLoginAtom);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const router = useRouter();

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  useEffect(() => {
    if ("관리자접속" === id) router.push("/admin/login");
    loginData.map((it) => {
      if (it.id === id && it.pw === pw) {
        setActiveLogin(id);
        router.push("/");
      }
    });
  }, [id, pw]);

  return (
    <Container>
      <Wrapper>
        <Title>SIMPLZ</Title>
        <Form>
          <Input placeholder="ID" onChange={(e) => onChangeId(e)}></Input>
          <Input placeholder="Password" onChange={(e) => onChangePw(e)}></Input>
        </Form>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 180px;
  padding: 0px 35px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.div`
  font-family: "NanumGothic";
  font-weight: 900;
  font-size: 36px;
  color: #fff;

  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding-left: 12px;
  width: 100%;
  height: 40px;

  ::placeholder {
    color: #9a9a9a;
  }
`;
