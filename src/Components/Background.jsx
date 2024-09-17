import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed w-full h-full bg-slate-200">
        <div className="w-full flex justify-center pt-28 text-3xl font-semibold">
          документ
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl tracking-tighter leading-none font-semibold">
          DOCS.
        </div>
      </div>
    </>
  );
};

export default Background;
