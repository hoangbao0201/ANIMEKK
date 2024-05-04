
// import MyPlayVideo from "@/components/Share/MyPlayVideo";

import dynamic from "next/dynamic";

const MyPlayVideo = dynamic(() => import("@/components/Share/MyPlayVideo"), { ssr: false })

const MovieDetailTemplate = () => {
    return (
        <div>
            <div className="h-[650px] w-full">
                <MyPlayVideo />
            </div>
        </div>
    );
};

export default MovieDetailTemplate;

// https://stream.googleapiscdn.com/playlist/63ba82748a796c8ce4fb5000/playlist.m3u8
