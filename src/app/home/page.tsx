import Image from 'next/image' // Certifique-se de importar a biblioteca Image do Next.js
import Link from 'next/link'
import MenuBar from '@/components/HomePage/menuBar'
import SideNavLeft from '@/components/SideNavLeft'

export default function Index() {

  return (
    <header className="w-[100vw] flex items-center ">
      <div className='flex'>
        <SideNavLeft />
      </div>
      <div className="flex items-center">
        <MenuBar enterpriseName={'MelloCompany'} avatarUrl={'/public/next.svg'} />
      </div>
    </header>
  )
}

