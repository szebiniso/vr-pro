import Banner from '@/components/main/Banner';
import Container from '@/components/Container';
import Description from '@/components/main/Description';
import Experience from '@/components/main/Experience';
import Form from '@/components/main/Form';
import News from '@/components/main/News';
import ContactInformation from '@/components/main/ContactInformation';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <Container>
        <div className="flex flex-col min-[320px]:mb-4 min-[320px]:gap-10 md:mb-10 md:gap-20 lg:mb-20 lg:gap-40">
          <Description />
          <Experience />
          <News />
          <Form />
          <ContactInformation />
        </div>
      </Container>
    </main>
  );
}
