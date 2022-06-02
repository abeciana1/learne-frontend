import cx from 'classnames'

const TwoColumn = ({ children, addClass="" }: { children: any, addClass?:string }) => {
    
    return (
        <section
            className={cx("grid grid cols-1 md:grid-cols-2 items-center", {
                [addClass]: addClass
            })}
        >
            { children }
        </section>
    )
}

export default TwoColumn