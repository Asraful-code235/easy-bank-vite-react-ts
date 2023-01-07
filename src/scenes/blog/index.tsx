import { BlogTypes, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import confetti from "@/assets/image-confetti.jpg";
import currency from "@/assets/image-currency.jpg";
import plane from "@/assets/image-plane.jpg";
import restaurant from "@/assets/image-restaurant.jpg";
import Blogs from "./Blogs";

const blogs: Array<BlogTypes> = [
  {
    Image: currency,
    AuthorName: "Claire Robinson",
    name: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and were becomming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    Image: restaurant,
    AuthorName: "Wilson Hutton",
    name: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. Tha means you...",
  },
  {
    Image: plane,
    AuthorName: "Wilson Hutton",
    name: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is thy we don&apost charge any fees on purchases while you&aposr abroad. We&aposll even show you...",
  },
  {
    Image: confetti,
    AuthorName: "Claire Robinson",
    name: "Or invite-only beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we&aposre excited to launch our closed beta.It&aposs easy to request an invite through the site...",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Blog = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={`${SelectedPage.Blog}`}
      className="my-10 w-full bg-white pb-10"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Blog)}
        className="mx-auto mt-10 w-5/6 py-10 "
      >
        <h1 className="mb-8 text-start text-4xl font-bold text-[#212339]">
          Latest Articles
        </h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-8 md:items-start md:justify-start ">
          {blogs.map((data) => (
            <Blogs
              key={data.name}
              Image={data.Image}
              authorName={data.AuthorName}
              name={data.name}
              description={data.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
