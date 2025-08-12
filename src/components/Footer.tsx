import React from 'react';
import Logo from './Logo';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <li>
    <a href={href} className="text-neutral-light/70 hover:text-white transition-colors duration-fast ease-in-out font-sans">
        {children}
    </a>
  </li>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; 'aria-label': string }> = (props) => (
    <a href={props.href} target="_blank" rel="noopener noreferrer" aria-label={props['aria-label']} className="text-neutral-light/70 hover:text-accent-light transition-colors duration-fast ease-in-out">
        {props.children}
    </a>
)

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-neutral-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Logo & About */}
          <div className="md:col-span-2 lg:col-span-1">
             <div className="inline-block">
                 <Logo isFooter={true} />
            </div>
            <p className="mt-6 text-neutral-light/70 max-w-xs font-sans">Defensant els drets de les dones per una societat més justa i igualitària.</p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4">Navegació</h4>
            <ul className="space-y-3">
                <FooterLink href="#about">Qui som</FooterLink>
                <FooterLink href="#projects">Projectes</FooterLink>
                <FooterLink href="#news">Actualitat</FooterLink>
                <FooterLink href="#contact">Contacte</FooterLink>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
                <FooterLink href="#">Política de Privacitat</FooterLink>
                <FooterLink href="#">Termes d'Ús</FooterLink>
                <FooterLink href="#">Política de Cookies</FooterLink>
            </ul>
          </div>
          
          {/* Col 4: Social */}
          <div>
            <h4 className="font-display font-bold text-base uppercase tracking-wider mb-4">Segueix-nos</h4>
            <div className="flex space-x-5">
                <SocialIcon href="#" aria-label="Twitter">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                </SocialIcon>
                <SocialIcon href="#" aria-label="Instagram">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.193 0-3.56.011-4.79.068-2.73.124-3.993 1.424-4.116 4.116-.057 1.23-.067 1.597-.067 4.78s.01 3.55.067 4.78c.124 2.693 1.387 3.993 4.116 4.116 1.23.057 1.597.067 4.79.067s3.56-.01 4.79-.067c2.73-.124 3.993-1.424 4.116-4.116.057-1.23.067-1.597.067-4.78s-.01-3.55-.067-4.78c-.124-2.693-1.387-3.993-4.116-4.116-1.23-.057-1.597-.067-4.79-.067z"></path><path d="M12 6.845a5.155 5.155 0 100 10.31 5.155 5.155 0 000-10.31zm0 8.878a3.723 3.723 0 110-7.446 3.723 3.723 0 010 7.446zM18.336 5.663a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"></path></svg>
                </SocialIcon>
                 <SocialIcon href="#" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                </SocialIcon>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-light/20 mt-12 pt-8 text-center text-neutral-light/60 text-sm font-sans">
            <p>&copy; {new Date().getFullYear()} Lobby Europeu de Dones. Tots els drets reservats.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;