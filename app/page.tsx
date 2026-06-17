import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'خانه | فاطمه درویشی مشهد - آرایش دائم در مشهد',
  description:
    'خدمات تخصصی آرایش دائم، فیبروز ابرو، خط چشم و رژ لب دائم در مشهد با کیفیت بالا و محیط کاملاً استریل.',
  keywords: [
    'آرایش دائم',
    'فیبروز ابرو',
    'میکروبلیدینگ',
    'خط چشم دائم',
    'رژ لب دائم',
    'مشهد',
  ],
  openGraph: {
    title: 'آرایش دائم فاطمه درویشی مشهد | میکروبلیدینگ، فیبروز و رژ لب دائم',
    description:
      'خدمات آرایش دائم و زیبایی در مشهد با تخصص بالا و نمونه‌کارهای واقعی.',
    type: 'website',
    url: 'https://fatemedarvishi.ir',
    images: [
      {
        url: 'https://fatemedarvishi.ir/optimized/abroo-1000.webp',
        alt: 'نمونه کار فیبروز ابرو توسط فاطمه درویشی مشهد',
      },
    ],
  },
}

export default function HomePage() {
  // لیست تصاویر گالری بر اساس فایل‌های واقعی موجود در پوشه public شما
  const galleryImages = [
    {
      src: '/optimized/abroo-1000.webp',
      alt: 'نمونه کار فیبروز ابرو نچرال در مشهد',
    },
    {
      src: '/optimized/abroo-1001.webp',
      alt: 'نمونه کار میکروبلیدینگ ابرو ظریف',
    },
    { src: '/optimized/abroo-1002.webp', alt: 'نمونه کار آرایش دائم ابرو' },
    { src: '/optimized/abroo-1003.webp', alt: 'نمونه کار کانتور ابرو نچرال' },
    { src: '/optimized/abroo-1001.webp', alt: 'مرکز زیبایی فاطمه درویشی مشهد' },
    { src: '/optimized/1004.webp', alt: 'نمونه کار آرایش دائم ابرو در مشهد' },
    { src: '/optimized/1005.webp', alt: 'مرکز زیبایی فاطمه درویشی مشهد' },
    { src: '/optimized/1006.webp', alt: 'نمونه کار آرایش دائم ابرو در مشهد' },
    { src: '/optimized/1008.webp', alt: 'مرکز زیبایی فاطمه درویشی مشهد' },
    { src: '/optimized/nemooneh.webp', alt: 'مقایسه قبل و بعد فیبروز ابرو' },
  ]

  return (
    <div className='w-full'>
      {/* ۱. بخش Hero (خوش‌آمدگویی با تصویر پس‌زمینه) */}
      <section
        className='relative text-white bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: "url('/header-bg.webp')" }}
      >
        {/* لایه تیره روی عکس برای خوانایی متن‌ها */}
        <div className='absolute inset-0 bg-black/60 z-0'></div>

        <div className='container mx-auto px-4 py-24 md:py-36 text-center relative z-10'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-6 leading-tight'>
            آرایش دائم و فیبروز ابرو در مشهد
          </h1>
          <p className='text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 font-light'>
            با خدمات تخصصی زیبایی فاطمه درویشی مشهد، زیبایی طبیعی و ماندگار را به
            چهره خود هدیه دهید.
          </p>
          <a
            href='#contact'
            className='inline-block bg-white text-emerald-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 no-underline'
          >
            مشاوره و رزرو وقت
          </a>
        </div>
      </section>

      {/* ۲. بخش خدمات تخصصی */}
      <section id='services' className='py-16 md:py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-950'>
              خدمات تخصصی ما
            </h2>
            <p className='text-gray-600 mt-2'>
              ارائه جدیدترین تکنیک‌های آرایش دائم با بالاترین کیفیت
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* کارت خدمت ۱ */}
            <div className='bg-gray-50 p-6 rounded-xl shadow-xs text-center border border-gray-100'>
              <div className='flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mx-auto mb-4'>
                <i className='fas fa-eye text-2xl text-emerald-700'></i>
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                میکروبلیدینگ و فیبروز ابرو
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                ایجاد ابروهایی کاملا طبیعی و پرپشت با شبیه‌سازی تارهای موی
                واقعی، متناسب با فرم صورت شما.
              </p>
            </div>

            {/* کارت خدمت ۲ */}
            <div className='bg-gray-50 p-6 rounded-xl shadow-xs text-center border border-gray-100'>
              <div className='flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mx-auto mb-4'>
                <i className='fas fa-pen-nib text-2xl text-emerald-700'></i>
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                خط چشم دائم و بن مژه
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                چشمانی گیرا و جذاب در تمام ساعات شبانه‌روز، بدون نیاز به آرایش
                روزانه و دغدغه پاک شدن.
              </p>
            </div>

            {/* کارت خدمت ۳ */}
            <div className='bg-gray-50 p-6 rounded-xl shadow-xs text-center border border-gray-100'>
              <div className='flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 mx-auto mb-4'>
                <i className='fas fa-magic text-2xl text-emerald-700'></i>
              </div>
              <h3 className='text-lg font-bold text-gray-900 mb-2'>
                رژ لب دائم و کانتور لب
              </h3>
              <p className='text-gray-600 text-sm leading-relaxed'>
                بخشیدن رنگی زیبا، شاداب و طبیعی به لب‌ها برای رفع بی‌رنگی و
                جذابیت دائمی چهره شما.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ۳. بخش نمونه کارها (گالری تصاویر واقعی) */}
      <section id='gallery' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-2xl md:text-3xl font-bold text-center mb-10 text-gray-950'>
            نمونه کارهای ما
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className='overflow-hidden rounded-xl shadow-xs bg-white border border-gray-100 group'
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className='w-full h-72 object-cover group-hover:scale-105 transition duration-500'
                  loading='lazy'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ۴. بخش نظرات مشتریان */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-950'>
              صدای مشتریان
            </h2>
            <p className='text-gray-600 mt-2'>
              اعتماد شما، بزرگترین سرمایه مرکز زیبایی ماست.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-gray-50 p-6 rounded-xl border border-gray-100'>
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold ml-3'>
                  خ
                </div>
                <div>
                  <p className='font-bold text-gray-900 text-sm'>خدیجه</p>
                  <div className='flex text-yellow-400 text-xs gap-0.5'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                </div>
              </div>
              <p className='text-gray-600 text-sm italic leading-relaxed'>
                "همیشه از خالی بودن ابروهام ناراحت بودم. فاطمه جون با فیبروز یه
                کاری کرد که انگار ابروهای خودمه، انقدر که طبیعی و نچراله."
              </p>
            </div>

            <div className='bg-gray-50 p-6 rounded-xl border border-gray-100'>
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold ml-3'>
                  ز
                </div>
                <div>
                  <p className='font-bold text-gray-900 text-sm'>زهرا</p>
                  <div className='flex text-yellow-400 text-xs gap-0.5'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                </div>
              </div>
              <p className='text-gray-600 text-sm italic leading-relaxed'>
                "برای من بهداشت و تمیزی محیط خیلی مهمه. سالن فاطمه جون
                فوق‌العاده تمیز و حرفه‌ای بود و همه چیز استریل و عالی بود."
              </p>
            </div>

            <div className='bg-gray-50 p-6 rounded-xl border border-gray-100'>
              <div className='flex items-center mb-3'>
                <div className='w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold ml-3'>
                  م
                </div>
                <div>
                  <p className='font-bold text-gray-900 text-sm'>مریم</p>
                  <div className='flex text-yellow-400 text-xs gap-0.5'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                </div>
              </div>
              <p className='text-gray-600 text-sm italic leading-relaxed'>
                "از درد خط چشم دائم خیلی می‌ترسیدم، ولی با بی‌حسی‌های قوی که
                استفاده کردن، واقعاً هیچی حس نکردم. کارشون بی‌نظیره."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ۵. فرم تماس و رزرو */}
      <section id='contact' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4 max-w-2xl'>
          <div className='text-center mb-8'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-900'>
              رزرو وقت و مشاوره
            </h2>
            <p className='text-gray-600 text-sm mt-2'>
              مشهد، بزرگراه پیامبراعظم، پیامبر اعظم ۱۰۱، توس ۱۶۰
            </p>
          </div>
          <form
            className='bg-white p-6 md:p-8 rounded-xl shadow-xs border border-gray-200'
            action='https://formspree.io/f/xnnveowr'
            method='POST'
          >
            <div className='mb-4'>
              <label className='block mb-1.5 text-sm font-medium text-gray-700'>
                نام شما
              </label>
              <input
                type='text'
                name='name'
                className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-hidden focus:border-emerald-600 transition text-sm'
                required
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-1.5 text-sm font-medium text-gray-700'>
                شماره تماس
              </label>
              <input
                type='tel'
                name='phone'
                className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-hidden focus:border-emerald-600 transition text-sm'
                required
              />
            </div>
            <div className='mb-5'>
              <label className='block mb-1.5 text-sm font-medium text-gray-700'>
                پیام یا نوع خدمات درخواستی
              </label>
              <textarea
                name='message'
                rows={4}
                className='w-full p-2.5 border border-gray-300 rounded-lg focus:outline-hidden focus:border-emerald-600 transition text-sm'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 text-sm'
            >
              ارسال اطلاعات و درخواست رزرو
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
