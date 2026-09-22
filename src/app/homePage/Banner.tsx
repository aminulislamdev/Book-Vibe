import Image from 'next/image';
import bannerImg from '@/app/assets/hero_img.jpg';

const Banner = () => {
  return (
    <div className='container mx-auto my-10 px-4'>
  
      <div className='bg-gray-100 rounded-3xl p-8 md:p-12 lg:p-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>

      <div className='space-y-8'>

          <h2 className='text-3xl md:text-4xl lg:text-[56px] font-serif font-bold leading-tight text-gray-900'>
            Books to freshen up <br className='hidden sm:block' /> your bookshelf
          </h2>

          <button className='bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-3 px-8 rounded-lg text-lg'>
            View The List
          </button>
        </div>

        {/* Image Content */}
        <div className='flex justify-center md:justify-end'>
          <Image
            src={bannerImg}
            alt='Banner Image'
            width={300}
            height={400}
            className='drop-shadow-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;