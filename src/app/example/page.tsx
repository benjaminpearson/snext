'use client';
import { Text, Alert, ContentBlock, Stack } from '@/lib/braid';
import { useTranslations } from '@/lib/vocab';
import Link from 'next/link';

import translations from './.vocab';

export default function Example() {
  const { t } = useTranslations(translations);
  return (
    <ContentBlock>
      <Stack space="medium">
        <Alert tone="caution">
          <Text>Example</Text>
        </Alert>
        <Text>Translated text: {t('title')}</Text>
        <Link href="/">Home page</Link>
      </Stack>
    </ContentBlock>
  );
}
