import Image from 'next/image'

//* value propoisition images
import comingSoonImg from '/public/feature-list-images/coming_soon.svg'
import checkImg from '/public/feature-list-images/check.svg'
// import comingSoonImg from './feature-list-images/coming_soon.svg'
// import checkImg from './feature-list-images/check.svg'

interface PropListI {
    [key: string]: any;
}

const ValuePropList = ( { dataSource } : PropListI ) => {

    console.log(comingSoonImg);
    console.log(dataSource);
    return (
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
}

export default ValuePropList