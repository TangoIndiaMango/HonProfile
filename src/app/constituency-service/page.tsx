import { BasicHero } from '@/components/common/BasicHero';
import { ConstituencyServiceOverview } from '@/components/constituency/ConstituencyServiceOverview';

export default function ConstituencyServicePage() {
  return (
    <>
      <BasicHero 
        title="Constituency Service"
        description="Complete transparency in representation, employment creation, and community development"
      />
      <ConstituencyServiceOverview />
    </>
  );
}
