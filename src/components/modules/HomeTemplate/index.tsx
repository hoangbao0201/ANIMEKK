import { Fragment } from "react";

import CardVideo from "@/components/Share/CardVideo";
import CardVideoTop from "./CardVideoTop";

const HomeTemplate = () => {

    return (
        <div className="py-2 max-w-7xl w-full mx-auto">
            <div className="px-3">
                <div className="mb-3">
                    <h2 className="text-lg mb-2 font-bold">Anime xem nhiều</h2>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
                        {
                            [1,2,3,4,5,6].map((video, index) => {
                                return (
                                    <Fragment key={index}>
                                        <CardVideoTop
                                            video={{
                                                videoId: "1",
                                                slug: "demon-slayer-to-the-hashira-training",
                                                title: "THANH GƯƠM DIỆT QUỶ: PHÉP MÀU TÌNH THÂN, CHO ĐẾN CHUYẾN ĐẶC HUẤN CỦA ĐẠI TRỤ",
                                                thumbnail: "/static/images/default/card-video.jpg",
                                            }}
                                        />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="mb-3">
                    <h2 className="text-lg mb-2 font-bold">Anime mới nhất</h2>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-3">
                        {
                            [1,2,3,4,5,6].map((video, index) => {
                                return (
                                    <Fragment key={index}>
                                        <CardVideo
                                            video={{
                                                videoId: "1",
                                                slug: "demon-slayer-to-the-hashira-training",
                                                title: "THANH GƯƠM DIỆT QUỶ: PHÉP MÀU TÌNH THÂN, CHO ĐẾN CHUYẾN ĐẶC HUẤN CỦA ĐẠI TRỤ",
                                                thumbnail: "/static/images/default/card-video.jpg",
                                            }}
                                        />
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTemplate;