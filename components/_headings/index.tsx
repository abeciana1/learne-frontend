export const PageHeaderH1 = ({ children }:{children: string}) => {
    return (
        <h1 className="text-8xl font-bold text-altBlack">{children}</h1>
    )
}

export const SectionHeaderH2 = ({ children }: { children: string }) => {
    return (
        <h2
            className="text-7xl font-bold text-altBlack"
        >
            { children }
        </h2>
    )
}

