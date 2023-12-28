function Loading() {
  return (
    <div class="absolute bg-slate-700 bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
      <div class="flex items-center">
        <div class="flex items-center justify-center h-screen  fixed left-[50%] top-[10%]">
          <div class="relative">
            <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-orange-700 animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
