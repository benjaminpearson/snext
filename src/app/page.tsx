import JobCard from '@/components/job-card';
import { ContentBlock, Stack } from '@/lib/braid';
import Link from 'next/link';

export default function Home() {
  return (
    <ContentBlock>
      <Stack space="medium">
        <JobCard />
        <Link href="/example">Example page</Link>
      </Stack>
    </ContentBlock>
  );
}
