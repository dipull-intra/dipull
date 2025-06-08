import React from "react";

const Search = () => {
  return (
    <button className="button-real-only-scale group">
      <div className="flex flex-col gap-2 w-xs">
        <img
          src="https://i.ytimg.com/vi/b8ezAbI4H-M/sddefault.jpg"
          alt="기상송 검색 썸네일"
          className="object-cover w-full aspect-video h-full bg-key/5 rounded-xl group-hover:opacity-80"
        />
        <div className="flex flex-col gap-1">
          <p className="text-ellipsis font-semibold line-clamp-1 group-hover:underline">
            [11회 풀버전] 유다빈밴드 - 좋지 아니한가 @ FINAL ROUND Full ver.#GreatSeoulInvasion EP.11
          </p>
          <p className="font-normal text-xs group-hover:underline">조회수 118,021회 · 2년 전</p>
        </div>
      </div>
    </button>
  );
};

export default Search;