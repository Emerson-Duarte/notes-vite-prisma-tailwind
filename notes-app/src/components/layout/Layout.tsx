import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  sidebarOpen?: boolean;
  headerTitle?: string;
  headerActions?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  sidebarOpen = true,
  headerTitle,
  headerActions,
}) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title={headerTitle}>{headerActions}</Header>

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
