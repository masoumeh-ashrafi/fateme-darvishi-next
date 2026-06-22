import type { Metadata } from 'next'

const siteUrl = 'https://fatemedarvishi.ir'
const phoneNumber = '09391813879'
const phoneHref = '+989391813879'
const emailAddress = 'FatemeDarvishi71@gmail.com'

export const metadata: Metadata = {
  title: 'آرایش دائم و فیبروز ابرو در مشهد | فاطمه درویشی',
  description:
    'خدمات تخصصی آرایش دائم در مشهد توسط فاطمه درویشی؛ فیبروز و میکروبلیدینگ ابرو، بن مژه، خط چشم دائم، رژ لب دائم، کانتور لب، ترمیم و مشاوره تخصصی.',
  keywords: [
    'آرایش دائم در مشهد',
    'فیبروز ابرو مشهد',
    'میکروبلیدینگ مشهد',
    'میکروبلیدینگ ابرو مشهد',
    'شیدینگ ابرو مشهد',
    'بن مژه دائم مشهد',
    'خط چشم دائم مشهد',
    'رژ لب دائم مشهد',
    'کانتور لب دائم مشهد',
    'مرکز آرایش دائم در مشهد',
    'فاطمه درویشی',
  ],
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'آرایش دائم و فیبروز ابرو در مشهد | فاطمه درویشی',
    description:
      'مرکز تخصصی آرایش دائم، فیبروز ابرو، بن مژه و رژ لب دائم در مشهد با تمرکز بر نتیجه طبیعی، طراحی اختصاصی و رعایت اصول بهداشتی.',
    type: 'website',
    locale: 'fa_IR',
    url: siteUrl,
    siteName: 'فاطمه درویشی',
    images: [
      {
        url: `${siteUrl}/optimized/abroo-1000.webp`,
        width: 1200,
        height: 630,
        alt: 'نمونه کار فیبروز ابرو توسط فاطمه درویشی در مشهد',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'آرایش دائم و فیبروز ابرو در مشهد | فاطمه درویشی',
    description:
      'فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم و رژ لب دائم در مشهد.',
    images: [`${siteUrl}/optimized/abroo-1000.webp`],
  },
}

const services = [
  {
    title: 'میکروبلیدینگ و فیبروز ابرو',
    description:
      'ایجاد ابروهایی طبیعی‌تر، مرتب‌تر و متناسب با فرم صورت با شبیه‌سازی خطوط ظریف شبیه تار مو.',
    href: '/services',
    icon: 'ابرو',
  },
  {
    title: 'خط چشم دائم و بن مژه',
    description:
      'تقویت خط رویش مژه و ایجاد جلوه‌ای مرتب‌تر برای چشم‌ها، بدون نیاز به آرایش روزانه.',
    href: '/services',
    icon: 'چشم',
  },
  {
    title: 'رژ لب دائم و کانتور لب',
    description:
      'اصلاح بی‌رنگی، فرم و تقارن ظاهری لب‌ها با انتخاب رنگ طبیعی و هماهنگ با چهره.',
    href: '/services',
    icon: 'لب',
  },
]

const galleryImages = [
  {
    src: '/optimized/abroo-1000.webp',
    alt: 'نمونه کار فیبروز ابرو نچرال در مشهد',
  },
  {
    src: '/optimized/abroo-1001.webp',
    alt: 'نمونه کار میکروبلیدینگ ابرو ظریف در مشهد',
  },
  {
    src: '/optimized/abroo-1002.webp',
    alt: 'نمونه کار آرایش دائم ابرو با خطوط طبیعی',
  },
  {
    src: '/optimized/abroo-1003.webp',
    alt: 'نمونه کار کانتور ابرو نچرال توسط فاطمه درویشی',
  },
  {
    src: '/optimized/nemooneh.webp',
    alt: 'مقایسه قبل و بعد فیبروز ابرو در مشهد',
  },
  {
    src: '/optimized/1004.webp',
    alt: 'نتیجه میکروبلیدینگ ابرو طبیعی و متقارن',
  },
  {
    src: '/optimized/1005.webp',
    alt: 'نمونه کار خط چشم دائم و بن مژه در مشهد',
  },
  {
    src: '/optimized/1006.webp',
    alt: 'نمونه کار رژ لب دائم و کانتور لب در مشهد',
  },
  {
    src: '/optimized/1008.webp',
    alt: 'نمونه کار میکروپیگمنتیشن و آرایش دائم لب',
  },
  {
    src: '/optimized/1009.webp',
    alt: 'فیبروز ابرو طبیعی با خطوط ظریف',
  },
  {
    src: '/optimized/1011.webp',
    alt: 'نمونه کار بن مژه دائم ظریف',
  },
  {
    src: '/optimized/1012.webp',
    alt: 'نمونه کار شیدینگ لب دائم طبیعی',
  },
]

const testimonials = [
  {
    name: 'خدیجه',
    initial: 'خ',
    text: 'همیشه از خالی بودن ابروهام ناراحت بودم. فاطمه جون با فیبروز یه کاری کرد که انگار ابروهای خودمه، انقدر که طبیعی و نچراله. واقعا ممنونم.',
  },
  {
    name: 'زهرا',
    initial: 'ز',
    text: 'برای من بهداشت و تمیزی محیط خیلی مهمه. سالن فاطمه جون فوق‌العاده تمیز و حرفه‌ای بود و با خیال راحت کارم رو سپردم. همه چیز استریل و عالی بود.',
  },
  {
    name: 'مریم',
    initial: 'م',
    text: 'از درد خط چشم دائم خیلی می‌ترسیدم، ولی با بی‌حسی‌های قوی که استفاده کردن، واقعاً هیچی حس نکردم. کارشون بی‌نظیره و خیلی راضیم.',
  },
  {
    name: 'حانیه',
    initial: 'ح',
    text: 'قبل از کار، فاطمه جون با حوصله بهم مشاوره داد و دقیقاً چیزی که می‌خواستم رو برام طراحی کرد. خیلی خوش‌اخلاق و متخصص هستن.',
  },
  {
    name: 'فائزه',
    initial: 'ف',
    text: 'الان یک ماهه که رژ لب دائم زدم و هر روز صبح که بیدار میشم از دیدن خودم تو آینه لذت می‌برم. دیگه نیازی به آرایش ندارم!',
  },
]

const faqs = [
  {
    question: 'آیا قبل از انجام آرایش دائم مشاوره لازم است؟',
    answer:
      'بله. نوع پوست، فرم صورت، سابقه تاتو قبلی، حساسیت‌ها و نتیجه مورد انتظار باید قبل از شروع کار بررسی شود.',
  },
  {
    question: 'کدام خدمات آرایش دائم در مرکز فاطمه درویشی انجام می‌شود؟',
    answer:
      'خدمات اصلی شامل فیبروز و میکروبلیدینگ ابرو، بن مژه، خط چشم دائم، رژ لب دائم، کانتور لب، ترمیم و مشاوره تخصصی است.',
  },
  {
    question: 'آیا نتیجه فیبروز ابرو برای همه افراد یکسان است؟',
    answer:
      'خیر. نتیجه به نوع پوست، مراقبت بعد از کار، رنگ‌پذیری پوست و انجام ترمیم بستگی دارد.',
  },
]

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: 'فاطمه درویشی',
        inLanguage: 'fa-IR',
      },
      {
        '@type': ['BeautySalon', 'LocalBusiness'],
        '@id': `${siteUrl}/#beautysalon`,
        name: 'مرکز زیبایی فاطمه درویشی',
        url: siteUrl,
        image: `${siteUrl}/optimized/abroo-1000.webp`,
        description:
          'مرکز تخصصی آرایش دائم، فیبروز ابرو، میکروبلیدینگ، بن مژه و رژ لب دائم در مشهد.',
        telephone: phoneHref,
        email: emailAddress,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰',
          addressLocality: 'مشهد',
          addressRegion: 'خراسان رضوی',
          addressCountry: 'IR',
        },
        areaServed: {
          '@type': 'City',
          name: 'مشهد',
        },
        review: testimonials.map((item) => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: item.name,
          },
          reviewBody: item.text,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'آرایش دائم و فیبروز ابرو در مشهد',
        description:
          'صفحه اصلی فاطمه درویشی؛ معرفی خدمات آرایش دائم، نمونه‌کارها، نظرات مشتریان، درباره متخصص و راه‌های تماس.',
        inLanguage: 'fa-IR',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#beautysalon`,
        },
      },
      {
        '@type': 'ItemList',
        '@id': `${siteUrl}/#services`,
        name: 'خدمات آرایش دائم فاطمه درویشی',
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            provider: {
              '@id': `${siteUrl}/#beautysalon`,
            },
            areaServed: {
              '@type': 'City',
              name: 'مشهد',
            },
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqs.map((item) => ({
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
    <main className='w-full bg-white' dir='rtl'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero */}
      <section
        className='relative overflow-hidden text-white bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/header-bg.webp')" }}
      >
        <div className='absolute inset-0 bg-black/65 z-0' />

        <div className='container mx-auto px-4 py-24 md:py-36 text-center relative z-10'>
          <p className='mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur'>
            مرکز تخصصی آرایش دائم در مشهد
          </p>

          <h1 className='text-4xl md:text-6xl font-black mb-6 leading-tight'>
            آرایش دائم و فیبروز ابرو در مشهد
          </h1>

          <p className='text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-95 leading-9 font-light'>
            با خدمات تخصصی زیبایی فاطمه درویشی، زیبایی طبیعی و ماندگار را به
            چهره خود هدیه دهید. طراحی ابرو، چشم و لب باید با فرم صورت، نوع پوست
            و سلیقه شما هماهنگ باشد؛ نه صرفاً تکرار یک مدل ثابت برای همه.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#contact'
              className='inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-emerald-800 font-bold shadow-lg transition duration-300 hover:bg-gray-100 no-underline'
            >
              مشاوره و رزرو وقت
            </a>

            <a
              href='/services'
              className='inline-flex items-center justify-center rounded-full border border-white px-8 py-3 text-white font-bold transition duration-300 hover:bg-white/10 no-underline'
            >
              مشاهده خدمات
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id='services' className='py-16 md:py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950'>
              خدمات تخصصی آرایش دائم
            </h2>
            <p className='text-gray-600 mt-4 max-w-2xl mx-auto leading-8'>
              خدمات اصلی شامل فیبروز ابرو، میکروبلیدینگ، بن مژه، خط چشم دائم،
              رژ لب دائم و کانتور لب است. انتخاب روش مناسب باید بعد از بررسی
              چهره و نوع پوست انجام شود.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {services.map((service) => (
              <article
                key={service.title}
                className='bg-gray-50 p-6 rounded-2xl shadow-sm text-center border border-gray-100 transition duration-300 hover:shadow-md'
              >
                <div className='flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mx-auto mb-4 text-emerald-700 font-black'>
                  {service.icon}
                </div>

                <h3 className='text-lg md:text-xl font-black text-gray-900 mb-3'>
                  {service.title}
                </h3>

                <p className='text-gray-600 text-sm md:text-base leading-8 mb-5'>
                  {service.description}
                </p>

                <a
                  href={service.href}
                  className='inline-flex text-emerald-700 font-bold no-underline hover:text-emerald-900'
                >
                  توضیحات کامل خدمات
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className='py-14 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            <div className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'>
              <h2 className='text-xl font-black text-gray-950 mb-3'>
                طراحی متناسب با فرم صورت
              </h2>
              <p className='text-gray-600 leading-8'>
                فرم ابرو، چشم یا لب باید با چهره شما هماهنگ باشد. نتیجه خوب از
                طراحی دقیق شروع می‌شود، نه فقط اجرای تکنیک.
              </p>
            </div>

            <div className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'>
              <h2 className='text-xl font-black text-gray-950 mb-3'>
                تمرکز بر نتیجه طبیعی
              </h2>
              <p className='text-gray-600 leading-8'>
                هدف، ایجاد ظاهری مرتب، طبیعی و قابل پذیرش در چهره روزمره است؛
                نه نتیجه‌ای سنگین یا مصنوعی.
              </p>
            </div>

            <div className='rounded-2xl bg-white p-6 border border-gray-100 shadow-sm'>
              <h2 className='text-xl font-black text-gray-950 mb-3'>
                مشاوره قبل از اجرا
              </h2>
              <p className='text-gray-600 leading-8'>
                نوع پوست، سابقه تاتو، حساسیت‌ها و انتظار شما قبل از شروع کار
                بررسی می‌شود تا تصمیم دقیق‌تری گرفته شود.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id='gallery' className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950'>
              نمونه‌کارهای آرایش دائم
            </h2>
            <p className='text-gray-600 mt-4 max-w-2xl mx-auto leading-8'>
              قبل از تصمیم‌گیری، نمونه‌کارهای واقعی را بررسی کنید. در مرحله بعد
              برای این بخش یک صفحه مستقل نمونه‌کار هم باید ساخته شود.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {galleryImages.map((img) => (
              <figure
                key={img.src}
                className='overflow-hidden rounded-2xl shadow-sm bg-white border border-gray-100 group'
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.alt}
                  className='w-full h-72 object-cover transition duration-500 group-hover:scale-105'
                  loading='lazy'
                />
                <figcaption className='p-4 text-sm text-gray-600 leading-7'>
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className='text-center mt-10'>
            <a
              href='/services'
              className='inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-white font-bold no-underline transition duration-300 hover:bg-emerald-800'
            >
              بررسی خدمات قبل از رزرو
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950'>
              صدای مشتریان ما
            </h2>
            <p className='text-gray-600 mt-4'>
              اعتماد شما، بزرگترین سرمایه مرکز زیبایی ماست.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto'>
            {testimonials.map((item) => (
              <article
                key={item.name}
                className='bg-white p-6 rounded-2xl border border-gray-100 shadow-sm'
              >
                <div className='flex items-center mb-4'>
                  <div className='w-11 h-11 rounded-full bg-emerald-700 text-white flex items-center justify-center font-black ml-3'>
                    {item.initial}
                  </div>

                  <div>
                    <h3 className='font-black text-gray-900 text-base'>
                      {item.name}
                    </h3>
                    <div
                      className='flex text-yellow-400 text-sm gap-0.5'
                      aria-label='امتیاز ۵ از ۵'
                    >
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>

                <p className='text-gray-600 text-sm md:text-base leading-8'>
                  «{item.text}»
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4 max-w-3xl'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-black text-gray-950'>
              نظر شما چیست؟
            </h2>
            <p className='text-gray-600 mt-3 leading-8'>
              تجربه شما برای ما و دیگران ارزشمند است. نظرهای ثبت‌شده باید قبل از
              انتشار بررسی شوند.
            </p>
          </div>

          <form
            className='bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100'
            action='https://formspree.io/f/xnnveowr'
            method='POST'
          >
            <input
              type='hidden'
              name='_subject'
              value='ثبت نظر مشتری از صفحه اصلی سایت'
            />

            <div className='mb-4'>
              <label
                htmlFor='review-name'
                className='block mb-2 text-sm font-bold text-gray-700'
              >
                نام شما
              </label>
              <input
                id='review-name'
                type='text'
                name='name'
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm'
                required
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='review-message'
                className='block mb-2 text-sm font-bold text-gray-700'
              >
                نظر شما
              </label>
              <textarea
                id='review-message'
                name='message'
                rows={4}
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm'
                required
              />
            </div>

            <div className='mb-6'>
              <label
                htmlFor='review-rating'
                className='block mb-2 text-sm font-bold text-gray-700'
              >
                امتیاز شما
              </label>
              <select
                id='review-rating'
                name='rating'
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm bg-white'
                defaultValue='5'
              >
                <option value='5'>۵ ستاره</option>
                <option value='4'>۴ ستاره</option>
                <option value='3'>۳ ستاره</option>
                <option value='2'>۲ ستاره</option>
                <option value='1'>۱ ستاره</option>
              </select>
            </div>

            <button
              type='submit'
              className='w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 text-sm'
            >
              ثبت نظر
            </button>
          </form>
        </div>
      </section>

      {/* About */}
      <section id='about' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto'>
            <div className='overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm'>
              <img
                src='/about.webp'
                alt='مرکز زیبایی فاطمه درویشی در مشهد'
                title='مرکز زیبایی فاطمه درویشی در مشهد'
                className='w-full h-full min-h-80 object-cover'
                loading='lazy'
              />
            </div>

            <div>
              <p className='mb-3 text-sm font-bold text-emerald-700'>
                متخصص زیبایی و آرایش دائم
              </p>

              <h2 className='text-2xl md:text-4xl font-black text-gray-950 mb-5'>
                درباره فاطمه درویشی
              </h2>

              <div className='space-y-5 text-gray-700 leading-9'>
                <p>
                  من، فاطمه درویشی، با سال‌ها تجربه و عشق به هنر زیبایی، متعهد
                  به ارائه بالاترین کیفیت خدمات آرایش دائم در مشهد هستم. فلسفه
                  کاری من بر سه اصل استوار است: دقت، هنر و سلامت.
                </p>

                <p>
                  هدف من افزایش اعتماد به نفس شما و خلق زیبایی طبیعی و ماندگار
                  است که با چهره شما هارمونی کامل داشته باشد. در خدمات آرایش
                  دائم، نتیجه خوب فقط به تکنیک وابسته نیست؛ مشاوره، طراحی،
                  انتخاب رنگ، رعایت بهداشت و مراقبت بعد از کار هم اهمیت جدی
                  دارند.
                </p>
              </div>

              <div className='mt-8 flex flex-col sm:flex-row gap-4'>
                <a
                  href='/about-us'
                  className='inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-white font-bold no-underline transition duration-300 hover:bg-emerald-800'
                >
                  بیشتر بخوانید
                </a>

                <a
                  href='/blog'
                  className='inline-flex items-center justify-center rounded-full border border-emerald-700 px-8 py-3 text-emerald-700 font-bold no-underline transition duration-300 hover:bg-emerald-50'
                >
                  مقالات آموزشی
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl mx-auto text-center mb-10'>
            <h2 className='text-2xl md:text-4xl font-black text-gray-950'>
              سوالات پرتکرار
            </h2>
            <p className='text-gray-600 mt-4 leading-8'>
              قبل از رزرو وقت، پاسخ چند سوال مهم را بررسی کنید.
            </p>
          </div>

          <div className='max-w-4xl mx-auto space-y-4'>
            {faqs.map((item) => (
              <details
                key={item.question}
                className='rounded-2xl bg-gray-50 p-6 border border-gray-100 shadow-sm'
              >
                <summary className='cursor-pointer list-none text-lg font-black text-gray-950'>
                  {item.question}
                </summary>
                <p className='mt-4 text-gray-600 leading-8'>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id='contact' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div>
              <h2 className='text-2xl md:text-4xl font-black text-gray-950 mb-5'>
                تماس با من
              </h2>

              <p className='text-gray-600 leading-8 mb-8'>
                برای سوال، مشاوره یا رزرو وقت، از راه‌های زیر با من در ارتباط
                باشید. بهتر است قبل از رزرو، نوع خدمت مورد نظر و در صورت وجود،
                سابقه تاتو یا خدمات قبلی را اعلام کنید.
              </p>

              <div className='space-y-4'>
                <div className='rounded-2xl bg-white p-5 border border-gray-100 shadow-sm'>
                  <h3 className='font-black text-gray-950 mb-2'>
                    اطلاعات تماس و آدرس
                  </h3>
                  <p className='text-gray-700 leading-8'>
                    مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰
                  </p>
                </div>

                <a
                  href={`tel:${phoneHref}`}
                  className='block rounded-2xl bg-white p-5 border border-gray-100 shadow-sm no-underline transition duration-300 hover:border-emerald-300'
                >
                  <span className='block font-black text-gray-950 mb-2'>
                    شماره تماس
                  </span>
                  <span className='text-emerald-700 font-bold'>
                    {phoneNumber}
                  </span>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className='block rounded-2xl bg-white p-5 border border-gray-100 shadow-sm no-underline transition duration-300 hover:border-emerald-300'
                >
                  <span className='block font-black text-gray-950 mb-2'>
                    ایمیل
                  </span>
                  <span className='text-emerald-700 font-bold'>
                    {emailAddress}
                  </span>
                </a>
              </div>
            </div>

            <div>
              <div className='text-center lg:text-right mb-6'>
                <h2 className='text-2xl md:text-3xl font-black text-gray-900'>
                  رزرو وقت و مشاوره
                </h2>
                <p className='text-gray-600 text-sm mt-3 leading-7'>
                  فرم زیر برای درخواست مشاوره و رزرو اولیه است.
                </p>
              </div>

              <form
                className='bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200'
                action='https://formspree.io/f/xnnveowr'
                method='POST'
              >
                <input
                  type='hidden'
                  name='_subject'
                  value='درخواست رزرو و مشاوره از صفحه اصلی سایت'
                />

                <div className='mb-4'>
                  <label
                    htmlFor='contact-name'
                    className='block mb-2 text-sm font-bold text-gray-700'
                  >
                    نام شما
                  </label>
                  <input
                    id='contact-name'
                    type='text'
                    name='name'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='contact-phone'
                    className='block mb-2 text-sm font-bold text-gray-700'
                  >
                    شماره تماس
                  </label>
                  <input
                    id='contact-phone'
                    type='tel'
                    name='phone'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm'
                    required
                  />
                </div>

                <div className='mb-4'>
                  <label
                    htmlFor='contact-service'
                    className='block mb-2 text-sm font-bold text-gray-700'
                  >
                    نوع خدمت درخواستی
                  </label>
                  <select
                    id='contact-service'
                    name='service'
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm bg-white'
                    defaultValue=''
                    required
                  >
                    <option value='' disabled>
                      انتخاب کنید
                    </option>
                    <option value='فیبروز و میکروبلیدینگ ابرو'>
                      فیبروز و میکروبلیدینگ ابرو
                    </option>
                    <option value='بن مژه و خط چشم دائم'>
                      بن مژه و خط چشم دائم
                    </option>
                    <option value='رژ لب دائم و کانتور لب'>
                      رژ لب دائم و کانتور لب
                    </option>
                    <option value='ترمیم یا اصلاح کار قبلی'>
                      ترمیم یا اصلاح کار قبلی
                    </option>
                    <option value='مشاوره'>مشاوره</option>
                  </select>
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='contact-message'
                    className='block mb-2 text-sm font-bold text-gray-700'
                  >
                    پیام شما
                  </label>
                  <textarea
                    id='contact-message'
                    name='message'
                    rows={4}
                    className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-600 transition text-sm'
                    placeholder='مثلاً سابقه تاتو قبلی، نوع پوست، خدمت مورد نظر یا زمان پیشنهادی خود را بنویسید.'
                    required
                  />
                </div>

                <button
                  type='submit'
                  className='w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 text-sm'
                >
                  ارسال اطلاعات و درخواست رزرو
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}