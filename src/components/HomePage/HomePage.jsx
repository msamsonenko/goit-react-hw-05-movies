import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Movie Finder</h1>
      </div>
      <Navigation />
      <Outlet />
    </>
  );
}
