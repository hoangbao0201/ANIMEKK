import ListEpisode from "@/components/modules/MovieTemplate/ListEpisode";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            {children}
        </main>
    );
}
