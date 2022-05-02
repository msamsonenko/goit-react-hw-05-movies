import {
  MovieContainer,
  ContentWrapper,
  MovieTitle,
  ListContainer,
  List,
  ListItem,
  Overview,
} from './MovieCard.styled';

export default function MovieCard({ movie }) {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    popularity,
    overview,
  } = movie;
  return (
    <MovieContainer>
      <ContentWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={title}
        />
      </ContentWrapper>
      <ContentWrapper>
        <MovieTitle>{title}</MovieTitle>
        <ListContainer>
          <List>
            <ListItem>Release date</ListItem>
            <ListItem>Vote</ListItem>
            <ListItem>Popularity</ListItem>
          </List>
          <List>
            <ListItem>{release_date}</ListItem>
            <ListItem>{vote_average}</ListItem>
            <ListItem>{popularity}</ListItem>
          </List>
        </ListContainer>
        <Overview>Overview</Overview>
        <p>{overview}</p>
      </ContentWrapper>
    </MovieContainer>
  );
}
