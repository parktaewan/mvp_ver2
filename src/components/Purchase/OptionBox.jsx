import styled from "@emotion/styled";

const OptionBox = (props) => {
  if (props.title === props.theme)
    return (
      <Container
        onClick={() => {
          props.onClick("none");
        }}
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        {props.title}
      </Container>
    );
  else
    return (
      <Container
        onClick={() => {
          props.onClick(props.title);
        }}
      >
        {props.title}
      </Container>
    );
};

const Container = styled.div`
  width: 60px;
  height: 36px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "NanumGothic";
  font-weight: 400;
`;

export default OptionBox;
