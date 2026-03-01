import { FollowerPointerCard } from "./ui/following-pointer";

export type Teacher = {
  name: string;
  role: string;
  image: string;
  about: string;
};

export function FollowingPointer({ teacher }: { teacher: Teacher }) {
  return (
    <div className="mx-auto h-full">
      {/* <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      > */}
        <div className="group relative h-full overflow-hidden rounded-2xl border border-gray-200  bg-white  transition duration-200 hover:shadow-[0_8px_4px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100 ">
            <img
              src={teacher.image}
              alt="thumbnail"
              className="h-full w-full transform object-contain transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
            />
          </div>
          <div className="p-4">
            <h2 className="my-2 text-lg font-bold text-gray-900 dark:text-[#000000] text-transform uppercase">
              {teacher.name}
            </h2>
            <h2 className="my-2 text-sm font-normal text-gray-500 dark:text-slate-600">
              {teacher.role}
            </h2>
            <h2 className="my-1 text-sm font-normal text-gray-500 dark:text-slate-500">
              {teacher.about}
            </h2>
              <span className="text-sm text-gray-500 dark:text-slate-900">TPC Faculty</span>
            <div className="mt-10 flex flex-row items-center justify-between">
              {/* <div className="relative z-10 block rounded-xl bg-gray-900 dark:bg-slate-50 px-6 py-2 text-xs font-bold text-white dark:text-slate-900">
                Read More
              </div> */}
            </div>
          </div>
        </div>
      {/* </FollowerPointerCard> */}
    </div>
  );
}
