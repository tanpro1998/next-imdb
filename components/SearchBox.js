"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className=" flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Search keywords..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button
        type="submit"
        disabled={!search}
        className=" text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
