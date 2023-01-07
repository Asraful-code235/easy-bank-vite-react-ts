type Props = {
  Image: string;
  name: string;
  description: string;
  authorName: string;
};

const Blogs = ({ Image, name, description, authorName }: Props) => {
  return (
    <div className="flex h-[350px] w-[280px] flex-col justify-between rounded-md ">
      <img src={Image} alt={name} className="min-h-[200px] rounded-t-md" />
      <div className="gap-4 p-5">
        <p className="mb-2 text-xs text-[#c7c6cb]">
          by <span className="ml-2">{authorName}</span>
        </p>
        <h4 className="mb-2 text-base font-semibold text-slate-600">{name}</h4>
        <p className="text-xs text-[#c7c6cb]">{description}</p>
      </div>
    </div>
  );
};

export default Blogs;
