import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="grid gridcols-1 justify-center justify-items-center">
      <h1>ROOT</h1>
      <br />
      <Outlet />
    </div>
  );
}
