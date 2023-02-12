import Image from "next/image";
import Link from "next/link";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";

function Card({ result }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          width={500}
          height={300}
          alt="image is not available"
          style={{ maxWith: "100%", height: "auto" }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        />
        <div className="p-2">
          <p className=" line-clamp-2">{result.overview}</p>
          <h2 className=" truncate text-lg font-bold">
            {result.title || result.name}
          </h2>
          <div className="flex items-center space-x-2">
            <span>{result.release_date || result.first_air_day}</span>
            <HandThumbUpIcon className=" w-4 h-4" />
            <span>{result.vote_count}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
