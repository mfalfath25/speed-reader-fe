import React from 'react'
import classNames from 'classnames'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  width?: 'full' | 'auto' | 'fit'
  status?: 'success' | 'error' | 'warning'
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
    { 'btn-outline': outline },
    'normal-case',
    'text-lg',
    'px-3',
    'no-animation',
    'active:text-white',
    'active:opacity-70',
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
  outline: false,
  disabled: false,
  onClick: () => {},
  className: '',
  text: '',
}
