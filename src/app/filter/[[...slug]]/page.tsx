import { FilterPage } from '@/containers/filterPage'

export default function Filter({ params }: { params: { slug: string[] } }) {
  return (
    <main>
      <FilterPage slug={params?.slug} />
    </main>
  )
}
