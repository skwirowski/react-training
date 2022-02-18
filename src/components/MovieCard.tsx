import { Description, DescriptionWrapper, Image, SecondaryTitle, Title, Wrapper } from 'components/MovieCardStyles';
import Movie from '../interfaces/Movie';

export default function MovieCard({ data, isCentered }: { data: Movie, isCentered: boolean } ) {
  // theme provider in styled components
  // infinite scroll native solution
  return (
    <Wrapper>
      <Image src={data.image} />
      <Title isCentered>{data.title}</Title>
      <SecondaryTitle isCentered>{data.original_title}</SecondaryTitle>
      <DescriptionWrapper>
        <Description>{data.description}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
}
