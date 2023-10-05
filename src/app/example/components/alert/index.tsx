import { Text, Alert } from '@/lib/braid';
export const ExampleAlert = ({
  tone,
}: {
  tone?: 'info' | 'caution' | 'promote';
}) => {
  return (
    <Alert tone={tone ?? 'info'}>
      <Text>Example</Text>
    </Alert>
  );
};
