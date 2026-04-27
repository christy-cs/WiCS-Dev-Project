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

      {/*Up design */}
      <div className="flex flex-col gap-8 w-full max-w-7xl justify-center items-start">
        <div classname="bg-white border-b-2 border-black p-2 flex items-center gap-2">
          {/* <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div> */}
          <div className="flex-1 bg-white border-2 border-black rounded-full h-5 px-3 flex items-center">
            <span className="text-[10px] font-bold">Experience</span>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white border-2 border-black rounded p-1 h-[400px] overflow-y-auto">
            <div className="w-full h-32 mb-4 overflow-hidden">
                <img src="/blueheader.jpg" alt="banner" className="max-h-full object-contain opacity-70" />
              </div>
              {/*Student Coordinator */}
            <h2 className="text-lg font-bold">Student Coordinator w/ Discovery Partners Institute</h2>
            <p className="text-xs mt-4">June 2025 - August 2025</p>
            <p className="text-xs mt-4">★ Engaging with students on a daily basis to establish a safe and inviting learning environment and support classroom and program management</p>
            <p className="text-xs mt-4">★ Supporting daily speaker and weekly workshop coordination</p>
            <p className="text-xs mt-4">★ Assisting with program photos and other program logistics</p>

            {/*Student Intern*/}
            <h2 className="text-lg font-bold">Digital Scholar w/ Discovery Partners Institute</h2>
            <p className="text-xs mt-4">Data Science Cohort, Student Intern           June 2024 - August 2024</p>
            <p className="text-xs mt-4">Foundations in Computer Science, Student Intern           June 2023 - August 2023</p>
            <p className="text-xs mt-4">★ Enhanced computing proficiency and bolstered college and career readiness while establishing connections within Chicago's vibrant tech ecosystem over a six-week program.</p>
            <p className="text-xs mt-4">★ Investigated the intersection of statistics and computing through hands-on analysis of real-world datasets, utilizing Python to uncover insights and assess data impact.</p>
            <p className="text-xs mt-4">★ Engaged in weekly workshops covering pivotal topics such as artificial intelligence, machine learning, and data science, featuring presentations from leading tech incubators in Chicago.</p>
            <p className="text-xs mt-4">★ Developed essential skills in public speaking, teamwork, and professional networking, alongside other critical work-readiness competencies.</p>
            <p className="text-xs mt-4">★ Acquired foundational computing concepts and problem-solving techniques by learning the Java programming language.</p>
            
            {/*OfY OSC */}
            <h2 className="text-lg font-bold">Student Coordinator w/ Discovery Partners Institute</h2>
            <p className="text-xs mt-4">Communication Intern June 2022 - August 2022</p>
            <p className="text-xs mt-4">★ Collaborated with a team to investigate the importance of effective communication during adolescence, analyzing various influential factors that impact youth interactions</p>

          </div>
        </div>

      </div>


      {/*Down design*/}
      <div className="flex flex-col gap-8 w-full max-w-7xl justify-center items-start">
        <div classname="bg-white border-b-2 border-black p-2 flex items-center gap-2">
          {/* <div className="w-3 h-3 rounded-full bg-black"></div>
          <div className="w-3 h-3 rounded-full bg-black"></div> */}
          <div className="flex-1 bg-white border-2 border-black rounded-full h-5 px-3 flex items-center">
            <span className="text-[10px] font-bold">Projects</span>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white border-2 border-black rounded p-1 h-[400px] overflow-y-auto">
            <div className="w-full h-32 mb-4 overflow-hidden">
                <img src="/blueheader.jpg" alt="banner" className="max-h-full object-contain opacity-70" />
              </div>
            <h2 className="text-lg font-bold">Personal Website - Web Dev Project WiCS</h2>
            <p className="text-xs mt-4">The Women in Computer Science student organization at UIC selected a group of students, including me, to participate in a 12-week collab project to create personal websites. Using React, HTML, and Javascript, I created a functional website to introduce myself and my programming projects</p>
            <h2 className="text-lg font-bold">Financial Risk Dataset</h2>
            <p className="text-xs mt-4">Students were given the opportunity to choose a dataset they are interested in and create their own questions to answer regarding the dataset. The financial risk dataset was taken from Kaggle.com . I focused on 3 countries (USA, Mexico and Canada) and compared the data to determine which country has the lowest financial risk probability.</p>
            <a href="https://colab.research.google.com/drive/1-xwbudI4IHyfgdggbLO0-zE-y3A9Hr8y?usp=sharing " target="_blank" rel="noopener noreferrer" className="text-[12px] underline decoration-1 underline-offset-4 hover:text-blue-400 break-all text-black">
              Google Colab Report
            </a>
          
          </div>
        </div>

      </div>
    </main>

  )
}

export default projects