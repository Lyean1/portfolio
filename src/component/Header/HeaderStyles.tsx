import styled from "styled-components";

interface HeaderStylesProps {
  display?: string;
  alignItems?: string;
  color?: string;
}

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Div2 = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Div3 = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a<HeaderStylesProps>`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #222;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #fff;
    background-color: #222;
  }

  ${({ display, alignItems, color }) => ({
    display,
    alignItems,
    color,
  })}
`;

const SocialIcons = styled.a<HeaderStylesProps>`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #222;
    background-color: #fff;
  }

  ${({ display, alignItems, color }) => ({
    display,
    alignItems,
    color,
  })}
`;

export { Container, Div1, Div2, Div3, NavLink, SocialIcons };