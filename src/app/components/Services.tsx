'use client';

import { Container, H2, Text } from './styles';
import { services } from '../data';
import { styled } from 'styled-components';

export default function ServicesComponent(): JSX.Element {
  return (
    <Container id={'services'}>
      <H2>Services</H2>
      <Text>
        Our experienced dive instructors offer you high-quality training for
        your diving adventure. We support you in various areas, including:
      </Text>
      <List>
        {services.map((service: string) => (
          <li key={service}>{service}</li>
        ))}
      </List>
      <Text>
        Our diving school is here to make your diving experience unforgettable
        with our expertise!
      </Text>
    </Container>
  );
}

const List = styled.ul`
  color: #0f232e;
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: center;

  li {
    margin: 15px 0;
  }
`;
