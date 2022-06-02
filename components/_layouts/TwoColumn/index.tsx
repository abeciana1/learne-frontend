
const TwoColumn = ({ children }: { children: any }) => {
    
    return (
        <section className="grid grid cols-1 md:grid-cols-2">
            { children }
        </section>
    )
}

export default TwoColumn