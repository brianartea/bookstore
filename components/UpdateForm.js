// REACT HOOKS & CONTEXT ----------------------------------------------------------------
import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { updatingBookContext } from "../helpers/Context";

// ICONS ----------------------------------------------------------------
import { RefreshIcon } from "@heroicons/react/outline";

function UpdateForm({ updateBook, resetBookId }) {
  const {
    isUpdating,
    setIsUpdating,
    newTitle,
    newPrice,
    newImage,
    setNewTitle,
    setNewPrice,
    setNewImage,
  } = useContext(updatingBookContext);

  return (
    <Transition.Root show={isUpdating} as={Fragment}>
      {/* NOTE: isUPDATING IS REQUIRED TO KNOW WHEN THE MODAL SHOULD OPEN */}
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => setIsUpdating(false, resetBookId())}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 dark:bg-black bg-opacity-75 dark:bg-opacity-90 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom border dark:border-gray-600 bg-white dark:bg-zinc-900 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-black">
                  <RefreshIcon
                    className="h-6 w-6 text-green-600 dark:text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 space-y-3 text-center sm:mt-5">
                  <div className="flex flex-col text-left">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Book title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 dark:text-gray-200 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-zinc-900 text-gray-500 sm:text-sm">
                        Name
                      </span>
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="dark:bg-black dark:border-gray-600 dark:text-gray-200 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 dark:focus:ring-gray-200 focus:border-gray-200 border-gray-300 "
                        placeholder="Type Book Title Here"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Price
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 dark:text-gray-200 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-zinc-900 text-gray-500 sm:text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        value={newPrice}
                        onChange={(e) => setNewPrice(e.target.value)}
                        name="company-website"
                        className="dark:bg-black dark:border-gray-600 dark:text-gray-200 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 dark:focus:ring-gray-200 focus:border-gray-200 sm:text-sm border-gray-300"
                        placeholder="45.99"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col text-left">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                    >
                      Book Cover
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 dark:text-gray-200 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-zinc-900 text-gray-500 sm:text-sm">
                        Image url
                      </span>
                      <input
                        type="text"
                        value={newImage}
                        onChange={(e) => setNewImage(e.target.value)}
                        name="company-website"
                        id="company-website"
                        className="dark:bg-black dark:border-gray-600 dark:text-gray-200 flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 dark:focus:ring-gray-200 focus:border-gray-200 sm:text-sm border-gray-300"
                        placeholder="https://www.image.jpeg"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Copy and paste your image url above.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  onClick={updateBook}
                  className="inline-flex justify-center w-full rounded-md border dark:border-gray-600 dark:hover:border-gray-200 shadow-sm px-4 py-2 bg-indigo-600 dark:bg-black text-base font-medium text-white dark:text-gray-300 hover:bg-indigo-700 dark:hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                >
                  Confirm Updates
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default UpdateForm;
