import { Link } from 'react-router-dom';

export default function PageOne() {
  return (
    <div className="grid justify-items-center justify-center">
      <h2>I'm page one!</h2>
      <button className="p-2 mx-2 bg-slate-100">
        <Link to="/">Back to home!</Link>
      </button>
    </div>
  );
}
