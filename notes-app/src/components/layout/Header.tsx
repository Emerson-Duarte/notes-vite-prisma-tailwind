import React from 'react';

export interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title = 'Notes App', children }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900">📝 {title}</h1>
        </div>
        <div className="flex items-center space-x-4">{children}</div>
      </div>
    </header>
  );
};

export default Header;
