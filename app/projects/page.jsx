import React from 'react'
import Link from 'next/link'

const projects = () => {
  return (
    //<div>projects</div>
    <main className ="min-h-screen bg-[f0f4f8] p-10 font-mono flex flex-col items-center">
      <div className="mb-8 w-full max-w-6xl">
        <Link href="/" className="text-xs hover:underline">← ⌂</Link>
      </div>
      <div className="flex flex-row gap-10 justify-center items-start max-w-7xl mx-auto">

      </div>
      {/*Left design*/}
      <div className="flex flex-col gap-8 w-full max-w-7xl justify-center items-start">
        <div classname="bg-white border-b-2 border-black p-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="flex-1 bg-white border-2 border-black rounded-full h-5 px-3 flex items-center">
            <span className="text-[10px] font-bold">Project One</span>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white border-2 border-black rounded p-6 h-[500px] overflow-y-auto">
            <h2 className="text-lg font-bold">Financial Risk Dataset</h2>
            <p className="text-xs mt-4">Students were given the opportunity to choose a dataset they are interested in and create their own questions to answer regarding the dataset. The financial risk dataset was taken from Kaggle.com . I focused on 3 countries (USA, Mexico and Canada) and compared the data to determine which country has the lowest financial risk probability.</p>
          </div>
        </div>

      </div>
    </main>

  )
}

export default projects