import InformationPageLayout from '@/components/InformationPageLayout';
import HomeHero from '@/components/HomeHero';
import HomeSections from '@/components/HomeSections';
export default function Home() {
    return <InformationPageLayout>
    <HomeHero />
    <HomeSections />
    </InformationPageLayout>;
}
