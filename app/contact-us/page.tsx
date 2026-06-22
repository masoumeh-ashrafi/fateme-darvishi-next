import type { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'
const emailAddress = 'FatemeDarvishi71@gmail.com'
const address =
  'مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰، مرکز زیبایی فاطمه درویشی'

export const metadata: Metadata = {
  title: 'تماس و رزرو وقت آرایش دائم در مشهد | فاطمه درویشی',
  description:
    'تماس با مرکز زیبایی فاطمه درویشی در مشهد برای رزرو وقت و مشاوره خدمات آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و رژ لب دائم.',
  keywords: [
    'تماس فاطمه درویشی',
    'رزرو آرایش دائم در مشهد',
    'رزرو فیبروز ابرو مشهد',
    'مشاوره میکروبلیدینگ مشهد',
    'آدرس مرکز زیبایی فاطمه درویشی',
    'مرکز آرایش دائم در مشهد',
  ],
  alternates: {
    canonical: `${siteUrl}/contact-us`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'تماس و رزرو وقت | مرکز زیبایی فاطمه درویشی',
    description:
      'برای رزرو وقت، مشاوره و پرسش درباره خدمات آرایش دائم در مشهد با فاطمه درویشی در ارتباط باشید.',
    type: 'website',
    locale: 'fa_IR',
    url: `${siteUrl}/contact-us`,
    siteName: 'فاطمه درویشی',
    images: [
      {
        url: `${siteUrl}/optimized/header-bg.webp`,
        width: 1200,
        height: 630,
        alt: 'تماس با مرکز زیبایی فاطمه درویشی در مشهد',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تماس و رزرو وقت | فاطمه درویشی',
    description:
      'رزرو وقت و مشاوره برای خدمات آرایش دائم، فیبروز ابرو، بن مژه و رژ لب دائم در مشهد.',
    images: [`${siteUrl}/optimized/header-bg.webp`],
  },
}

const contactItems = [
  {
    title: 'آدرس مرکز',
    value: address,
    href: 'https://www.google.com/maps/search/?api=1&query=%D9%85%D8%B4%D9%87%D8%AF%20%D8%A8%D8%B2%D8%B1%DA%AF%D8%B1%D8%A7%D9%87%20%D9%BE%DB%8C%D8%A7%D9%85%D8%A8%D8%B1%D8%A7%D8%B9%D8%B8%D9%85%20%D9%BE%DB%8C%D8%A7%D9%85%D8%A8%D8%B1%20%D8%A7%D8%B9%D8%B8%D9%85%20101%20%D8%AA%D9%88%D8%B3%20160',
    linkLabel: 'مشاهده مسیر روی نقشه',
  },
  {
    title: 'شماره تماس',
    value: phoneNumber,
    href: `tel:${phoneHref}`,
    linkLabel: 'تماس مستقیم',
  },
  {
    title: 'ایمیل',
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    linkLabel: 'ارسال ایمیل',
  },
  {
    title: 'ساعات کاری',
    value: 'شنبه تا پنجشنبه: ۱۰ صبح تا ۷ شب | جمعه‌ها: با تعیین وقت قبلی',
    href: '/contact-us#booking-form',
    linkLabel: 'درخواست رزرو',
  },
]

const faqItems = [
  {
    question: 'برای رزرو وقت چه اطلاعاتی لازم است؟',
    answer:
      'نام، شماره تماس، نوع خدمت مورد نظر و در صورت وجود، سابقه تاتو یا خدمات قبلی را ارسال کنید. برای خدمات ابرو، چشم یا لب، عکس واضح از ناحیه مورد نظر می‌تواند به مشاوره دقیق‌تر کمک کند.',
  },
  {
    question: 'آیا قبل از انجام آرایش دائم مشاوره لازم است؟',
    answer:
      'بله. نوع پوست، فرم صورت، سابقه تاتو قبلی، حساسیت‌ها، مصرف دارو و انتظار شما از نتیجه باید قبل از شروع کار بررسی شود.',
  },
  {
    question: 'آیا می‌توانم فقط برای پرسیدن سوال پیام بدهم؟',
    answer:
      'بله. می‌توانید از طریق فرم تماس، تماس تلفنی یا ایمیل سوال خود را ارسال کنید. پاسخ نهایی درباره امکان انجام خدمت، بعد از بررسی شرایط شما دقیق‌تر خواهد بود.',
  },
]

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['BeautySalon', 'LocalBusiness'],
        '@id': `${siteUrl}/#beautysalon`,
        name: 'مرکز زیبایی فاطمه درویشی',
        url: siteUrl,
        image: `${siteUrl}/optimized/header-bg.webp`,
        description:
          'مرکز تخصصی آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و رژ لب دائم در مشهد.',
        telephone: phoneHref,
        email: emailAddress,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰',
          addressLocality: 'مشهد',
          addressRegion: 'خراسان رضوی',
          addressCountry: 'IR',
        },
        areaServed: {
          '@type': 'City',
          name: 'مشهد',
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Saturday',
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
            ],
            opens: '10:00',
            closes: '19:00',
          },
        ],
      },
      {
        '@type': 'ContactPage',
        '@id': `${siteUrl}/contact-us#webpage`,
        url: `${siteUrl}/contact-us`,
        name: 'تماس و رزرو وقت آرایش دائم در مشهد',
        description:
          'صفحه تماس فاطمه درویشی برای رزرو وقت، مشاوره و پرسش درباره خدمات آرایش دائم در مشهد.',
        inLanguage: 'fa-IR',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#beautysalon`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/contact-us#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'خانه',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'تماس و رزرو',
            item: `${siteUrl}/contact-us`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/contact-us#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  }

  return (
    <div className='w-full bg-gray-50' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <section
        className='relative overflow-hidden bg-cover bg-center text-white'
        style={{ backgroundImage: "url('/header-bg.webp')" }}
      >
        <div className='absolute inset-0 bg-black/65' />

        <div className='container relative z-10 mx-auto px-4 py-20 text-center md:py-28'>
          <p className='mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur'>
            رزرو وقت و مشاوره در مشهد
          </p>

          <h1 className='mb-5 text-3xl font-black leading-tight md:text-5xl'>
            تماس با مرکز زیبایی فاطمه درویشی
          </h1>

          <p className='mx-auto max-w-3xl text-base leading-8 opacity-95 md:text-lg'>
            برای رزرو وقت، مشاوره درباره خدمات آرایش دائم، بررسی تاتو قبلی یا
            پرسیدن سوال درباره فیبروز ابرو، بن مژه، خط چشم دائم و رژ لب دائم،
            از راه‌های زیر با ما در ارتباط باشید.
          </p>

          <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
            <a
              href={`tel:${phoneHref}`}
              className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-bold text-emerald-800 no-underline transition duration-300 hover:bg-gray-100'
            >
              تماس مستقیم
            </a>

            <a
              href='#booking-form'
              className='inline-flex items-center justify-center rounded-full border border-white px-8 py-3 font-bold text-white no-underline transition duration-300 hover:bg-white/10'
            >
              تکمیل فرم رزرو
            </a>
          </div>
        </div>
      </section>

      <section className='py-14 md:py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div className='rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8'>
              <h2 className='mb-6 text-2xl font-black text-gray-950 md:text-3xl'>
                اطلاعات تماس
              </h2>

              <div className='space-y-4'>
                {contactItems.map((item) => (
                  <div
                    key={item.title}
                    className='rounded-2xl border border-gray-100 bg-gray-50 p-5'
                  >
                    <h3 className='mb-2 text-lg font-black text-gray-950'>
                      {item.title}
                    </h3>

                    <p className='mb-3 leading-8 text-gray-700'>
                      {item.value}
                    </p>

                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        item.href.startsWith('http') ? 'noreferrer' : undefined
                      }
                      className='inline-flex font-bold text-emerald-700 no-underline hover:text-emerald-900'
                    >
                      {item.linkLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className='mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-5'>
                <h2 className='mb-3 text-xl font-black text-gray-950'>
                  قبل از مراجعه حضوری
                </h2>

                <p className='leading-8 text-gray-700'>
                  برای جلوگیری از انتظار و برای بررسی دقیق‌تر شرایط پوست، فرم
                  صورت یا سابقه تاتو قبلی، بهتر است قبل از مراجعه حضوری از طریق
                  فرم یا تماس تلفنی هماهنگ کنید.
                </p>
              </div>
            </div>

            <div
              id='booking-form'
              className='rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8'
            >
              <h2 className='mb-3 text-2xl font-black text-gray-950 md:text-3xl'>
                فرم رزرو و مشاوره
              </h2>

              <p className='mb-8 leading-8 text-gray-600'>
                این فرم برای ثبت درخواست اولیه است. بعد از ارسال اطلاعات، برای
                هماهنگی زمان و بررسی جزئیات خدمت با شما تماس گرفته می‌شود.
              </p>

              <form action='https://formspree.io/f/xnnveowr' method='POST'>
                <input
                  type='hidden'
                  name='_subject'
                  value='درخواست رزرو و مشاوره از صفحه تماس سایت'
                />

                <div className='mb-5'>
                  <label
                    htmlFor='name'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    نام شما
                  </label>
                  <input
                    id='name'
                    type='text'
                    name='name'
                    placeholder='نام کامل'
                    className='w-full rounded-lg border border-gray-300 p-3 text-sm transition focus:border-emerald-600 focus:outline-none'
                    required
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='phone'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    شماره تماس
                  </label>
                  <input
                    id='phone'
                    type='tel'
                    name='phone'
                    placeholder='مثلاً 09123456789'
                    className='w-full rounded-lg border border-gray-300 p-3 text-sm transition focus:border-emerald-600 focus:outline-none'
                    required
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    ایمیل، اختیاری
                  </label>
                  <input
                    id='email'
                    type='email'
                    name='email'
                    placeholder='example@gmail.com'
                    className='w-full rounded-lg border border-gray-300 p-3 text-sm transition focus:border-emerald-600 focus:outline-none'
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='service'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    نوع خدمت مورد نظر
                  </label>
                  <select
                    id='service'
                    name='service'
                    className='w-full rounded-lg border border-gray-300 bg-white p-3 text-sm transition focus:border-emerald-600 focus:outline-none'
                    defaultValue=''
                    required
                  >
                    <option value='' disabled>
                      انتخاب کنید
                    </option>
                    <option value='فیبروز و میکروبلیدینگ ابرو'>
                      فیبروز و میکروبلیدینگ ابرو
                    </option>
                    <option value='شیدینگ و میکروپیگمنتیشن ابرو'>
                      شیدینگ و میکروپیگمنتیشن ابرو
                    </option>
                    <option value='بن مژه و خط چشم دائم'>
                      بن مژه و خط چشم دائم
                    </option>
                    <option value='رژ لب دائم و کانتور لب'>
                      رژ لب دائم و کانتور لب
                    </option>
                    <option value='ریموو یا اصلاح تاتو قدیمی'>
                      ریموو یا اصلاح تاتو قدیمی
                    </option>
                    <option value='مشاوره قبل از انتخاب خدمت'>
                      مشاوره قبل از انتخاب خدمت
                    </option>
                  </select>
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='message'
                    className='mb-2 block text-sm font-bold text-gray-700'
                  >
                    توضیحات شما
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows={5}
                    placeholder='مثلاً سابقه تاتو قبلی، نوع پوست، خدمت مدنظر یا زمان پیشنهادی خود را بنویسید.'
                    className='w-full rounded-lg border border-gray-300 p-3 text-sm transition focus:border-emerald-600 focus:outline-none'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full rounded-lg bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md transition duration-300 hover:bg-emerald-800'
                >
                  ارسال درخواست رزرو
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white py-14'>
        <div className='container mx-auto px-4'>
          <div className='mx-auto max-w-4xl'>
            <div className='mb-8 text-center'>
              <h2 className='text-2xl font-black text-gray-950 md:text-3xl'>
                سوالات رایج قبل از تماس
              </h2>
              <p className='mt-3 leading-8 text-gray-600'>
                این موارد کمک می‌کنند درخواست مشاوره دقیق‌تر ثبت شود.
              </p>
            </div>

            <div className='space-y-4'>
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className='rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm'
                >
                  <summary className='cursor-pointer list-none text-lg font-black text-gray-950'>
                    {item.question}
                  </summary>
                  <p className='mt-4 leading-8 text-gray-600'>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}