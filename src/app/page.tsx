import JobCard from '@/components/job-card';
import { ContentBlock, Stack } from '@/lib/braid';
import Link from 'next/link';

export default function Home() {
  return (
    <ContentBlock>
      <Stack space="medium">
        <JobCard />
        <Link href="/example">Example - EN</Link>
        <Link href="/th/example">Example - TH</Link>
        <Link href="/id/example">Example - ID</Link>
      </Stack>
    </ContentBlock>
  );
}
