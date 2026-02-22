import styles from './Typography.module.css'

import { createElement } from 'react'

interface HeadingElementProps extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const PrimaryHeading: React.FC<HeadingElementProps> = (props) => {
  const { as = 'h1', children, ...elementProps } = props

  return createElement(
    as,
    {
      className: styles.primaryHeading,
      ...elementProps,
    },
    children,
  )
}

export const SecondaryHeading: React.FC<HeadingElementProps> = (props) => {
  const { as = 'h2', children, ...elementProps } = props

  return createElement(
    as,
    {
      className: styles.secondaryHeading,

      ...elementProps,
    },
    children,
  )
}

export const TertiaryHeading: React.FC<HeadingElementProps> = (props) => {
  const { as = 'h3', children, ...elementProps } = props

  return createElement(
    as,
    {
      className: styles.secondaryHeading,

      ...elementProps,
    },
    children,
  )
}
