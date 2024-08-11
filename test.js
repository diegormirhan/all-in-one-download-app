// src/components/menu.js (ou Sidebar.js)
"use client";

import { useState, createContext, useContext } from 'react';

// Cria um contexto para gerenciar a visibilidade do Sidebar
const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export default function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <button onClick={closeSidebar} className="text-right p-4">
          X
        </button>
        <ul className="p-4">
          <li className="py-2">Menu Item 1</li>
          <li className="py-2">Menu Item 2</li>
          <li className="py-2">Menu Item 3</li>
          <li className="py-2">Menu Item 4</li>
        </ul>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div onClick={closeSidebar} className="fixed inset-0 bg-black opacity-50 z-30"></div>
      )}
    </SidebarContext.Provider>
  );
}
