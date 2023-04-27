import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars2Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { MobileMenu } from '../MobileMenu/MobileMenu'




export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="bg-inherit fixed top-0 left-0 right-0 text-white z-50">
      <nav className="mx-auto flex items-center justify-between p-6 md:px-8" aria-label="Global">
        <div className="flex md:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto" src="/logo.png" alt="" />
          </Link>
        </div>
        <div className="flex md:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={handleOpenModal}
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon className="h-12 w-12 font-bold" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden md:flex md:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-white">
            Home
          </Link>
          <Link href="/Works" className="text-sm font-semibold leading-6 text-white">
            Works
          </Link>
          <Link href="/About" className="text-sm font-semibold leading-6 text-white">
            About
          </Link>
          <Link href="/Blog" className="text-sm font-semibold leading-6 text-white">
            Blog
          </Link>
        </Popover.Group>
        <div className="hidden md:flex md:flex-1 md:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Contact <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
      <MobileMenu  isOpen={isModalOpen} onClose={handleCloseModal}/>
    </header>
  )
}