export const MovieCardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }, (v, i) => i).map(item => (
        <div className="animate-pulse" key={item} data-testid="movieCardSkeleton">
          <div className="w-full relative aspect-[3/4] rounded-lg bg-gray-500">&nbsp;</div>
        </div>
      ))}
    </>
  )
}
