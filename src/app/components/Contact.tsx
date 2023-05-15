'use client';

import { Container, H2, Text } from './styles';

export default function ContactComponent(): JSX.Element {
  return (
    <Container id={'contact'}>
      <H2>Contact</H2>
      <Text>
        Get in touch with us now to obtain further information and schedule a
        personal consultation. Our dedicated team is ready to assist you.
      </Text>
      <Text>
        <strong>Call us now at: +20 (0) 1234 5678900.</strong>
      </Text>
    </Container>
  );
}
