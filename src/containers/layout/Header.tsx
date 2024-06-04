import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className=" min-h-[68px] bg-black flex items-center gap-5 px-10 text-white">
        <Link href="/" className="pl-10">
          <Image src="/svg/fa-filimo-dark-logo.svg" alt="fa-filimo-dark-logo" width={86} height={25} />
        </Link>
        <Link href="/filter">
          <span>فیلم و سریال</span>
        </Link>
      </div>
      <div className=" min-h-[2px] bg-black-border" />
    </header>
  )
}
