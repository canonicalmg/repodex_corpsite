import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-black-800 py-12 flex flex-col justify-center sm:py-5">
      <div className="w-full" style={{ paddingLeft: '10em', paddingRight: '10em' }}>
        <h1 className="text-3xl font-semibold mb-4 text-center">Select the right plan for your team</h1>
        <div className="flex flex-wrap -mx-2">
          {/* Starter Card */}
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Starter</h4>
              <h1 className="text-3xl font-extrabold mb-3">$100/mo</h1>
              <ul className="mb-6">
                {/* Sample features for Starter */}
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Feature 1
                </li>
                {/* Add more features as needed */}
              </ul>
              <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full">Get Started</button>
            </div>
          </div>

          {/* Pro Card */}
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Pro</h4>
              <h1 className="text-3xl font-extrabold mb-3">$200/mo</h1>
              <ul className="mb-6">
                {/* Sample features for Pro */}
                <li className="flex items-center mb-2">
                  {/* ... */}
                </li>
                {/* Add more features as needed */}
              </ul>
              <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full">Get Started</button>
            </div>
          </div>

          {/* Enterprise Card */}
          <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Enterprise</h4>
              <h1 className="text-3xl font-extrabold mb-3">$300/mo</h1>
              <ul className="mb-6">
                {/* Sample features for Enterprise */}
                <li className="flex items-center mb-2">
                  {/* ... */}
                </li>
                {/* Add more features as needed */}
              </ul>
              <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
