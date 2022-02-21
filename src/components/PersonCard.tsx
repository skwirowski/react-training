import { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${({ theme }) => theme.surface.background};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.surface.boxShadow};
  margin: 15px auto;
`;

function PersonCard(props: any, ref: any) {
  return <Wrapper ref={ref}>{props.children}</Wrapper>;
}

export default forwardRef(PersonCard);
