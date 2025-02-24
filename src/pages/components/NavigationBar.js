import { useState } from 'react';
import { BarChart3, Menu as MenuIcon, X } from "lucide-react";
import { HomeIcon, InfoIcon, ShoppingBagIcon, PhoneIcon, Tickets, ShieldHalf, Link } from "lucide-react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Головна', icon: HomeIcon, link: '/' },
    { name: 'Інформація', icon: InfoIcon, link: '/info' },
    { name: 'Реєстрація', icon: Tickets, link: '/registration' },
    { name: 'Команда', icon: ShieldHalf, link: '/team' },
    { name: 'Контакти', icon: PhoneIcon, link: '/contacts' },
    { name: "Telegram", icon: Link, link: 'https://t.me/FurrestCon'}
  ];

  return (
    <>
      {/* Навигационная панель */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/70">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="text-xl text-[#7B583D] font-bold">FURREST</div>
          
          {/* Десктопная версия меню */}
          <div className="hidden md:flex items-center gap-4">
             <a href="#" className="text-black hover:text-[#7B583D] transition-colors">Головна</a>
             <a href="#" className="text-black hover:text-[#7B583D] transition-colors">Новини</a>
             <a href="#" className="text-black hover:text-[#7B583D] transition-colors">Реєстрація</a>
          </div>
          
          
          {/* Кнопка мобильного меню */}
          <button 
            className=" flex items-center justify-center w-10 h-10 rounded-lg bg-[#7B583D]/10 text-[#7B583D] active:bg-[#7B583D]/20 transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Оверлей с затемнением */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Мобильное меню с закруглением и обводкой */}
      <div 
        className={`fixed inset-x-4 top-20 bottom-4 z-40 transition-all duration-300 ease-out ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="w-full h-full bg-white/90 backdrop-blur-lg backdrop-saturate-150 overflow-y-auto rounded-3xl border border-gray-200 shadow-lg">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full p-2 bg-[#7B583D]/10 text-[#7B583D] active:bg-[#7B583D]/20 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6 flex flex-col space-y-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <a 
                  href={item.link} 
                  className="w-full flex items-center px-4 py-3 rounded-xl bg-transparent hover:bg-[#7B583D]/5 active:bg-[#7B583D]/10 transition-colors text-[#7B583D] active:scale-98"
                  onClick={() => {
                    console.log(`Выбран пункт: ${item.name}`);
                    setIsMenuOpen(false);
                  }}
                >
                  <item.icon className="w-5 h-5 mr-3 text-[#7B583D]" />
                  <span className="text-lg">{item.name}</span>
                </a>
                {index === 1 && (
                  <div className="h-px bg-[#7B583D]/10 mx-4 my-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
