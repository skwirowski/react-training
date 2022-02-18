import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 600px;
  background-color: ${({ theme }) => theme.surface.background};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.surface.boxShadow};
  margin: 15px auto;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.span<{ isCentered?: boolean }>`
  font-size: 20px;
  font-weight: 800;
  display: block;
  text-align: ${({ isCentered }) => (isCentered ? "center" : "left")};
  color: ${({ theme }) => theme.text.primary};
  margin: 15px 0 5px;
`;

export const SecondaryTitle = styled(Title)`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text.secondary};
  margin: 0
`;

export const DescriptionWrapper = styled.div`
  padding: 15px;
`
export const Description = styled.span`
  font-size: 12px;
  font-weight: 100;
  display: block;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text.secondary};
`;