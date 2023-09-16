'use client';
import { BraidProvider, ContentBlock, Text, apacTheme } from '@/lib/braid';
import { useCurrentLocale } from 'next-i18n-router/client';
import { VocabProvider } from '@/lib/vocab';
import i18nConfig from '../../i18n.config';

export default function Template({ children }: { children: React.ReactNode }) {
  const locale = useCurrentLocale(i18nConfig) ?? 'en';
  return (
    <BraidProvider theme={apacTheme}>
      <VocabProvider language={locale}>
        {children}
        <ContentBlock>
          <Text>Locale: {locale}</Text>
        </ContentBlock>
      </VocabProvider>
    </BraidProvider>
  );
}
