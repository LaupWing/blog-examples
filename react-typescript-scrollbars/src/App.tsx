function App() {
    return (
        <main className="w-screen h-screen bg-slate-900 flex justify-center items-center">
            <div className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300 h-32 overflow-y-scroll">
                <div className="h-64 flex w-10"></div>
            </div>
            <div className="scrollbar scrollbar-thumb-sky-700 scrollbar-track-emerald-300 h-32 overflow-y-scroll">
                <div className="h-64 flex w-10"></div>
            </div>
            <div className="scrollbar scrollbar-thumb-emerald-600 scrollbar-track-emerald-300 h-32 scrollbar-thumb-rounded-full overflow-y-scroll">
                <div className="h-64 flex w-10"></div>
            </div>
            <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 h-32 overflow-y-scroll">
                <div className="h-64 w-10 "></div>
            </div>
        </main>
    )
}

export default App
