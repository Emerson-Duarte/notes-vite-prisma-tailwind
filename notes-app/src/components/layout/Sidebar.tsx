import React from 'react';

export interface SidebarProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ children, isOpen = true }) => {
  return (
    <aside
      className={`
      bg-gray-50 border-r border-gray-200 transition-all duration-300
      ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}
      min-h-screen
    `}
    >
      <div className="p-4">
        <nav className="space-y-2">
          <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Menu
          </div>
          {children || (
            <>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                <span>📄</span>
                <span>Todas as Notas</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                <span>⭐</span>
                <span>Favoritas</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                <span>🗂️</span>
                <span>Categorias</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 p-2 rounded-md text-gray-700 hover:bg-gray-200"
              >
                <span>🗑️</span>
                <span>Lixeira</span>
              </a>
            </>
          )}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
