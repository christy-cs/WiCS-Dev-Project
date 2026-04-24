import React from 'react'

const contact = () => {
  return (
    //<div>contact</div>
    <div className="bg-white max-w-6xl w-full p-12 border border-gray-100 shadow-sm relative mx-auto my-10 min-h-[85vh]">
      <div className="flex flex-col w-full max-w-4xl mx-auto mt-16">
        <div className="bg-[#d3e6ff] border-2 border-black border-b-0 px-75 py-1 self-start text-[11px] font-bold z-10 ml-4 rounded-t-sm">
          Contacts
        </div> 

        <div className="bg-white border-2 border-black -mt-[2px] p-10 shadow-[6px_6px_0px_rgba(0,0,0,0.05)]">
          <h1 className="text-4xl font-bold mb-12 text-black tracking-tight">Let's connect</h1>
          {/*Linkedin */}
          {/* <div className="flex flex-row justify-between items-start gap-12">           */}
          <div className="flex items-center gap-6">
            <div className="w-18 h-18 flex items-center justify-center">
              <img src="/linkedin.jpg" alt="LinkedIn" className="w-full h-auto" />
            </div>
            <a href="www.linkedin.com/in/christina-rojas-diaz" target="_blank" rel="noopener noreferrer" className="text-[12px] underline decoration-1 underline-offset-4 hover:text-blue-400 break-all text-black">
              www.linkedin.com/in/christina-rojas-diaz
            </a> 
          </div>
          {/*Github */}
          <div className="flex items-center gap-6">
            <div className="w-15 h-15 flex items-center justify-center">
              <img src="/github.jpg" alt="GitHub" className="w-full h-auto"/>
            </div>
            <a href="https://github.com/christy-cs" target="_blank" rel="noopener noreferrer" className="text-[12px] underline decoration-1 underline-offset-4 hover:text-blue-400 break-all text-black">
              https://github.com/christy-cs
            </a>
          </div>
          {/*Gmail*/}
          <div className="flex items-center gap-6">
            <div className="w-18 h-18 flex items-center justify-center">
              <img src="/gmail.jpg" alt="Gmail" className="w-full h-auto"/>
            </div>
            <span className="text-[12px] text-black">christyrd.17@gmail.com</span>
          </div>
            <div className="flex flex-col items-center gap-6 w-[340px]">
              <div className="w-60 h-44 mb-2">
              <img src="/pusheen cs.jpg" alt="Pusheen" className="w-full h-full object-contain"/>
            
              </div>
          </div>
        </div>
        

      </div>

    </div>
  )
}

export default contact