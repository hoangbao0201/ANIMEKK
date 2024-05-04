import Link from "next/link";
import Image from "next/image";

import IconPlay from "../Icons/IconPlay";
import ListEpisode from "./ListEpisode";

const listTag = [
    "Hành động",
    "Đối kháng 2D",
    "Chơi nhiều người",
    "Anime",
    "Đối kháng",
    "eSports",
    "Chơi đơn",
    "Hành động nhập vai",
    "Kỳ ảo",
    "Thi đấu",
    "Nhạc hay",
    "Nhiều người mạng cục bộ",
    "Chơi miễn phí",
];

const MovieTemplate = () => {
    return (
        <div className="md:flex">
            <div className="w-[259px] h-[340px] z-[2] flex-shrink-0 relative mx-auto md:mb-0 mb-5">
                <span className="absolute top-2 right-2 text-sm font-semibold bg-green-600 rounded-sm px-2">
                    9.4
                </span>
                <Image
                    unoptimized
                    width={200}
                    height={300}
                    loading="lazy"
                    key={`1`}
                    src={`/static/images/default/card-video.jpg`}
                    alt={`Phim `}
                    className="w-[259px] h-[340px] rounded-lg overflow-hidden object-cover bg-gray-500"
                />
            </div>
            <div className="min-h-[340px] md:px-6 pt-0">
                <h1 className="font-bold text-[27px] leading-[34px] mb-4 md:text-start text-center">
                    THANH GƯƠM DIỆT QUỶ: PHÉP MÀU TÌNH THÂN, CHO ĐẾN CHUYẾN ĐẶC
                    HUẤN CỦA ĐẠI TRỤ
                </h1>
                <div className="flex flex-wrap gap-1 mb-4">
                    {listTag.map((tag, index) => {
                        return (
                            <Link
                                key={index}
                                href={"/"}
                                className="text-sm leading-3 rounded-sm py-2 px-2 text-[#c6d4df] bg-[#c6d4df26]"
                            >
                                {tag}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex">
                    <Link
                        href={`/phim/demon-slayer-to-the-hashira-training-1/tap-1`}
                    >
                        <div className="flex items-center font-semibold bg-green-600 hover:bg-green-600/90 rounded-full px-4 py-2">
                            <IconPlay className="w-4 h-4 fill-white mr-2" />
                            Xem ngay
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MovieTemplate;
