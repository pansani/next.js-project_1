import Header from "@component/components/SectionHeader";
import SecondSection from "@component/components/SecondSection";
import StaticsSection from "@component/components/StaticsSection";
import Feynman from "@component/components/FeynmanSection";
import Kaufman from "@component/components/KaufmanSection";

export default function Home() {
  return (
    <>
      <>
        <>
          <>
            <Header></Header>
            <SecondSection></SecondSection>
          </>
          <StaticsSection></StaticsSection>
        </>
        <Feynman></Feynman>
      </>
      <Kaufman></Kaufman>
    </>
  );
}
