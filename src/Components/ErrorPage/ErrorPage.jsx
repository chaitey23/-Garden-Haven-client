import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-center px-4">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-base-100 hover:bg-base-100 text-base-content px-6 py-2 rounded-lg transition"
      >
        Go Home
      </Link>
    </div>
    );
};

export default ErrorPage;