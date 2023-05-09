import * as React from "react";

export const HomeFeature = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[200px] flex-col bg-green-500">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center text-center">
            header
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-250px)] flex-col overflow-scroll bg-white p-2">
        <div className="container mx-auto max-w-screen-2xl p-4">
          <div className="grid grid-cols-12 gap-3">
            {[...Array(100)].map((e, i) => (
              <div
                key={i}
                className="col-span-12 flex h-64 flex-col border border-slate-200 p-2 md:col-span-6 lg:col-span-4 xl:col-span-3"
              >
                some elements
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-16  h-[50px] flex-col bg-red-500">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center text-center">
            footer
          </div>
        </div>
      </div>
    </div>
  );
};
