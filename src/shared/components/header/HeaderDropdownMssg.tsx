import React from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilEnvelopeOpen } from '@coreui/icons'

// import avatar1 from '@/public/images/avatars/1.jpg'
// import avatar2 from '@/public/images/avatars/2.jpg'
// import avatar3 from '@/public/images/avatars/3.jpg'
// import avatar4 from '@/public/images/avatars/4.jpg'
// import avatar5 from '@/public/images/avatars/5.jpg'

const HeaderDropdownMssg = () => {
  const itemsCount = 4
  return (
    <CDropdown variant="nav-item" alignment="end">
      <CDropdownToggle caret={false}>
        <span className="d-inline-block my-1 mx-2 position-relative">
          <CIcon icon={cilEnvelopeOpen} size="lg" />
          <CBadge color="danger" position="top-end" shape="rounded-circle" className="p-1">
            <span className="visually-hidden">{itemsCount} new alerts</span>
          </CBadge>
        </span>
      </CDropdownToggle>
      <CDropdownMenu className="py-0" style={{ minWidth: '24rem' }}>
        <CDropdownHeader className="bg-body-secondary text-body-secondary fw-semibold rounded-top mb-2">
          You have {itemsCount} messages
        </CDropdownHeader>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src="{avatar1.src}" status="success" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between text-body-secondary small mt-1">
                <div>Jessica Williams</div>
                <div>Just now</div>
              </div>
              <div className="fw-semibold">
                <span className="text-danger">!</span> Urgent: System Maintenance Tonight
              </div>
              <div className="small text-body-secondary">
                Attention team, we&#39;ll be conducting critical system maintenance tonight from 10
                PM to 2 AM. Plan accordingly...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src="{avatar2.src}" status="warning" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Richard Johnson</div>
                <div>5 minutes ago</div>
              </div>
              <div className="fw-semibold">
                <span className="text-danger">!</span> Project Update: Milestone Achieved
              </div>
              <div className="small text-body-secondary">
                Kudos on hitting sales targets last quarter! Let&#39;s keep the momentum. New goals,
                new victories ahead...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src="{avatar4.src}" status="secondary" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Angela Rodriguez</div>
                <div>1:52 PM</div>
              </div>
              <div className="fw-semibold">Social Media Campaign Launch</div>
              <div className="small text-body-secondary">
                Exciting news! Our new social media campaign goes live tomorrow. Brace yourselves
                for engagement...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src="{avatar5.src}" status="success" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Jane Lewis</div>
                <div>4:03 PM</div>
              </div>
              <div className="fw-semibold">Inventory Checkpoint</div>
              <div className="small text-body-secondary">
                Team, it&#39;s time for our monthly inventory check. Accurate counts ensure smooth
                operations. Let&#39;s nail it...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <CDropdownItem href="#">
          <div className="d-flex">
            <CAvatar className="flex-shrink-0 my-3 me-3" src="{avatar3.src}" status="secondary" />
            <div className="message text-wrap">
              <div className="d-flex justify-content-between small text-body-secondary mt-1">
                <div>Ryan Miller</div>
                <div>3 days ago</div>
              </div>
              <div className="fw-semibold">Customer Feedback Results</div>
              <div className="small text-body-secondary">
                Our latest customer feedback is in. Let&#39;s analyze and discuss improvements for
                an even better service...
              </div>
            </div>
          </div>
        </CDropdownItem>
        <div className="p-2">
          <CButton color="primary" variant="outline" className="w-100">
            View All Messages
          </CButton>
        </div>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default HeaderDropdownMssg
