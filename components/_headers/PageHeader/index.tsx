import React from 'react'
import { PageHeaderH1 } from '../../_headings'

interface IPageHeader {
    header: string;
    tagline: string;
}

const PageHeader = ({
    header,
    tagline
}: IPageHeader) => {

    return (
        <>
            <PageHeaderH1>{header}</PageHeaderH1>
            <div
                className="my-5 text-4xl leading-snug"
            >{tagline}</div>
        </>
    )
}

export default PageHeader