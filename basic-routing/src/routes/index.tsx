import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className="grid justify-items-center justify-center">
      <h2>I'm the index page!</h2>
      <div>
        <button className="p-2 mx-2 bg-slate-100">
          <Link to="/page-one">To page one!</Link>
        </button>
        <button className="p-2 mx-2 bg-slate-100">
          <Link to="/page-two">To page two!</Link>
        </button>
      </div>
    </div>
  );
}
