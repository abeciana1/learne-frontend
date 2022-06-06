import cx from 'classnames'

export const TwoColumnGrid = ({ children, addClass="" }: { children: any, addClass?:string }) => {
    
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



export const ButtonGroup = ({ children }: { children: any }) => {
    return (
        <div className="flex gap-10">
            { children }
        </div>
    )
}