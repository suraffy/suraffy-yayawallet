const NotFound = () => {
  return (
    <div className="flex flex-col bg-gray-50 items-center justify-center mt-12 lg:mr-40 p-6">
      <h1 className="text-4xl font-bold mb-4 flex items-center gap-x-2">
        <span className="inline-block">Loading </span>
        <span
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></span>
      </h1>
    </div>
  );
};

export default NotFound;
