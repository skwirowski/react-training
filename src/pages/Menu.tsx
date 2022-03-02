import routes from "config/routes";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 0;
`;

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #000;
  padding: 1px 6px;
`;

export default function Menu() {
  return (
    <div>
      <Wrapper>
        <Button>
          <StyledLink to={routes.home}>Home</StyledLink>
        </Button>
        <Button>
          <StyledLink to={routes.movies}>Movies</StyledLink>
        </Button>
        <Button>
          <StyledLink to={routes.people}>People</StyledLink>
        </Button>
        <Button>
          <StyledLink to={routes.video}>Video</StyledLink>
        </Button>
      </Wrapper>
      <Outlet />
    </div>
  );
}
