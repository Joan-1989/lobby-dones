import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div><Logo /></div>
        <div>
          <h3 className="font-bold mb-4">Navegació</h3>
          <ul>
            <li><a href="#" className="hover:underline">Qui som</a></li>
            <li><a href="#" className="hover:underline">Actualitat</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul>
            <li><a href="#" className="hover:underline">Política de privacitat</a></li>
            <li><a href="#" className="hover:underline">Avís legal</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Segueix-nos</h3>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Plataforma Lobby Dones. Tots els drets reservats.</p>
      </div>
    </div>
  </footer>
);

export default Footer;