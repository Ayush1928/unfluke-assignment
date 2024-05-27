import LeaderboardModal from "@/components/ui/LeaderboardModal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full md:py-6 py-2 text-2xl flex justify-center items-center font-bold bg-pink-300 text-white">TOPBAR</div>
      <div className="w-full md:py-6 py-2 text-2xl flex justify-center items-center font-bold bg-slate-300 text-white">NAVBAR</div>
      <div className="md:pt-12 pt-4 lg:px-28 md:px-20 sm:px-12 px-2 flex items-center flex-col">
        <Breadcrumb className="w-full justify-start font-semibold">
          <BreadcrumbList className="text-slate-600 md:text-lg">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Leaderboard</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="md:text-5xl sm:text-3xl text-2xl font-sans font-semibold text-gray-700 mt-4">
          LEADERBOARD
        </h1>
        <LeaderboardModal />
      </div>
      <div className="w-full md:py-6 py-2 text-2xl flex justify-center items-center font-bold bg-pink-300 text-white">FOOTER</div>
    </main>
  );
}
