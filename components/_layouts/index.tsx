import cx from 'classnames'

export const TwoColumn = ({ children, addClass="" }: { children: any, addClass?:string }) => {
    
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

// export const DefaultMargin = ( { children }:{ children:any } ) => {

//     return (
//         <
//             // className="px-5 lg:px-10"
//         >
//             {children}
//         </>
//     )
// }

export const ButtonGroup = ({ children }: { children: any }) => {
    return (
        <div className="flex gap-10">
            { children }
        </div>
    )
}