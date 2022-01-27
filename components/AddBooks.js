// IMPORT CONTEXT ----------------------------------------------------------------
import { useContext } from "react";
import { updatingBookContext } from "../helpers/Context";

export default function AddBooks({ addBook }) {
  // NOTE: CONTEXT STATE FOR NEW BOOK INFORMATION
  const {
    newTitle,
    newPrice,
    newImage,
    setNewTitle,
    setNewPrice,
    setNewImage,
  } = useContext(updatingBookContext);

  return (
    <form className="py-16 space-y-8 divide-y bg-gray-50 dark:bg-zinc-800 divide-gray-200">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-xl leading-6 font-medium text-gray-900 dark:text-gray-300">
                Add a book to the collection
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Book Title
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 dark:text-gray-200 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-zinc-900 text-gray-500 sm:text-sm">
                    Book Title
                  </span>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    autoComplete="username"
                    placeholder="Type Book Title Here"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-black dark:border-gray-500 dark:text-gray-200 dark:focus:ring-gray-200 dark:focus:border-gray-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Book Price
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 dark:text-gray-200 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-zinc-900 text-gray-500 sm:text-sm">
                    $
                  </span>
                  <input
                    type="number"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    autoComplete="username"
                    placeholder="45.99"
                    className="flex-1 focus:ring-indigo-500 dark:placeholder:text-gray-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-black dark:border-gray-500 dark:text-gray-200 dark:focus:ring-gray-200 dark:focus:border-gray-200"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Book Cover
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 dark:text-gray-200 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-zinc-900 text-gray-500 sm:text-sm">
                    Image Url
                  </span>
                  <input
                    type="text"
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
                    autoComplete="username"
                    placeholder="https://www.image.jpeg"
                    className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 dark:bg-black dark:border-gray-500 dark:text-gray-200 dark:focus:ring-gray-200 dark:focus:border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-start">
            <button
              type="submit"
              onClick={addBook}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:border-gray-600 dark:hover:border-gray-200 dark:bg-black dark:text-gray-300 dark:hover:bg-black"
            >
              Add Book
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
