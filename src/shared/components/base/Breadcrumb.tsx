import React from 'react'
import { usePathname } from 'next/navigation'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react-pro'
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons-pro";

type breadcrumb = {
  pathname?: string
  name?: boolean | string
  active?: boolean
}

type route = {
  path: string
  name: string
}

const routeNames = [
  { path: '/', name: 'Knowledge' },
  // { path: '/knowledge', name: 'Category' },
]

const humanize = (text: string) => {
  const string = text
    .split('-')
    .reduce(
      (accumulator, currentValue) =>
        accumulator + ' ' + currentValue[0].toUpperCase() + currentValue.slice(1),
    )
  return string[0].toUpperCase() + string.slice(1)
}

const getRouteName = (pathname: string, routes: route[]) => {
  const currentRoute = routes.find((route) => route.path === pathname)
  return currentRoute ? currentRoute.name : false
}

const getBreadcrumbs = (location: string) => {
  const breadcrumbs: breadcrumb[] = []
  location.split('/').reduce((prev, curr, index, array) => {
    const currentPathname = `${prev}/${curr}`
    const routeName = getRouteName(currentPathname, routeNames) || humanize(curr)
    breadcrumbs.push({
      pathname: currentPathname,
      name: routeName,
      active: index + 1 === array.length ? true : false,
    })
    return currentPathname
  })
  return breadcrumbs
}

const Breadcrumb = () => {
  const currentLocation = usePathname()

  const breadcrumbs = currentLocation && getBreadcrumbs(currentLocation)
  // const lastBreadcrumb = breadcrumbs && breadcrumbs.pop()
  return (
    <>
      {/*<div className="fs-2 fw-semibold">{lastBreadcrumb && lastBreadcrumb.name}</div>*/}
      <CBreadcrumb className="mb-4">
        <CBreadcrumbItem href="/">
          <CIcon icon={icon.cilHome} />
        </CBreadcrumbItem>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            return (
              <CBreadcrumbItem
                {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
                key={index}
              >
                {breadcrumb.name}
              </CBreadcrumbItem>
            )
          })}
      </CBreadcrumb>
    </>
  )
}

export default React.memo(Breadcrumb)
