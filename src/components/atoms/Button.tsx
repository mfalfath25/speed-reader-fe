import React from 'react'
import className from 'classnames'

interface Props {
  weight?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  size?: 'sm' | 'md' | 'lg'
  width?: 'full' | 'auto' | 'fit'
  status?: 'success' | 'error' | 'warning'
  outline?: boolean
  onClick?: React.MouseEventHandler
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

export const ButtonWeight = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
}

export const Button = (props: Props): React.ReactElement => {
  const {
    weight,
    type,
    text,
    size,
    width,
    status,
    outline,
    children,
    disabled,
    onClick,
  } = props
  const classProps: string = className(
    'btn',
    `btn-${weight}`,
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
    {
      disabled,
    }
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
  className: '',
  text: '',
  weight: '',
  type: ButtonType.BUTTON,
  size: ButtonSize.MEDIUM,
  width: ButtonWidth.AUTO,
  status: '',
  outline: false,
  disabled: false,
  onClick: () => {},
}
