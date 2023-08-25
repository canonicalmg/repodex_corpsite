import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-black-800 mt-12 py-12 flex flex-col justify-center sm:py-5">
      <div className="w-full" style={{ paddingLeft: '5em', paddingRight: '5em' }}>
        <h1 className="text-3xl font-semibold mb-4 text-center">Select the right plan for your team</h1>
        <div className="flex flex-wrap -mx-2">
          {/* Free Card */}
          <div className="w-full md:w-1/4 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Free (Coming soon!)</h4>
              <h1 className="text-3xl font-extrabold mb-3">$0</h1>
              <ul className="mb-6">
                {/* Sample features for Starter */}
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    1 Repository
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Manual Code Scan (15/mo)
                </li>
              </ul>
              <div className="w-full flex justify-center">
              <a href="https://app.repodex.ai/register" className="inline-block">
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
                      >
                      Get Started
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div className="w-full md:w-1/4 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Starter</h4>
              <h1 className="text-3xl font-extrabold mb-3">$100/mo</h1>
              <p className="text-sm text-gray-400 mb-4 italic">You tell the bot what to do.</p>
              <ul className="mb-6">
                {/* Sample features for Starter */}
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    1 Repository
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Manual Code Scan (50/mo)
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Manual Create Pull Request (50/mo)
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Stack Trace Solver (50/mo)
                </li>
                <li className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Manual Code Reviews (50/mo)
                </li>
                <li className="flex items-center mb-2" title="Coming soon!">
                  <svg className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500">
                    Manual Jira/Github Ticket Solver (50/mo) - Coming soon!
                  </span>
                </li>
                {/* Add more features as needed */}
              </ul>
              <div className="w-full flex justify-center">
                <a href="https://app.repodex.ai/register" className="inline-block">
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full"
                      >
                      Get Started
                  </button>
                </a>
              </div>
              </div>
          </div>

          {/* Pro Card */}
          <div className="w-full md:w-1/4 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Pro</h4>
              <h1 className="text-3xl font-extrabold mb-3">$400/mo</h1>
              <p className="text-sm text-gray-400 mb-4 italic">The bot performs actions automatically.</p>
              <ul className="mb-6">
                {/* Sample features for Pro */}
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    4 Repositories
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Automatic Code Scan (100/mo)
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Automatic Create Pull Request (100/mo)
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Stack Trace Solver (100/mo)
                </li>
                <li className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Automatic Code Reviews (100/mo)
                </li>
                <li className="flex items-center mb-2" title="Coming soon!">
                  <svg className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500">
                    Automatic Jira/Github Ticket Solver (100/mo) - Coming soon!
                  </span>
                </li>
                {/* Add more features as needed */}
              </ul>
              <div className="w-full flex justify-center">
                <a href="https://app.repodex.ai/register" className="inline-block">
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full" 
                      >
                      Get Started
                  </button>
                </a>
              </div>
              </div>
          </div>

          {/* Enterprise Card */}
          <div className="w-full md:w-1/4 px-2 mb-4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-300">
              <h4 className="text-xl font-extrabold mb-1">Enterprise</h4>
              <h1 className="text-3xl font-extrabold mb-3">Custom</h1>
              <p className="text-sm text-gray-400 mb-4 italic">The bot performs actions automatically at scale.</p>
              <ul className="mb-6">
                {/* Sample features for Enterprise */}
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Unlimited Repositories
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Automatic Code Scan (Unlimited)
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Automatic Create Pull Request (Unlimited)
                </li>
                <li className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Stack Trace Solver (Unlimited)
                </li>
                <li className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-cyan-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Automatic Code Reviews (GPT4) (Unlimited)
                </li>
                <li className="flex items-center mb-2" title="Coming soon!">
                  <svg className="h-5 w-5 text-gray-500 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-500">
                    Automatic Jira/Github Ticket Solver (Unlimited) - Coming soon!
                  </span>
                </li>
                {/* Add more features as needed */}
              </ul>
              <div className="w-full flex justify-center">
                <a href="https://app.repodex.ai/register" className="inline-block">
                  <button className="btn-sm text-white bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full" >
                      Get Started
                  </button>
                </a>

              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
