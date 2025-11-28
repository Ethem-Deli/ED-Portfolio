import { useTranslation } from 'react-i18next';
import { Heart, Github, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="bg-[#0b0c10] border-t border-[#66fcf1]/20 py-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          {/* Social Icons*/}
          <motion.div
            className="flex items-center space-x-6 text-white/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }} >
            <a
              href="https://github.com/Ethem-Deli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#66fcf1] transition-colors"            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/ethem-deli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#66fcf1] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:ethemdeli.tr@gmail.com"
              className="hover:text-[#66fcf1] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>

            <a
              href="tel:+97450606655"
              className="hover:text-[#66fcf1] transition-colors"
            >
              <Phone className="w-6 h-6" />
            </a>

            <a
              href="https://wa.me/97450606655"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#66fcf1] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="text-white/60 text-sm flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>© {currentYear} DeliDev.</span>
            <span>{t('footer.rights')}</span>
          </motion.div>

          {/* Made with Love */}
          <motion.div
            className="text-white/60 text-sm flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
}