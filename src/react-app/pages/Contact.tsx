import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0b0c10] pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#66fcf1] mb-8">{t('nav.contact')}</h1>
        <div className="bg-[#0b0c10]/80 backdrop-blur-lg p-8 rounded-xl border border-[#66fcf1]/20">
          <p className="text-white/70">Contact page coming soon...</p>
        </div>
      </div>
    </div>
  );
}
