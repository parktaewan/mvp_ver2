import styled from "@emotion/styled";

const OrderSizeBox = (props) => {
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
  width: 50px;
  height: 21px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000;
`;

export default OrderSizeBox;
