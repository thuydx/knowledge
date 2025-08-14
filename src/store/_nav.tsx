import React, {ElementType, JSX} from 'react'
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  // cilEnvelopeOpen,
  cilGrid,
  // cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  // cilSpreadsheet,
  cilStar,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro'

export type Badge = {
  color: string
  text: string
}

export type NavItem = {
  component: string | ElementType
  name: string | JSX.Element
  icon?: string | JSX.Element
  badge?: Badge
  href?: string
  items?: NavItem[]
}

const _nav = [
  {
    component: CNavItem,
    // name: 'Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info-gradient',
      // text: 'NEW',
    },
    href: '/',
  },
  {
    component: CNavTitle,
    // name: 'Theme',
  },
  {
    component: CNavItem,
    // name: 'Colors',
    // href: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    // name: 'Typography',
    // href: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    // name: 'Components',
  },
  {
    component: CNavGroup,
    // name: 'Base',
    // href: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        // name: 'Accordion',
        // href: '/base/accordion',
      },
      {
        component: CNavItem,
        // name: 'Breadcrumb',
        // href: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        // name: 'Cards',
        // href: '/base/cards',
      },
      {
        component: CNavItem,
        // name: 'Carousel',
        // href: '/base/carousels',
      },
      {
        component: CNavItem,
        // name: 'Collapse',
        // href: '/base/collapses',
      },
      {
        component: CNavItem,
        // name: 'List group',
        // href: '/base/list-groups',
      },
      {
        component: CNavItem,
        // name: 'Navs & Tabs',
        // href: '/base/navs',
      },
      {
        component: CNavItem,
        // name: 'Pagination',
        // href: '/base/paginations',
      },
      {
        component: CNavItem,
        // name: 'Placeholders',
        // href: '/base/placeholders',
      },
      {
        component: CNavItem,
        // name: 'Popovers',
        // href: '/base/popovers',
      },
      {
        component: CNavItem,
        // name: 'Progress',
        // href: '/base/progress',
      },
      {
        component: CNavItem,
        // name: 'Spinners',
        // href: '/base/spinners',
      },
      {
        component: CNavItem,
        // name: 'Tables',
        // href: '/base/tables',
      },
      {
        component: CNavItem,
        // name: 'Tabs',
        // href: '/base/tabs',
      },
      {
        component: CNavItem,
        // name: 'Tooltips',
        // href: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    // name: 'Buttons',
    // href: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        // name: 'Buttons',
        // href: '/buttons/buttons',
      },
      {
        component: CNavItem,
        // name: 'Buttons groups',
        // href: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        // name: 'Dropdowns',
        // href: '/buttons/dropdowns',
      },
      {
        component: CNavItem,
        // name: 'Loading Buttons',
        // href: '/buttons/loading-buttons',
        badge: {
          // color: 'danger-gradient',
          // text: 'PRO',
        },
      },
    ],
  },
  {
    component: CNavGroup,
    // name: 'Forms',
    // href: '/forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        // name: 'Form Control',
        // href: '/forms/form-control',
      },
      {
        component: CNavItem,
        // name: 'Select',
        // href: '/forms/select',
      },
      {
        component: CNavItem,
        // name: 'Multi Select',
        // href: '/forms/multi-select',
        badge: {
          // color: 'danger-gradient',
          // text: 'PRO',
        },
      },
      {
        component: CNavItem,
        // name: 'Checks & Radios',
        // href: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        // name: 'Range',
        // href: '/forms/range',
      },
      {
        component: CNavItem,
        // name: 'Input Group',
        // href: '/forms/input-group',
      },
      {
        component: CNavItem,
        // name: 'Floating Labels',
        // href: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        // name: 'Date Picker',
        // href: '/forms/date-picker',
        badge: {
          // color: 'danger-gradient',
          // text: 'PRO',
        },
      },
      {
        component: CNavItem,
        // name: 'Date Range Picker',
        // href: '/forms/date-range-picker',
        badge: {
          // color: 'danger-gradient',
          // text: 'PRO',
        },
      },
      {
        component: CNavItem,
        // name: 'Time Picker',
        // href: '/forms/time-picker',
        badge: {
          // color: 'danger-gradient',
          // text: 'PRO',
        },
      },
      {
        component: CNavItem,
        // name: 'Layout',
        // href: '/forms/layout',
      },
      {
        component: CNavItem,
        // name: 'Validation',
        // href: '/forms/validation',
      },
    ],
  },
  {
    component: CNavGroup,
    // name: 'Icons',
    // href: '/icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        // name: 'CoreUI Free',
        // href: '/icons/free',
        badge: {
          // color: 'success-gradient',
          // text: 'FREE',
        },
      },
      {
        component: CNavItem,
        // name: 'CoreUI Flags',
        // href: '/icons/flags',
      },
      {
        component: CNavItem,
        // name: 'CoreUI Brands',
        // href: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    // name: 'Notifications',
    // href: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        // name: 'Alerts',
        // href: '/notifications/alerts',
      },
      {
        component: CNavItem,
        // name: 'Badges',
        // href: '/notifications/badges',
      },
      {
        component: CNavItem,
        // name: 'Modal',
        // href: '/notifications/modals',
      },
      {
        component: CNavItem,
        // name: 'Toasts',
        // href: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    // name: 'Widgets',
    // href: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      // color: 'info-gradient',
      // text: 'NEW',
    },
  },
  {
    component: CNavItem,
    // name: 'Smart Table',
    icon: <CIcon icon={cilGrid} customClassName="nav-icon" />,
    badge: {
      // color: 'danger-gradient',
      // text: 'PRO',
    },
    // href: '/smart-table',
  },
  {
    component: CNavTitle,
    // name: 'Plugins',
  },
  {
    component: CNavItem,
    // name: 'Calendar',
    icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
    badge: {
      // color: 'danger-gradient',
      // text: 'PRO',
    },
    // href: '/plugins/calendar',
  },
  {
    component: CNavItem,
    // name: 'Charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    // href: '/plugins/charts',
  },
  {
    component: CNavItem,
    // name: 'Google Maps',
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    badge: {
      // color: 'danger-gradient',
      // text: 'PRO',
    },
    // href: '/plugins/google-maps',
  }
]

export default _nav
