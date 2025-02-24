import { useState, useEffect } from 'react';

// Импортируем иконки из библиотеки heroicons
import {
  XMarkIcon,
  Bars3Icon,
  PencilIcon,
  Square2StackIcon,
  ArchiveBoxXMarkIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Предотвращаем прокрутку страницы при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Редактировать', icon: PencilIcon, shortcut: '⌘E' },
    { name: 'Дублировать', icon: Square2StackIcon, shortcut: '⌘D' },
    { name: 'Архивировать', icon: ArchiveBoxXMarkIcon, shortcut: '⌘A' },
    { name: 'Удалить', icon: TrashIcon, shortcut: '⌘⌫' },
  ];

  return (
    <>
      {/* Навигационная панель */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-gray-900 z-40 px-4 flex items-center justify-between">
        <div className="text-white font-semibold">Лого</div>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white p-2 rounded-md hover:bg-gray-800"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>

      {/* Оверлей с затемнением */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Мобильное меню с эффектом замершего стекла */}
      <div 
        className={`fixed inset-0 pt-16 z-50 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-y-0' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full h-full bg-white/10 backdrop-blur-lg backdrop-saturate-150 text-white overflow-y-auto">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 bg-gray-800/50"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 flex flex-col space-y-6">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button 
                  className="w-full flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition-colors"
                  onClick={() => {
                    // Действие при нажатии на пункт меню
                    console.log(`Выбран пункт: ${item.name}`);
                    setIsOpen(false);
                  }}
                >
                  <item.icon className="w-6 h-6 mr-4 text-white/70" />
                  <span className="text-lg">{item.name}</span>
                  <kbd className="ml-auto font-sans text-sm text-white/50 bg-black/20 px-2 py-1 rounded">
                    {item.shortcut}
                  </kbd>
                </button>
                {index === 1 && (
                  <div className="h-px bg-white/10 mx-4 my-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;