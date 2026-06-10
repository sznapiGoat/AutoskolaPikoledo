import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { WhyPikoledo } from "@/components/sections/why-pikoledo";
import { Courses } from "@/components/sections/courses";
import { ReviewsMarquee } from "@/components/sections/reviews-marquee";
import { Instructors } from "@/components/sections/instructors";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhyPikoledo />
      <Courses />
      <ReviewsMarquee />
      <Instructors />
      <FinalCta />
    </>
  );
}
