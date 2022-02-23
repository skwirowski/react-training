import Person from "interfaces/Person";
import { forwardRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 230px;
  width: 200px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.surface.background};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.surface.boxShadow};
  margin: 15px auto;
  padding: 15px;
`;

const ImageWrapper = styled.div`
  width: 128px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

const Name = styled.span`
  font-size: 20px;
  font-weight: 800;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.text.primary};
  margin: 15px 0 5px;
`;

const Email = styled(Name)`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  margin: 0;
`;

function PersonCard({ data }: { data: Person }, ref: any) {
  return (
    <Wrapper ref={ref}>
      <ImageWrapper>
        <img src={data.picture.large} />
      </ImageWrapper>
      <Name>
        {data.name.first} {data.name.last}
      </Name>
      <Email>{data.email}</Email>
    </Wrapper>
  );
}

export default forwardRef(PersonCard);
