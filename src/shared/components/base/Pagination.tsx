
import React from 'react'
import { CPagination, CPaginationItem } from '@coreui/react-pro'

export const Pagination = () => {
  return (
    <CPagination align="center" className="my-4" aria-label="Page navigation">
      <CPaginationItem disabled>Previous</CPaginationItem>
      <CPaginationItem>1</CPaginationItem>
      <CPaginationItem>2</CPaginationItem>
      <CPaginationItem>3</CPaginationItem>
      <CPaginationItem>Next</CPaginationItem>
    </CPagination>
  )
}
