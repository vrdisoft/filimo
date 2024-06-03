import { Select } from '@/components/Select'

export default function Filter() {
  const genreOptions = [
    { title: 'درام', value: 'drama' },
    { title: 'اکشن', value: 'action' },
    { title: 'کمدی', value: 'comedy' },
    { title: 'علمی تخیلی', value: 'sci-fi' },
  ]

  const rateOptions = [
    { title: 'بالاترین امتیاز', value: 'max-rate' },
    { title: 'پایین ترین امتیاز', value: 'min-rate' },
  ]

  return (
    <main className="flex flex-col md:flex-row justify-center items-center gap-8 p-12">
      <Select lable="ژانر" options={genreOptions} columns={2} multi />
      <Select lable="امتباز فیلم" options={rateOptions} columns={1} />
    </main>
  )
}
