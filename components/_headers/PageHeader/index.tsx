import React from 'react'
import cx from 'classnames'
import DefaultMargin from '../../_layouts/DefaultMargin'

interface IPageHeader {
    header: string;
    tagline: string;
    ctaButtonColor: string;
    ctaButtonText: string
    href: string;
}

const PageHeader = ({
    header,
    tagline
}: IPageHeader) => {

    return (
        <DefaultMargin>

        </DefaultMargin>
    )
}

export default PageHeader