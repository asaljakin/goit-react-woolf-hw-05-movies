import { NavLink, Outlet } from 'react-router-dom';
import './MainLayouts.css';
import { Suspense } from 'react';
import { RingLoader } from 'react-spinners';

function MainLayout() {
  return (
    <>
      <header>
        <nav className="main-menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <RingLoader
            color="rgb(255, 123, 0)"
            size={120}
            speedMultiplier={0.5}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export default MainLayout;
