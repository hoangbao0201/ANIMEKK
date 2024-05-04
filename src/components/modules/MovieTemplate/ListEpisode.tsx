"use client"

import Link from "next/link";
import { ChangeEvent, useState } from "react";

const ListEpisode = () => {
    const [chapterSearch, setChapterSearch] = useState("");

    const eventOnchangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const chapter = e.target.value;

        setChapterSearch(chapter);
    };

    return (
        <div>
            <h2 className="font-semibold text-lg mb-3">Dách sách tập</h2>
            <div className="mb-3">
                <h4 className="font-semibold mb-1">Tìm tập nhanh </h4>
                <input
                    value={chapterSearch}
                    onChange={eventOnchangeValue}
                    className="outline-none focus:border border-gray-500 h-[36px] py-2 px-3 bg-gray-800 rounded-md"
                />
            </div>
            <div className="grid lg:grid-cols-12 md:grid-cols-5 grid-cols-4 gap-2 h-[150px] pr-2 overflow-y-auto">
                {Array.from({ length: 500 }, (_, i) => 499 - i).map((chap) => {
                    return (
                        <Link
                            key={chap}
                            href={"/"}
                            style={{
                                display: `${
                                    chapterSearch.trim() === "" ||
                                    String(chap).includes(String(chapterSearch))
                                        ? ""
                                        : "none"
                                }`,
                            }}
                        >
                            <div className="text-center py-1 rounded-md bg-gray-800">
                                {chap}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ListEpisode;
