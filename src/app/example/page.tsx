import { Text, Alert, ContentBlock, Stack } from '@/lib/braid';
import Link from 'next/link';

export default function Example() {
  return (
    <ContentBlock>
      <Stack space="medium">
        <Alert tone="caution">
          <Text>Example</Text>
        </Alert>
        <Link href="/">Home page</Link>
      </Stack>
    </ContentBlock>
  );
}
