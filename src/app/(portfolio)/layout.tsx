
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-violet-300">
            <div className="px-2 sm:px-6">
                {children}
            </div>
        </main>
    );
}
