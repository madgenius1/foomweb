
import CallToAction from "./ui-items/landing/CallToAction";
import Hero from "./ui-items/landing/Hero";
import Solution from "./ui-items/landing/Solution";
import FAQs from "./ui-items/landing/FAQs";
import HowItWorks from "./ui-items/landing/HowItWorks";
import JoinWaitlist from "./ui-items/landing/JoinWaitlist";



export default function Page() {
  return (
    <main>
      <Hero />
      <Solution />
      <CallToAction />
      <HowItWorks />
      <FAQs />
      <JoinWaitlist />
    </main>
  );
}
