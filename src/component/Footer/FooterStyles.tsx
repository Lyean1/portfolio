import styled from "styled-components";

interface FooterStylesProps {}

const FooterWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const LinkColumn = styled.div`
  margin-bottom: 2rem;
`;

const LinkTitle = styled.h4`
  font-family: sans-serif;
  font-size: 1rem;
  color: #222;
`;

const LinkItem = styled.a`
  font-family: sans-serif;
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    color: #222;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SocialContainer = styled.div`
  margin-right: 1rem;
`;

const SocialIcons = styled.a`
  color: #222;

  &:hover {
    color: #666;
  }
`;

export {
  FooterWrapper,
  LinkList,
  LinkColumn,
  LinkItem,
  LinkTitle,
  SocialIconsContainer,
  SocialContainer,
  SocialIcons,
};
