import Image from 'next/image'

const CreatedByFooter = () => {

    return (
        <footer
            className="flex justify-center p-5"
            role="contentinfo"
        >
            <a
            href="https://alexbeciana.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-stretch text-lg"
            >
            Created by{' '}
            <span
                className="self-center ml-2"
            >
                <img src='/profile-pic.png' alt="Abeciana Logo" width={32} height={32} />
            </span>
                <div className="ml-2">Alexander Beciana</div>
            </a>
        </footer>
    )
}

export default CreatedByFooter