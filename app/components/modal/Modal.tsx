import React from "react";

const Modal = ({ show, onClose }: {show: any, onClose: any}) => {
  if (!show) {
    return null;
  }
  if (show) {
    return (
      <>
        <div className="flex justify-center absolute h-screen w-screen top-0 bottom-0 right-0 left-0">
          <div className="absolute h-[300px] w-[500px] mt-[15%] bg-white shadow-lg rounded p-5">
            <div className="w-full space-y-5">
              <div className="w-full">
                <input
                  className="w-full border-2 rounded border-gray-700 text-gray-900 focus:border-gray-900 p-3"
                  type="text"
                  placeholder="TokenID"
                />
              </div>
              <div className="mt-2 w-full">
                <input
                  className="w-full border-2 rounded border-gray-700 text-gray-900 focus:border-gray-900 p-3"
                  type="text"
                  placeholder="Price"
                />
              </div>
              <div>
                <button
                  onClick={onClose}
                  className="mt-2 py-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 text-sm font-semibold leading-6
             text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
                >
                  Close
                </button>
                <button
                  className="mt-2 py-3 flex w-full justify-center rounded-md bg-indigo-600 px-3 text-sm font-semibold leading-6
             text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-indigo-600"
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Modal;
