import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useStateContext } from "../lib/context";

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Logo from "../assets/studio-seven-logo.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { qty, increaseQty, decreaseQty, onAdd, cartItems } = useStateContext();

  const router = useRouter();

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
    // More products...
  ];

  return (
    <div>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto'>
              <div className='px-4 pt-5 pb-2 flex'>
                <button
                  type='button'
                  className='-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='border-t border-gray-200 py-6 px-4 space-y-6'>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='-m-2 p-2 block font-medium text-gray-900'
                  >
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className='relative overflow-hidden'>
        {/* Top navigation */}
        {router.pathname === "cart" && (
          <p className='bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8'>
            Get free delivery on orders over $100
          </p>
        )}
        <nav
          aria-label='Top'
          className='relative z-20 bg-white bg-opacity-90 backdrop-filter backdrop-blur-xl'
        >
          <div className='2xl:container 2xl:mx-auto lg:px-20 md:px-6 px-4 '>
            <div className='h-16 flex items-center'>
              <button
                type='button'
                className='bg-white p-2 rounded-md text-gray-400 lg:hidden'
                onClick={() => setOpen(true)}
              >
                <span className='sr-only'>Open menu</span>
                <Bars3Icon className='h-6 w-6' aria-hidden='true' />
              </button>

              {/* Logo */}
              <div className='ml-4 flex lg:ml-0'>
                <Link href='/'>
                  {/* <h5 className='text-xl font-semibold tracking-tight text-gray-900'>
                    StudioSeven
                  </h5> */}
                  <Image src={Logo} height={35} />
                </Link>
              </div>

              <div className='ml-auto flex items-center'>
                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                  <a
                    href='#'
                    className='text-sm font-medium text-gray-700 hover:text-gray-800'
                  >
                    Sign in
                  </a>
                  <span className='h-6 w-px bg-gray-200' aria-hidden='true' />
                </div>

                {/* Cart */}
                <div className='ml-4 flow-root lg:ml-6'>
                  <div className='group -m-2 p-2 flex items-center'>
                    <ShoppingBagIcon
                      onClick={() => setCartOpen(true)}
                      className='flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500'
                      aria-hidden='true'
                    />
                    <span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
                      0
                    </span>
                    <span className='sr-only'>items in cart, view bag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Transition.Root show={cartOpen} as={Fragment} className='z-50'>
        <Dialog as='div' className='relative z-50' onClose={setCartOpen}>
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
          {cartItems.length < 1 && (
            <div className='fixed inset-0 overflow-hidden z-50'>
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
                        <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                          <div className='flex items-start justify-between'>
                            <Dialog.Title className='text-lg font-medium text-gray-900'>
                              Shopping cart
                            </Dialog.Title>
                            <div className='ml-3 flex h-7 items-center'>
                              <button
                                type='button'
                                className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                                onClick={() => setCartOpen(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XMarkIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                  color='black'
                                />
                              </button>
                            </div>
                          </div>

                          <div className='mt-8'>
                            <div className='flow-root'>
                              <h3>nothing here!</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className='fixed inset-0 overflow-hidden z-50'>
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
                        <div className='flex-1 overflow-y-auto py-6 px-4 sm:px-6'>
                          <div className='flex items-start justify-between'>
                            <Dialog.Title className='text-lg font-medium text-gray-900'>
                              Shopping cart
                            </Dialog.Title>
                            <div className='ml-3 flex h-7 items-center'>
                              <button
                                type='button'
                                className='-m-2 p-2 text-gray-400 hover:text-gray-500'
                                onClick={() => setCartOpen(false)}
                              >
                                <span className='sr-only'>Close panel</span>
                                <XMarkIcon
                                  className='h-6 w-6'
                                  aria-hidden='true'
                                  color='black'
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
                                {cartItems.map((item) => (
                                  <li key={item.slug} className='flex py-6'>
                                    <div className='h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200'>
                                      <img
                                        src={
                                          item.image.data.attributes.formats
                                            .medium.url
                                        }
                                        alt={item.title}
                                        className='h-full w-full object-cover object-center'
                                      />
                                    </div>

                                    <div className='ml-4 flex flex-1 flex-col'>
                                      <div>
                                        <div className='flex justify-between text-base font-medium text-gray-900'>
                                          <h3>
                                            <a href={`/product/${item.slug}`}>
                                              {item.title}
                                            </a>
                                          </h3>
                                          <p className='ml-8'>{item.price}</p>
                                        </div>
                                      </div>
                                      <div className='flex flex-1 items-end justify-between text-sm'>
                                        <p className='text-gray-500'>
                                          Qty {item.quantity}
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

                        <div className='border-t border-gray-200 py-6 px-4 sm:px-6'>
                          <div className='flex justify-between text-base font-medium text-gray-900'>
                            <p>Subtotal</p>
                            <p>$262.00</p>
                          </div>
                          <p className='mt-0.5 text-sm text-gray-500'>
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className='mt-6'>
                            <Link
                              href='/cart'
                              className='flex items-center justify-center rounded-md border bg-white border-indigo-600 px-6 py-3 text-base font-medium text-indigo-600 shadow-sm'
                            >
                              View Cart
                            </Link>
                          </div>
                          <div className='mt-2'>
                            <a
                              href='#'
                              className='flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'
                            >
                              Checkout
                            </a>
                          </div>
                          <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                            <p>
                              or{" "}
                              <button
                                type='button'
                                className='font-medium text-indigo-600 hover:text-indigo-500'
                                onClick={() => setCartOpen(false)}
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
          )}
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Navbar;
