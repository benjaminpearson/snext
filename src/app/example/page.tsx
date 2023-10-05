'use client';
import { Text, ContentBlock, Stack } from '@/lib/braid';
import { useTranslations } from '@/lib/vocab';
import Link from 'next/link';

import translations from './.vocab';
import { ExampleAlert } from './components/alert';

export default function Example() {
  const { t } = useTranslations(translations);
  return (
    <ContentBlock>
      <Stack space="medium">
        <ExampleAlert />
        <Text>Translated text: {t('title')}</Text>
        <Link href="/">Home page</Link>
      </Stack>
    </ContentBlock>
  );
}
