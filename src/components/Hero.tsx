'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-64 h-64 rounded-full ${
              i % 2 === 0 ? 'bg-holo-blue/10' : 'bg-holo-purple/10'
            } blur-xl`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo/Icon */}
        <motion.div
          className="mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <div className="relative inline-block">
            <motion.div
              className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-holo-blue via-holo-purple to-holo-cyan flex items-center justify-center text-6xl text-white font-bold shadow-holo-strong"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)',
                  '0 0 50px rgba(0, 212, 255, 0.8), 0 0 100px rgba(157, 78, 221, 0.5)',
                  '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(157, 78, 221, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              H
            </motion.div>
            
            {/* Rotating rings */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-4 border-holo-blue/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 rounded-2xl border-2 border-holo-purple/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="holo-text">Holocron</span>
          </h1>
          <motion.p
            className="text-2xl md:text-3xl text-holo-blue font-light"
            animate={{
              textShadow: [
                '0 0 10px rgba(0, 212, 255, 0.5)',
                '0 0 20px rgba(0, 212, 255, 0.8)',
                '0 0 10px rgba(0, 212, 255, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Databank
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-6">
            Acesse os segredos da{' '}
            <motion.span
              className="holo-text font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Força
            </motion.span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore um banco de dados místico contendo conhecimentos Jedi e Sith,
            relíquias ancestrais e registros históricos da galáxia.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.a
            href="/jedi"
            className="group relative px-8 py-4 text-lg font-semibold text-white rounded-xl overflow-hidden cursor-pointer inline-flex items-center space-x-3 bg-gradient-to-r from-holo-blue to-holo-purple shadow-holo hover:shadow-holo-strong transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-holo-blue/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              // Verificar se o link está funcionando
              console.log('Navegando para /jedi');
            }}
          >
            <span>⚡</span>
            <span>Explorar Arquivos Jedi</span>
          </motion.a>

          <motion.a
            href="/sith"
            className="group relative px-8 py-4 text-lg font-semibold text-red-400 rounded-xl overflow-hidden cursor-pointer inline-flex items-center space-x-3 border-2 border-red-500/50 bg-transparent hover:bg-red-500/10 hover:border-red-400 hover:text-red-300 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              // Verificar se o link está funcionando
              console.log('Navegando para /sith');
            }}
          >
            <span>🔴</span>
            <span>Arquivos Restritos</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {[
            { number: '1,247', label: 'Registros Arquivados', icon: '📚' },
            { number: '156', label: 'Relíquias Catalogadas', icon: '💎' },
            { number: '89', label: 'Mestres Documentados', icon: '👤' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-panel p-6 rounded-xl border border-holo-blue/20 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.2 }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 212, 255, 0.4)' }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold holo-text mb-1">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.button
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-holo-blue transition-colors focus:outline-none"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => {
              const nextSection = document.querySelector('section:nth-of-type(2)');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm mb-2">Explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-current rounded-full flex justify-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="w-1 h-3 bg-current rounded-full mt-2"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
