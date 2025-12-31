'use client'

import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading,
} from 'react-aria-components'
import { FaPlus } from 'react-icons/fa6'
import './FaqComponent.scss'

export const FaqComponent = ({ className, items, ...props }) => (
  <DisclosureGroup
    className={className}
    allowsMultipleExpanded
  >
    {items.map((item) => (
      <Disclosure key={item.id}>
        <Heading>
          <Button
            slot="trigger"
            className="disclosure-button"
          >
            <span>{item.question}</span>
            <FaPlus size={25} />
          </Button>
        </Heading>
        <DisclosurePanel>
          <div>{item.answer}</div>
        </DisclosurePanel>
      </Disclosure>
    ))}
  </DisclosureGroup>
)
