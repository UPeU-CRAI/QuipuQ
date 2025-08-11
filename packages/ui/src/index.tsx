import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded" {...props}>{children}</button>
);
