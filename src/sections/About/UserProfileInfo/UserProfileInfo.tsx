import { UserGithubData } from '@types';
import Image from 'next/image';
import React, { useEffect } from 'react';
import {
  loadScrollTrigger,
  SectionText,
} from '../../../styles/GlobalComponents';
import {
  Container,
  ProfileImageContainer,
  Stat,
  StatNumber,
  StatsContainer,
  StatTitle,
  Username,
} from './UserProfileInfoStyles';

const UserProfileInfo: React.FC<{
  userData: UserGithubData;
  brief: string;
}> = ({ userData, brief }) => {
  useEffect(() => {
    loadScrollTrigger();
  }, []);

  return (
    <Container>
      <ProfileImageContainer id="gs_reveal">
        <Image
          src={userData?.avatar_url}
          alt="Avatar"
          width={150}
          height={150}
          loader={() => userData?.avatar_url}
          unoptimized
        />
      </ProfileImageContainer>
      <h2 id="gs_reveal">{userData?.name}</h2>
      <Username
        href={userData?.html_url}
        target="_blank"
        rel="noreferrer"
        id="gs_reveal"
      >
        <span>@{userData?.login}</span>
      </Username>
    </Container>
  );
};

export default UserProfileInfo;
