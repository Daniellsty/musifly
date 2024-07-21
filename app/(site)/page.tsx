import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import imageTitle from '../../public/images/images (1).png'
import getSongs from '@/actions/getSongs'
import PageContent from './components/PageContent'

const page =  async () => {
   
   const songs = await getSongs();
//    console.log(songs);

   
    
  return (
    <div
    className='bg-neutral-900
    rounded-lg
    w-full
    min-h-full
    overflow-hidden
    overflow-y-auto
    
    '
    >
        <Header>
            <div className='mb-2'>
            <h1 className='text-white text-3xl font-semibold'>
                 :)   خوش آمدید  musifly به
            </h1>
            <div className='grid grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4gap-3
            mt-4
            '>
            <ListItem
            name='مورد علاقه ها'
            href='Liked'
            image={imageTitle}
            />
            </div>
            </div>
        </Header>
        <div className='mt-2 mb-7 px-6'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white text-2xl font-semibold'>
                    جدید ها
                </h1>
            </div>
            <div>
                !لیست آهنگ ها
            </div>
        </div>
        <PageContent
        songs={songs}
        />

    </div>
  )
}

export default page