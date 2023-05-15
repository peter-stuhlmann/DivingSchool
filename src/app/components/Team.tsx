'use client';

import Image from 'next/image';
import { styled } from 'styled-components';

import { team } from '../data';
import { TeamMember } from '../types';
import {
  Container as ContainerStyles,
  HeadingStyles,
  Text as TextStyles,
} from './styles';

export default function TeamComponent(): JSX.Element {
  return (
    <Container id={'team'}>
      <H2>Team</H2>
      <Text>
        Our team is comprised of skilled and enthusiastic professionals ready to
        take your adventure to the next level.
      </Text>
      {team.map((teamMember: TeamMember) => (
        <div key={teamMember.name}>
          <TeamMemberImage
            src={teamMember.img}
            width={220}
            height={220}
            alt={teamMember.name}
            title={teamMember.name}
          />
          <TeamMemberName>{teamMember.name}</TeamMemberName>
        </div>
      ))}
    </Container>
  );
}

const Container = styled(ContainerStyles)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  & > div {
    @media (max-width: 1180px) {
      flex: 0 0 50%;
      text-align: center;
      margin-bottom: 45px;
    }
  }
`;

const H2 = styled.h2`
  ${HeadingStyles}
  flex: 0 0 100%;
`;

const TeamMemberImage = styled(Image)`
  border-radius: 50%;

  @media (max-width: 650px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const TeamMemberName = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 20px 0 5px 0;
`;

const Text = styled(TextStyles)`
  flex: 0 0 100%;
  margin-bottom: 50px;
`;
