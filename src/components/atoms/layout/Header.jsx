import { Link } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <SHeader>
      <Link to="/">HOME</Link>
      <Link to="/users">USERS</Link>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #fff;
`;
