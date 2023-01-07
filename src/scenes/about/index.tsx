import { SelectedPage } from "@/shared/types";

type Props = {
  selectPage: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ selectPage, setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.About}`}
      className="h-auto w-full bg-[#f4f5f7]"
    >
      <div className="mx-auto w-5/6 py-20 text-center md:text-start">
        <h1 className="mb-4 text-4xl text-[#33384c]">Why choose Easybank?</h1>
        <p className="mb-4 text-[#96979c]">
          We leverage Open Banking to turn your bank account into financial hub.
          Control your finances like never before.
        </p>
        <div></div>
      </div>
    </section>
  );
};

export default About;
