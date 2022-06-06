import cx from 'classnames'

interface PropListI {
    [key: string]: any;
    className?: string;
}

const ValuePropList = ( { dataSource, className } : PropListI ) => (
        <ul>
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