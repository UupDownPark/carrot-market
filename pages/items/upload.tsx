import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <div className="w-full flex items-center cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 justify-center border-2 border-dashed h-48 rounded-md border-gray-300">
          <label>
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
      </div>
      <div className="my-5">
        <label
          htmlFor="price"
          className=" mb-1 block text-gray-500 font-medium text-sm "
        >
          Price
        </label>
        <div className="rounded-md relative shadow-sm flex items-center">
          <div className="absolute pointer-events-none left-0 pl-3 flex items-center justify-center">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            className="pl-7 w-full border border-gray-300 appearance-none rounded-md shadow-sm focus:outline-none placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute pointer-events-none right-0 pr-3 flex items-center">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className=" mb-1 block text-gray-500 font-medium text-sm "
        >
          Description
        </label>

        <textarea
          id="description"
          className="mt-1 w-full border border-gray-300 appearance-none rounded-md shadow-sm focus:outline-none placeholder-gray-500 focus:ring-orange-500 focus:border-orange-500"
          rows={4}
        />
      </div>
      <button className="bg-orange-500 hover:bg-orange-600 rounded-md shadow-sm px-3 py-2 font-medium text-white focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mt-6 focus:outline-none w-full">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
