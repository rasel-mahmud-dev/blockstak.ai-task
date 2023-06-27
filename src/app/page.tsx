import Navigation from "@/app/components/Navigation";
import HeroSection from "@/app/components/home/HeroSection";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import TopCollection from "@/app/components/home/TopCollection";
import CollectionFeatures from "@/app/components/home/CollectionFeatures";
import SignUpSection from "@/app/components/home/SignUpSection";
import DiscoverSection from "@/app/components/home/DiscoverSection";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <main>
            <Navigation/>
            <HeroSection/>
            <FeaturesSection/>
            <TopCollection/>
            <CollectionFeatures />
            <SignUpSection />
            <DiscoverSection />
            <Footer />
        </main>
    )
}
