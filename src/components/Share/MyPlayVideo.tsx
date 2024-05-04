"use client"

import { useEffect } from "react";
import ReactPlayer from 'react-player'


const MyPlayVideo = () => {

    return (
        <div className="[&>div]:mx-auto">
            <ReactPlayer
                controls={true}
                config={{
                    file: {
                        forceHLS: true
                    }
                }}
                width='100%'
                height='100%'
                url={`https://animehay.vtut.me/m3u8/hls/61867.m3u8`}
                // url={`https://animehay.vtut.me/m3u8/hls/62369.m3u8`}
                // url={`https://pt.rapovideo.xyz/playlist/65fe25be43b16d18d3111fa6/master.m3u8`}
                // url={`https://rapovideo.xyz/playlist/65fe25bf61302604f9d6fdb8/master.m3u8`}
            />
        </div>
    );
};

export default MyPlayVideo;
