import { CardContainer } from "styles";

interface CardProps {
  id: string;
  content: string;
}

export const Card = ({ content }: CardProps): JSX.Element => (
  <CardContainer>{content}</CardContainer>
);
