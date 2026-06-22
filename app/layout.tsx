import './globals.css'

import type { Metadata, Viewport } from 'next'

import Link from 'next/link'
import { Vazirmatn } from 'next/font/google'

const siteUrl = 'https://fatemedarvishi.ir'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'
const emailAddress = 'FatemeDarvishi71@gmail.com'

const vazirmatn = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-vazirmatn',
  display: 'swap',
})

const navLinks = [
  { href: '/', label: 'خانه' },
  { href: '/services', label: 'خدمات' },
  { href: '/portfolio', label: 'نمونه‌کارها' },
  { href: '/about-us', label: 'درباره من' },
  { href: '/blog', label: 'وبلاگ' },
  { href: '/contact-us', label: 'تماس با من' },
]

const footerServiceLinks = [
  { href: '/services', label: 'فیبروز و میکروبلیدینگ ابرو' },
  { href: '/services', label: 'بن مژه و خط چشم دائم' },
  { href: '/services', label: 'رژ لب دائم و کانتور لب' },
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: 'فاطمه درویشی',
  title: {
    default: 'فاطمه درویشی | آرایش دائم و فیبروز ابرو در مشهد',
    template: '%s | فاطمه درویشی',
  },
  description:
    'مرکز تخصصی آرایش دائم فاطمه درویشی در مشهد؛ فیبروز و میکروبلیدینگ ابرو، بن مژه، خط چشم دائم، رژ لب دائم، کانتور لب، ترمیم و مشاوره تخصصی.',
  keywords: [
    'فاطمه درویشی',
    'آرایش دائم در مشهد',
    'فیبروز ابرو مشهد',
    'میکروبلیدینگ مشهد',
    'بن مژه دائم مشهد',
    'خط چشم دائم مشهد',
    'رژ لب دائم مشهد',
    'مرکز زیبایی مشهد',
  ],
  alternates: {
    canonical: '/',
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/optimized/web-app-manifest-192x192.webp',
        type: 'image/webp',
        sizes: '192x192',
      },
      {
        url: '/optimized/web-app-manifest-512x512.webp',
        type: 'image/webp',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/optimized/apple-touch-icon.webp',
        type: 'image/webp',
        sizes: '180x180',
      },
    ],
  },
  openGraph: {
    title: 'فاطمه درویشی | آرایش دائم و فیبروز ابرو در مشهد',
    description:
      'خدمات تخصصی آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه و رژ لب دائم در مشهد.',
    url: siteUrl,
    siteName: 'فاطمه درویشی',
    locale: 'fa_IR',
    type: 'website',
    images: [
      {
        url: '/optimized/header-bg.webp',
        width: 1200,
        height: 630,
        alt: 'مرکز زیبایی فاطمه درویشی در مشهد',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'فاطمه درویشی | آرایش دائم و فیبروز ابرو در مشهد',
    description:
      'فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و رژ لب دائم در مشهد.',
    images: ['/optimized/header-bg.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF4EF',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa' dir='rtl' className={vazirmatn.variable}>
      <body className='min-h-screen bg-gray-50 font-sans text-gray-800 antialiased'>
        <div className='flex min-h-screen flex-col'>
          <header className='sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur-sm'>
            <div className='container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6'>
              <Link
                href='/'
                className='flex items-center gap-3 text-lg font-black text-emerald-800 no-underline md:text-xl'
                aria-label='صفحه اصلی مرکز زیبایی فاطمه درویشی'
              >
                <span className='flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-sm font-black text-emerald-700'>
                  FD
                </span>
                <span>مرکز زیبایی فاطمه درویشی</span>
              </Link>

              <nav
                aria-label='منوی اصلی سایت'
                className='-mx-4 overflow-x-auto px-4 md:mx-0 md:overflow-visible md:px-0'
              >
                <ul className='flex min-w-max items-center gap-1 p-0 m-0 list-none md:gap-2'>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className='block rounded-full px-3 py-2 text-sm font-semibold text-gray-600 no-underline transition duration-300 hover:bg-emerald-50 hover:text-emerald-700 md:text-base'
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </header>

          <div className='flex-grow w-full'>{children}</div>

          <footer className='mt-auto bg-gray-950 py-10 text-white'>
            <div className='container mx-auto px-4'>
              <div className='grid grid-cols-1 gap-8 text-right md:grid-cols-3'>
                <div>
                  <h2 className='mb-4 text-lg font-black'>
                    مرکز زیبایی فاطمه درویشی
                  </h2>
                  <p className='leading-8 text-sm text-gray-300'>
                    خدمات تخصصی آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه و
                    رژ لب دائم در مشهد با تمرکز بر طراحی طبیعی، مشاوره قبل از
                    اجرا و رعایت اصول بهداشتی.
                  </p>
                </div>

                <div>
                  <h2 className='mb-4 text-lg font-black'>دسترسی سریع</h2>
                  <ul className='m-0 space-y-3 p-0 list-none'>
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className='text-sm text-gray-300 no-underline transition duration-300 hover:text-white'
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className='mb-4 text-lg font-black'>تماس و خدمات</h2>

                  <ul className='m-0 space-y-3 p-0 list-none'>
                    {footerServiceLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className='text-sm text-gray-300 no-underline transition duration-300 hover:text-white'
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className='mt-5 space-y-2 text-sm text-gray-300'>
                    <p className='m-0 leading-7'>
                      مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰
                    </p>
                    <p className='m-0'>
                      <a
                        href={`tel:${phoneHref}`}
                        className='text-gray-300 no-underline transition duration-300 hover:text-white'
                      >
                        {phoneNumber}
                      </a>
                    </p>
                    <p className='m-0'>
                      <a
                        href={`mailto:${emailAddress}`}
                        className='text-gray-300 no-underline transition duration-300 hover:text-white'
                      >
                        {emailAddress}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className='mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-center text-xs text-gray-400 md:flex-row md:items-center md:justify-between md:text-right'>
                <p className='m-0'>
                  © ۲۰۲۶ فاطمه درویشی. تمامی حقوق محفوظ است.
                </p>

                <div className='flex justify-center gap-5 md:justify-end'>
                  <Link
                    href='/privacy'
                    className='text-gray-400 no-underline transition duration-300 hover:text-white'
                  >
                    سیاست حفظ حریم خصوصی
                  </Link>

                  <Link
                    href='/terms'
                    className='text-gray-400 no-underline transition duration-300 hover:text-white'
                  >
                    شرایط و ضوابط
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}