import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col py-12 justify-center items-center">
      <div className="mb-5">
        <h1 className="font-bold text-4xl"> Next.js 13 Features </h1>
      </div>

      <Link
        className="py-10  ring-2 ring-slate-500 rounded-2xl group hover:ring-white duration-300"
        href={"https://beta.nextjs.org/docs"}
        target="_blank"
      >
        <div className="p-5">
          <h1 className="text-2xl text-slate-400 font-extrabold group-hover:text-white duration-300">
            Beta Documentation
          </h1>
        </div>
      </Link>
    </div>
  );
}
