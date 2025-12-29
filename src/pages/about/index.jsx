import Section1 from '../../components/about/section1';
import Section2 from '../../components/about/section2';
import Section3 from '../../components/about/section3';
import Section4 from '../../components/about/section4';
import Section5 from '../../components/about/section5';

export default function AboutPage() {
  return (
    <div className="w-full h-[1080px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
