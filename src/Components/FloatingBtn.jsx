import { Link } from "react-router-dom";

const FloatingBtn = () => {
  return (
    <>
      <div className="fixed bottom-8 right-12 no-scrollbar">
        <button
          className="bg-indigo-500  hover:bg-indigo-600 text-white rounded-full py-3 px-3 shadow-lg"
          title="Add Templates"
        >
          <Link to="/editAdmin">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Link>
        </button>
      </div>
    </>
  );
};

export default FloatingBtn;
