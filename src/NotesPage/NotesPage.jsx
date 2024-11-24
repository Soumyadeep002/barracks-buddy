import React, {useEffect} from 'react'
import NoteCard from './NoteCard'

import img1 from '../../public/images/FreeNote/1.png'
import img2 from '../../public/images/FreeNote/2.png'
import img3 from '../../public/images/FreeNote/3.png'
import img4 from '../../public/images/FreeNote/4.png'
import img5 from '../../public/images/FreeNote/5.png'
import img6 from '../../public/images/FreeNote/6.png'
import img7 from '../../public/images/FreeNote/7.png'
import img8 from '../../public/images/FreeNote/8.png'
import img9 from '../../public/images/FreeNote/9.png'
import img10 from '../../public/images/FreeNote/10.png'
import img11 from '../../public/images/FreeNote/11.png'
import img12 from '../../public/images/FreeNote/12.png'

export default function NotesPage() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className='py-32 md:py-36 lg:py-44 px-5'>
    <div className='w-full md:w-[95%] lg:w-[90%] xl:w-[85%] mx-auto'>
            <h1 className='font-bold text-3xl md:text-5xl ml-4 mb-5'>Free Notes: </h1>
        <div className=" bg-gray-300 rounded-[3.5rem] p-7 md:p-8 lg:p-10 mx-auto flex flex-col gap-10">
                <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 flex flex-col gap-3 md:gap-6 lg:gap-12">
                    <h1 className='font-bold text-2xl md:text-3xl ml-4 '>History: </h1>
                    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-8 justify-center items-center">
                        <NoteCard img={img1}/>
                        <NoteCard img={img2}/>
                        <NoteCard img={img3}/>
                
                    </div>
                </div>
                <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 flex flex-col gap-3 md:gap-6 lg:gap-12">

                    <h1 className='font-bold text-2xl md:text-3xl ml-4 '>Geography: </h1>
                    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-8 justify-center items-center">
                        <NoteCard img={img4}/>
                        <NoteCard img={img5}/>
                        <NoteCard img={img6}/>
                
                    </div>
                 
                </div>
                <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 flex flex-col gap-3 md:gap-6 lg:gap-12">
                    <h1 className='font-bold text-2xl md:text-3xl ml-4 '>Science: </h1>
                    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-8 justify-center items-center">
                        <NoteCard img={img7}/>
                        <NoteCard img={img8}/>
                        <NoteCard img={img9}/>
                
                    </div>
                </div>
                <div className="bg-white rounded-[2.5rem] px-6 md:px-7 lg:px-8 py-10 flex flex-col gap-3 md:gap-6 lg:gap-12">
                    <h1 className='font-bold text-2xl md:text-3xl ml-4 '>Economy and Polity: </h1>
                    <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-8 justify-center items-center">
                        <NoteCard img={img10}/>
                        <NoteCard img={img11}/>
                        <NoteCard img={img12}/>
                
                    </div>
                </div>
        </div>
    </div>
</div>
  )
}
