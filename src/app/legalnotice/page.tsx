'use client';

import { styled } from 'styled-components';
import {
  Container as ContainerStyles,
  H2,
  Note,
  Text as TextStyles,
} from '../components/styles';

export default function LegalNotice(): JSX.Element {
  return (
    <Container>
      <Note>
        Note: This website is only provided as an example/template and does not
        represent a real diving school.
      </Note>
      <h2>Legal Notice</h2>
      <h3>Information according to § 5 TMG</h3>
      <Text>
        Diving School AquaVentures
        <br />
        Sample Street 8
        <br />
        12345 Sample City
      </Text>

      <h3>Represented by:</h3>
      <Text>John Doe</Text>

      <h3>Contact</h3>
      <Text>
        Phone: +20 (0) 1234 5678900
        <br />
        Email: <a href="mailto:contact@example.com">contact@example.com</a>
      </Text>

      <h3>EU Online Dispute Resolution</h3>
      <Text>
        The European Commission provides a platform for online dispute
        resolution (ODR):
        <br />
        <a href="https://ec.europa.eu/consumers/odr/">
          https://ec.europa.eu/consumers/odr/
        </a>
        .
      </Text>

      <Text>You can find our email address in the imprint above.</Text>

      <h3>Consumer Dispute Resolution / Universal Dispute Resolution Office</h3>
      <Text>
        We are neither willing nor obliged to participate in dispute resolution
        proceedings before a consumer arbitration board.
      </Text>
    </Container>
  );
}

const Container = styled(ContainerStyles)`
  padding-top: 100px;

  @media (max-width: 1180px) {
    padding-top: 155px;
  }

  @media (max-width: 480px) {
    padding-top: 58px;
  }
`;

const Text = styled(TextStyles)`
  text-align: left;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
