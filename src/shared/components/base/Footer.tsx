import React from 'react'

import { CFooter } from '@coreui/react-pro'

const Footer = () => {
  return (
    <CFooter>
      <div>
        <a href="https://thuydx.pro" target="_blank" rel="noopener noreferrer">
          Knowledge
        </a>
        <span className="ms-1">&copy; 2025</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a
          href="https://thuydx.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          ZGS
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(Footer)
