function Feature() {
    
return(

    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
       Finance Guru Features
      </h1>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 pl-20">
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-4 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Budgeting
            </h2>
            <p className="leading-relaxed text-base">
             Set monthly budgets and stick to them 
             <br className="hidden lg:inline-block" />
             to save more.
            </p>
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-4 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx={6} cy={6} r={3} />
              <circle cx={6} cy={18} r={3} />
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Expense Tracking
            </h2>
            <p className="leading-relaxed text-base">
            Easily track yoyur daily expenses and see
            <br className="hidden lg:inline-block" />
             where your money goes.
            </p>
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-blue-500 mb-4 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Financial Goals 
            </h2>
            <p className="leading-relaxed text-base">
              Set and achieve your financial goals with
              <br className="hidden lg:inline-block" />
               personalized tips and insights.
            </p>
            <a className="mt-3 text-blue-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

);

}

export default Feature;
