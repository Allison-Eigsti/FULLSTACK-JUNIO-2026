function ArticuloCard({ title, content }) {
    return(
        <>
            <div className="w-full overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 p-8 flex flex-col gap-4">
                <h3 className="font-sans text-base font-bold md:text-lg lg:text-xl">{title}</h3>
                {content}
            </div>
        </>
    )
}

export default ArticuloCard