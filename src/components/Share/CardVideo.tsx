import Image from "next/image";
import Link from "next/link";
import IconPlay from "../modules/Icons/IconPlay";

interface CardVideoProps {
    video: any;
}
const CardVideo = ({ video }: CardVideoProps) => {
    return (
        <figure>
            <div className="">
                <div className="relative text-center rounded-sm overflow-hidden mb-2">
                    <Link
                        title={`Phim ${video?.title}`}
                        href={`/phim/${video?.slug}-${video?.videoId}`}
                    >
                        <div className="relative [&>div]:hover:opacity-100 [&>div]:hover:bg-black/30 [&>div>div]:hover:scale-100">
                            <span className="absolute top-2 left-2 text-sm font-semibold bg-green-600 rounded-sm px-2">9.4</span>
                            <div className="transition-all opacity-0 absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                                <div className="transition-all w-16 h-16 scale-75 flex-shrink-0 bg-black/80 rounded-full">
                                    <IconPlay className="fill-white w-16 h-16 p-5 translate-x-[2px]"/>
                                </div>
                            </div>
                            <Image
                                unoptimized
                                width={200}
                                height={300}
                                loading="lazy"
                                key={`${video?.videoId}`}
                                src={`${video?.thumbnail}`}
                                alt={`Phim ${video?.title}`}
                                className="w-full h-full transition-all rounded-xl object-cover bg-gray-500 align-middle"
                            />
                        </div>
                    </Link>
                </div>
                <div className="">
                    <Link
                        href={`/phim/${video?.slug}-${video?.videoId}`}
                        title={video?.title}
                    >
                        <h3 className="text-base line-clamp-2 font-semibold">
                            {video?.title}
                        </h3>
                    </Link>
                </div>
            </div>
        </figure>
    );
};

export default CardVideo;
