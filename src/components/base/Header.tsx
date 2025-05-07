import {JSX, useEffect, useRef} from 'react'

import {
  CContainer,
  CForm,
  CFormInput,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CInputGroup,
  CInputGroupText,
  useColorModes,
  CNavItem,
  CNavLink,
  CNav,

} from '@coreui/react-pro'
import {
  cilContrast,
  cilMoon,
  cilSearch,
  cilSun,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const Header = (): JSX.Element => {
  const headerRef = useRef<HTMLDivElement>(null)
  const { colorMode, setColorMode } = useColorModes('theme-modern')

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="px-4" fluid>
        <CNav as="nav" variant="pills" className="flex-column flex-sm-row">
          <CNavItem>
            <CNavLink href="/">Knowledge Base</CNavLink>
          </CNavItem>
          {/*<CNavItem>*/}
          {/*  <CNavLink href="/knowledge">Knowledge Base</CNavLink>*/}
          {/*</CNavItem>*/}
          {/*<CDropdown variant="nav-item">*/}
          {/*  <CDropdownToggle color="secondary">Knowledge Base</CDropdownToggle>*/}
          {/*  <CDropdownMenu>*/}
          {/*    <CDropdownItem href="/category">Category</CDropdownItem>*/}
          {/*    <CDropdownItem href="#">Another action</CDropdownItem>*/}
          {/*    <CDropdownItem href="#">Something else here</CDropdownItem>*/}
          {/*  </CDropdownMenu>*/}
          {/*</CDropdown>*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink href="/articles">Articles</CNavLink>*/}
          {/*</CNavItem>*/}
          {/*<CNavItem>*/}
          {/*  <CNavLink href="/faq">FAQ</CNavLink>*/}
          {/*</CNavItem>*/}
        </CNav>
        <CHeaderNav className="d-none d-md-flex ms-auto">
          <CForm className="d-none d-sm-flex">
            <CInputGroup>
              <CInputGroupText id="search-addon" className="bg-body-secondary border-0 px-1">
                <CIcon icon={cilSearch} size="lg" className="my-1 mx-2 text-body-secondary" />
              </CInputGroupText>
              <CFormInput
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                className="bg-body-secondary border-0"
              />
            </CInputGroup>
          </CForm>
        </CHeaderNav>
        <CHeaderNav className="ms-auto ms-md-0">
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default Header
