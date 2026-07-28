function Header({title, navLinks}) {
    return (
        <>
            <nav className="bg-slate-900 text-white shadow-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold tracking-wide">{title}</h1>
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header