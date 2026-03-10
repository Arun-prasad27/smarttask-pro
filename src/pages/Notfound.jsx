import { Link } from "react-router-dom";
function Notfound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">

      <h1 className="text-6xl font-bold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>


    </div>
  );
}

export default Notfound;