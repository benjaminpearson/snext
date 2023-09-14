'use client';
import { BraidProvider, ContentBlock, Text, apacTheme } from '@/lib/braid';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '../../i18n.config';

export default function Template({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useCurrentLocale(i18nConfig) ?? params.locale ?? 'en';
  return (
    <BraidProvider theme={apacTheme}>
      {children}
      <ContentBlock>
        <Text>Locale: {locale}</Text>
      </ContentBlock>
    </BraidProvider>
  );
}
