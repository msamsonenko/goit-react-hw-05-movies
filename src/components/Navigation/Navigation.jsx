import { Nav, Link } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="movies">Search</Link>
    </Nav>
  );
}
