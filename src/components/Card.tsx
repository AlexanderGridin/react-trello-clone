import { CardContainer } from "styles";

interface CardProps {
  text: string;
}

export const Card = ({ text }: CardProps): JSX.Element => (
  <CardContainer>{text}</CardContainer>
);
