import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "@/store";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const state = useCartStore();
  console.log(state);

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                    <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                      <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-lg font-medium text-gray-900'>
                            Shopping cart
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                              onClick={() => setOpen(false)}
                            >
                              <span className='sr-only'>Close panel</span>
                              <XMarkIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                        </div>

                        <div className='mt-8'>
                          <div className='flow-root'>
                            <ul
                              role='list'
                              className='-my-6 divide-y divide-gray-200'
                            >
                              {products.map((product) => (
                                <li key={product.id} className='flex py-6'>
                                  <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className='h-full w-full object-cover object-center'
                                    />
                                  </div>

                                  <div className='ml-4 flex flex-1 flex-col'>
                                    <div>
                                      <div className='flex justify-between text-base font-medium text-gray-900'>
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className='ml-4'>{product.price}</p>
                                      </div>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className='flex flex-1 items-end justify-between text-sm'>
                                      <p className='text-gray-500'>
                                        Qty {product.quantity}
                                      </p>

                                      <div className='flex'>
                                        <button
                                          type='button'
                                          className='font-medium text-indigo-600 hover:text-indigo-500'
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className='mt-0.5 text-sm text-gray-500'>
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className='mt-6'>
                          <a
                            href='#'
                            className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                          >
                            Checkout
                          </a>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                          <p>
                            or
                            <button
                              type='button'
                              className='font-medium text-indigo-600 hover:text-indigo-500'
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden='true'> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open }) => (
          <>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <div className='relative flex h-16 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex flex-shrink-0 items-center'>
                    <img
                      className='block h-8 w-auto lg:hidden'
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                      alt='Your Company'
                    />
                    <img
                      className='hidden h-8 w-auto lg:block'
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                      alt='Your Company'
                    />
                  </div>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  {/* Profile dropdown */}
                  {session ? (
                    <Menu as='div' className='relative ml-3'>
                      <div className='flex space-x-6 items-center'>
                        <ShoppingBagIcon
                          onClick={() => setOpen(true)}
                          className='h-8 w-8 text-white cursor-pointer'
                        />
                        <Menu.Button className='flex rounded-full overflow-hidden bg-gray-800 text-sm'>
                          <span className='sr-only'>Open user menu</span>
                          <Image
                            height={42}
                            width={42}
                            className='rounded-full'
                            src={session?.user?.image}
                            alt={`${session?.user?.name} profile picture`}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href='#'
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => signOut()}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "w-full text-left block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      href={"/auth/signin"}
                      className='bg-gray-900 text-white
                  tracking-widest rounded-md px-5 py-2 text-sm font-medium'
                    >
                      Breeze In
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className='sm:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
