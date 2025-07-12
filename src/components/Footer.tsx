'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: '⚡', href: '#' },
    { name: 'Archive', icon: '📚', href: '#' },
    { name: 'Council', icon: '🏛️', href: '#' },
  ];

  const quickLinks = [
    { name: 'Arquivos Jedi', href: '/jedi' },
    { name: 'Registros Sith', href: '/sith' },
    { name: 'Relíquias', href: '/relics' },
    { name: 'Personagens', href: '/characters' },
  ];

  return (
    <footer className="relative mt-20 border-t border-holo-blue/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-secondary/50 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-holo-blue to-holo-purple flex items-center justify-center text-white font-bold text-xl"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                    '0 0 30px rgba(0, 212, 255, 0.6)',
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                H
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold holo-text">Holocron</h3>
                <p className="text-sm text-gray-400">Databank</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Um banco de dados místico que preserva os conhecimentos mais profundos 
              da Força, registros históricos da galáxia e sabedoria ancestral dos 
              Jedi e Sith. Acesse com responsabilidade.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="w-10 h-10 glass-panel border border-holo-blue/30 rounded-lg flex items-center justify-center text-lg hover:border-holo-blue/60 transition-colors"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-holo-blue mb-6">
              Acesso Rápido
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-holo-blue transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <motion.span
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Archive Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-holo-purple mb-6">
              Status do Arquivo
            </h4>
            <div className="space-y-4">
              <div className="glass-panel p-3 rounded-lg border border-holo-purple/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Registros Ativos</span>
                  <motion.span 
                    className="text-holo-purple font-bold"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    1,247
                  </motion.span>
                </div>
              </div>
              
              <div className="glass-panel p-3 rounded-lg border border-green-500/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Sistema</span>
                  <motion.span 
                    className="text-green-400 font-bold flex items-center space-x-1"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Online</span>
                  </motion.span>
                </div>
              </div>

              <div className="glass-panel p-3 rounded-lg border border-gold-accent/20">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Integridade</span>
                  <span className="text-gold-accent font-bold">99.7%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-holo-blue/20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Holocron Databank. Todos os registros são ficticios.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-500">
            <motion.a
              href="#"
              className="hover:text-holo-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Política de Acesso
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-holo-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Código Jedi
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-holo-blue transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contato
            </motion.a>
          </div>
        </motion.div>

        {/* Force Quote */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-holo-blue italic text-lg"
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 212, 255, 0.5)',
                '0 0 20px rgba(0, 212, 255, 0.8)',
                '0 0 10px rgba(0, 212, 255, 0.5)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            "A Força estará contigo, sempre."
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
