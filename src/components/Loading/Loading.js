function Loading() {
  return (
    <div className="absolute bg-slate-700 bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-screen  fixed left-[50%] top-[10%]">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-orange-700 animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
