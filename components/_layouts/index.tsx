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

export const FourColumnGrid = ({
    children,
    addClass = "",
    mobileColumns = 2
}: {
        children: any,
        addClass?: string,
        mobileColumns?: number
}) => {
    return (
        <section
            className={cx("grid items-center", {
                ['grid-cols-2']: mobileColumns === 2,
                ['grid-cols-4']: mobileColumns === 4,
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