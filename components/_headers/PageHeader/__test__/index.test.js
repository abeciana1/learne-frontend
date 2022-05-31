import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageHeader from '../'

describe('PageHeader', () => {

    beforeEach(() => {
        render(
            <PageHeader
                header="Headline"
                tagline="Tagline text"
            />
        )
    })

    test('should render headline', () => {
        const headline = screen.getByRole('heading', { level: 1 })
        expect(headline).toBeInTheDocument()
    })

    test('should render headline text', () => {
        const headline = screen.getByRole('heading', { level: 1 })
        expect(headline).toHaveTextContent('Headline')
    })

    test('should render tagline', () => {
        const tagline = screen.getByText(/tagline text/i)
        expect(tagline).toBeInTheDocument()
    })
})

