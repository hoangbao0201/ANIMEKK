import ListEpisode from "@/components/modules/MovieTemplate/ListEpisode";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className="">
                <div className="relative min-h-[650px] mb-3">
                    <div
                        style={{
                            backgroundImage:
                                "URL('/static/images/default/card-video.jpg')",
                        }}
                        className="mask-banner"
                    ></div>
                    <div className="min-h-[650px] flex items-center">
                        <div className="max-w-5xl flex-1 mx-auto rounded-lg bg-[#0000004f] backdrop-blur-xl md:px-4 px-2 py-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="px-3 pt-4 pb-6 mb-4 rounded-lg bg-[#0000004f] backdrop-blur-xl">
                    <ListEpisode />
                </div>
            </div>
        </main>
    );
}
