import cx from 'classnames'

interface PropListI {
    [key: string]: any;
}

const ValuePropList = ( { dataSource, addClass="" } : PropListI ) => (
        <ul
            className={cx({
                [addClass]: addClass
            })}
        >
            {dataSource.map(({ image, heading, body }: { image: string; heading: string; body: string;}) => {
                return (
                    <li
                        className="flex items-center my-2"
                    >
                        <img
                            src={image}
                        />
                        <div
                            className="font-bold text-xl ml-5"
                        >{heading}
                            <span
                                className="ml-1 font-normal"
                            >
                                {body}
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    )

export default ValuePropList