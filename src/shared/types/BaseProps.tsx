import React from 'react';

export default interface BaseProps {
  className?: string;
}

export interface BtnProps extends BaseProps {
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode,
}

export interface LinkProps extends BaseProps {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode,
}