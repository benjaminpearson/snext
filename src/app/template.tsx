import { BraidProvider, apacTheme } from '@/lib/braid';

export default function Template({ children }: { children: React.ReactNode }) {
  return <BraidProvider theme={apacTheme}>{children}</BraidProvider>;
}
