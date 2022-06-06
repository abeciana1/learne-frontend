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

export const SubSectionHeaderH3 = ({ children }: { children: string }) => {
    return (
        <h3
            className="text-4xl font-medium text-altBlack leading-snug"
        >
            { children }
        </h3>
    )
}

export const TaglineHeaderH4 = ({ children }: { children: string }) => {
    return (
        <h4
            className="text-3xl font-normal text-altBlack leading-snug"
        >
            { children }
        </h4>
    )
}