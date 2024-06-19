import { Link } from "react-router-dom";

export default function Button({ text, type, to }) {
  switch (type) {
    case "customizedBlack":
      return (
        <Link
          to={to}
          className={`bg-black w-full hover:bg-opacity-90 hover:text-opacity-85 rounded-xl text-center lg:px-2 lg:py-2 px-2 py-3 text-white  border border-black shadow-md`}
        >
          {text}
        </Link>
      );

    case "customizedWhite":
      return (
        <Link
          to={to}
          className={`bg-white w-full hover:text-opacity-30 rounded-xl text-center lg:px-2 lg:py-2 px-2 py-3 text-black  border border-black shadow-md`}
        >
          {text}
        </Link>
      );
  }
}
