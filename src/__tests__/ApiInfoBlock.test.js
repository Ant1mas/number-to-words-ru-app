/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import ApiInfoBlock from 'components/ApiInfoBlock'

it('has elements', () => {
  render(<ApiInfoBlock />)
  const title = screen.getByRole('heading', {
    name: /api/i,
  })
  const link = screen.getByRole('link', {
    name: /api_block_link_text/i,
  })
  expect(title).toBeInTheDocument()
  expect(link).toBeInTheDocument()
})
