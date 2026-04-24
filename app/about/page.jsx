import React from 'react'

const about = () => {
  return (
    //<div>about</div>
    <div className="bg-white max-w-6xl w-full p-12 border border-gray-100 shadow-sm relative">
      {/* <div className="absolute top-4 left-4">
        <Link href="/" className="text-[10px] text-gray-500 hover:underline">home</Link>
      </div> */}
      
      

      {/*Top section*/}
      <div className="flex flex-row items-center justify-between mt-6 mb-16">
        <div className="w-56 h-56 bg-[#d9d9d9] rounded-full flex items-center justify-center text-center p-6 text-[10px] text-black -mt-30">
          picture still in progress
        </div>
        <div className="flex-1 px-10">
        <h1 className="text-5xl font-bold text-[#b5d3ff] mb-6 tracking-wide drop-shadow-sm">
          Christina Rojas-Diaz
        </h1>
        <div className="text-[12px] space-y-3 font medium text-black">
          <p>⊹ ࣪ ˖ CS major @ University of Illinois, Chicago</p>
          <p>₊˚⊹ ᰔExpected graduation: May, 2028</p>
          <p>✩｡° christyrd.17@gmail.com</p>
          <p>⟡ ݁₊ . Chicago, IL 60623</p>
        </div>
        <div className="w-48 h-48 flex items-center justify-center ml-auto">
          <img src="/hanni.jpg" alt="Hanni" className="w-full h-auto object-contain -mt-50"/>
        </div>
      </div>
    </div>
      
      {/*Bottom sections*/}
      <div className="flex flex-row flex-nowrap gap-8 justify-center items-start w-full px-10">
        {/*Left Window*/}
        <div className="flex flex-col min-w-[100px]">
          <div className="bg-white border-2 border-black rounded-md border-b-0 px-9 py-1 self-start text-[11px] font-bold">
            About me
          </div>
          <div className="bg-[#d3e6ff] border-2 border-black p-3 h-full flex flex-col">
            <div className="bg-white p-1 flex-1">
              <div className="w-full h-29 mb-4 overflow-hidden flex justify-center items-center">
                <img src="/wings.jpg" alt="Wings" className="max-h-full object-contain opacity-70" />
              </div>
              <p className ="test-[11px] leading-relaxed text-black">
                My name is Christina Rojas-Diaz. I am a computer science major at the University of Illinois, Chicago. My interest in CS began when I took AP Computer Science Principles during my junior year in high school. Throughout time, I learned the basic knowledge of CS and learned how to program using Python and C++. My main focus is on being able to implement creativity in programming projects. Aside from coding, my hobbies consist of listening to music, playing some games, and finding creative projects to work on. This made me realize that I can combine both my interests in creativity and CS, and combine them when it comes to projects.
              </p>
            </div>
          </div>
        </div>
        {/*Right Window*/}
          <div className="flex flex-col min-w-[100px]">
            <div className="bg-white border-2 border-black border-b-0 px-3 py-1 self-start text-[11px] font-bold">
              About me cont.
            </div>

            <div className="bg-[#d3e6ff] border-2 border-black p-3 h-full flex flex-col">
              <div className="bg-white p-1 flex-1 flex flex-col">
                <p className="text=[11px] leading-relaxed mb-4 text-black">
                  Besides from CS, I am very into listening to music; Some of my favorite artists being Beabadoobee, Laufey, The Marias, Illit, New Jeans, and many more. I also enjoy watching movies, spending time with friends and family, doing arts and crafts, trying out new restaurants and coffee shops, and journaling. These hobbies bring out much creativity in me. It reminds me that life is full of many surprises and we must enjoy it to the fullest. I thank my loved ones for making this life so special to me.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-auto">
                  <div className="aspect-square bg-gray-200 border border-black overflow-hidden">
                    <img src="bea.jpg" alt="bea" className="w-full h-full object-cover"/>
                  </div>
                  <div className="aspect-square bg-gray-200 border border-black overflow-hidden">
                    <img src="laufey.jpg" alt="Laufey" className="w-full h-full object-cover"/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default about