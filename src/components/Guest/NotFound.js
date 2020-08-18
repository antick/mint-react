import React from 'react';

const Login = () => {
  const message = '404 - Page Not Found';

  return (
    <div className="flex h-screen">
      <div className="m-auto w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
        <h3 className="pt-4 text-xl font-bold text-center">{message}</h3>
        <div className="text-center mt-5">
          <a className="text-gray-700 hover:text-gray-900" href="/">Go Back</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
