import React from 'react'
import classNames from 'classnames'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  width?: 'full' | 'auto' | 'fit'
  status?: 'success' | 'error' | 'warning'
  style?: 'primary' | 'secondary' | 'neutral' | ''
  textColor?: 'primary' | 'secondary' | 'neutral' | ''
  outline?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  className?: string
  disabled?: boolean
  text?: string
}

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonStyle = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NEUTRAL: 'neutral',
  DEFAULT: '',
}

export const ButtonTextColor = {
  PRIMARY: 'white',
  SECONDARY: 'white',
  NEUTRAL: '[#A3C6FF]',
  DEFAULT: '',
}

export const ButtonSize = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
}

export const ButtonWidth = {
  FULL: 'full',
  AUTO: 'auto',
}

export const Button = ({
  type,
  size,
  width,
  status,
  style,
  textColor,
  outline,
  onClick,
  children,
  className,
  disabled,
  text,
}: Props): React.ReactElement => {
  const classProps = classNames(
    'btn',
    `btn-${size}`,
    `btn-${status}`,
    `w-${width}`,
    `btn-${style}`,
    `text-${textColor}`,
    'normal-case',
    'text-lg',
    'px-3',
    'no-animation',
    'hover:contrast-125',
    'active:text-white',
    'active:opacity-70',
    { 'btn-outline': outline },
    { disabled },
    className
  )

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classProps}
    >
      {text}
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: ButtonType.BUTTON,
  size: ButtonSize.MEDIUM,
  width: ButtonWidth.AUTO,
  status: '',
  style: ButtonStyle.NEUTRAL,
  // textColor: ButtonTextColor.NEUTRAL,
  outline: false,
  disabled: false,
  onClick: () => {},
  className: '',
  text: '',
}
