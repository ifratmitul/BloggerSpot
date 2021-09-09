export default function LoadingComponent() {
  return (
    <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 h-screen z-40 flex flex-wrap content-center justify-center">
      <svg
        className="animate-spin h-5 w-5 mr-3 bg-gradient-to-r from-green-400 to-blue-500 sm:h-25 sm:w-25 z-50"
        viewBox="0 0 24 24"
      ></svg>
    </div>
  );
}
