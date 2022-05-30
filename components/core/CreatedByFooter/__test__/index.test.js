import { render, screen } from '@testing-library/react'
import CreatedByFooter from '../'

test('Created By Footer', () => {
    render(<CreatedByFooter/>)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeTruthy()
})