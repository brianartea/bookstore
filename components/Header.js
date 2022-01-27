export default function Header() {
  return (
    <div className="relative z-[2] bg-white dark:bg-zinc-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Knowledge is power and Freedom
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-200">
            Start listening for free, then upgrade your plan to listen to more
            titles. Account plans unlock additional features.
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center w-full">
          <a
            href="#"
            className="mt-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-4 border dark:border-gray-400 dark:hover:border-gray-200 rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-zinc-900 dark:hover:bg-black transition duration-150 ease-in-out"
          >
            Start your subscription today
          </a>
        </div>
      </div>
    </div>
  );
}
