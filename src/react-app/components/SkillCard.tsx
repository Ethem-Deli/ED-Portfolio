import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  delay?: number;
}

export default function SkillCard({ name, icon: Icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gradient-to-br from-[#0b0c10]/80 to-[#0b0c10]/60 backdrop-blur-lg p-6 rounded-xl border border-[#66fcf1]/20 shadow-lg shadow-[#66fcf1]/5 hover:border-[#66fcf1]/40 hover:shadow-[#66fcf1]/20 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center space-y-3">
        <div className="p-3 bg-gradient-to-br from-[#66fcf1]/20 to-[#45a29e]/20 rounded-lg group-hover:from-[#66fcf1]/30 group-hover:to-[#45a29e]/30 transition-all duration-300">
          <Icon className="w-8 h-8 text-[#66fcf1]" />
        </div>
        <span className="text-white/90 font-medium text-center">{name}</span>
      </div>
    </motion.div>
  );
}
