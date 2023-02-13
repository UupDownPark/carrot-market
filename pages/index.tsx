import type { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div className="bg-pink-200 min-h-screen py-20 px-10 grid gap-10">
      <div className="flex justify-center items-center gap-36">
        <div className="bg-white p-6 w-96">
          <div className="my-5 ml-1 font-3xl">Weather</div>
          <div className="border-black border-2  rounded-xl mx-5 my-5 flex justify-between items-center p-5">
            <div className="flex flex-col">
              <span>Casius</span>
              <span>mars,12am</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div>85˙</div>
          </div>
          <div className="border-black border-2  rounded-xl mx-5 my-5 flex justify-between items-center p-5">
            <div className="flex flex-col">
              <span>Casius</span>
              <span>mars,12am</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div>85˙</div>
          </div>
          <div className="border-black border-2  rounded-xl mx-5 my-5 flex justify-between items-center p-5">
            <div className="flex flex-col">
              <span>Casius</span>
              <span>mars,12am</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div>85˙</div>
          </div>
          <div className="border-black border-2  rounded-xl mx-5 my-5 flex justify-between items-center p-5">
            <div className="flex flex-col">
              <span>Casius</span>
              <span>mars,12am</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div>85˙</div>
          </div>
          <button className="rounded-full bg-white border-2 border-black h-24 w-24 ml-20">
            +
          </button>
        </div>
        <div className="bg-white w-96 p-6 h-[100%]">
          <button className="border-black border-2 rounded-full h-12 w-12">
            X
          </button>
          <div className="text-xs">simple tag</div>
          <div className="text-2xl">work with best designer</div>
          <div className="grid grid-cols-2 gap-5">
            <div className="border-black border-2  rounded-xl h-24 w-24">1</div>
            <div className="border-black border-2 rounded-xl h-24 w-24">1</div>
            <div className="border-black border-2 rounded-xl h-24 w-24">1</div>
            <div className="border-black border-2 rounded-xl h-24 w-24">1</div>
          </div>
          <button className="rounded-xl bg-purple-400 ">let get it done</button>
        </div>
        <div className="bg-yellow-500 flex flex-col p-3 space-y-5">
          <div className="flex my-5">
            <button className="border-black border-2 rounded-full">←</button>
            <span className="font-semibold font-3xl">Friends</span>
          </div>
          <input
            placeholder="Search with love..."
            className="border-black border-2 rounded-xl"
          ></input>
          <div className="flex bg-white rounded-xl p-3">
            <div className="w-24 h-24 bg-gray-500 rounded-full" />
            <div className="flex flex-col">
              <span className="text-2xl">sangha park</span>
              <span className="text-xs">sangha park</span>
            </div>
          </div>
          <div className="flex bg-white rounded-xl p-3">
            <div className="w-24 h-24 bg-gray-500 rounded-full" />
            <div className="flex flex-col">
              <span className="text-2xl">sangha park</span>
              <span className="text-xs">sangha park</span>
            </div>
          </div>
          <div className="flex bg-white rounded-xl p-3">
            <div className="w-24 h-24 bg-gray-500 rounded-full" />
            <div className="flex flex-col">
              <span className="text-2xl">sangha park</span>
              <span className="text-xs">sangha park</span>
            </div>
          </div>
          <div className="flex bg-white rounded-xl p-3">
            <div className="w-24 h-24 bg-gray-500 rounded-full" />
            <div className="flex flex-col">
              <span className="text-2xl">sangha park</span>
              <span className="text-xs">sangha park</span>
            </div>
          </div>
          <div className="flex bg-white rounded-xl p-3">
            <div className="w-24 h-24 bg-gray-500 rounded-full" />
            <div className="flex flex-col">
              <span className="text-2xl">sangha park</span>
              <span className="text-xs">sangha park</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-slate-400 py-20 px-10 grid gap-10 min-h-screen">
    //   <div className="bg-white p-6 rounded-3xl shadow-xl">
    //     <span className="font-semibold text-2xl">Select Item</span>
    //     <div className="flex justify-between my-2">
    //       <span className="text-gray-500">Greay Chair</span>
    //       <span className="font-semibold">$19</span>
    //     </div>
    //     <div className="flex justify-between my-2">
    //       <span className="text-gray-500">Greay Chair</span>
    //       <span className="font-semibold">$19</span>
    //     </div>
    //     <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
    //       <span>Total</span>
    //       <span className="font-semibold">$10</span>
    //     </div>
    //     <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
    //       Checkout
    //     </div>
    //   </div>
    //   <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
    //     <div className="bg-blue-500 p-6 pb-14">
    //       <span className="text-white text-2xl">Profile</span>
    //     </div>
    //     <div className="rounded-3xl p-6 bg-white relative -top-5">
    //       <div className="flex relative -top-16 items-end justify-between">
    //         <div className="flex flex-col items-center">
    //           <span className="text-sm text-gray-500">Orders</span>
    //           <span className="font-medium">340</span>
    //         </div>
    //         <div className="h-24 w-24 bg-red-400 rounded-full" />
    //         <div className="flex flex-col items-center">
    //           <span className="text-sm text-gray-500">Spent</span>
    //           <span className="font-medium">$340</span>
    //         </div>
    //       </div>
    //       <div className="relative  flex flex-col items-center -mt-10 -mb-5">
    //         <span className="text-lg font-medium">Tony Molloy</span>
    //         <span className="text-sm text-gray-500">미국</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-white p-10 rounded-2xl shadow-xl">
    //     <div className="flex mb-5 justify-between items-center">
    //       <span>←</span>
    //       <div className="space-x-3">
    //         <span>★4.9</span>
    //         <span className="shadow-xl p-2 rounded-md">❤️</span>
    //       </div>
    //     </div>
    //     <div className="bg-zinc-400 h-72 mb-5" />
    //     <div>
    //       <span className="font-medium text-xl">Swoon Lounge</span>
    //       <span className="text-xs text-gray-500">Chair</span>
    //       <div className="mt-3 mb-5 flex justify-between items-center">
    //         <input type="radio" />
    //         <input type="radio" />
    //         <input type="radio" />
    //       </div>
    //       <div className="flex items-center space-x-5">
    //         <button className="p-1.5 rounded-lg bg-blue-200 justify-center items-center flex aspect-square w-10 font-medium text-gray-500">
    //           -
    //         </button>
    //         <span>1</span>
    //         <button className="p-1.5 rounded-lg bg-blue-200 justify-center items-center flex aspect-square w-10 font-medium text-gray-500">
    //           +
    //         </button>
    //       </div>
    //     </div>
    //     <div className="flex justify-between items-center">
    //       <span className="font-medium text-2xl">$450</span>
    //       <button className="bg-blue-500 text-center py-2 px-8 text-white rounded-xl">
    //         Add to cart
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
