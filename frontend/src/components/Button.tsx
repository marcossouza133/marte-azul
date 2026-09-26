import React from 'react'
import { tocarSom } from '../utils/som'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

export const Botao: React.FC<Props> = ({ children, onClick, variant = 'primary' }) => {
  const estiloBase = variant === 'primary'
    ? {
        background: 'transparent',
        border: '2px solid #FF7A30',
        color: '#FF7A30',
        boxShadow: '0 0 10px #FF7A30, inset 0 0 10px #FF7A30'
      }
    : {
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.2)',
        color: '#fff'
      }

  return (
    <button
      onClick={() => { tocarSom('clique'); onClick?.() }}
      onMouseEnter={() => tocarSom('hover')}
      onTouchStart={() => tocarSom('clique')}
      style={{
        padding: '12px 28px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ...estiloBase
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)'
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 0 20px #FF7A30, inset 0 0 15px #FF7A30'
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        if (variant === 'primary') {
          e.currentTarget.style.boxShadow = '0 0 10px #FF7A30, inset 0 0 10px #FF7A30'
        }
      }}
    >
      {children}
    </button>
  )
}