import Header from "./components/Header"
import Project from "./components/Project"
import Section from "./components/Section"
import Signature from "./assets/Signature"
import TitleDate from "./components/TitleDate"

const projects = [
  { 
    name: "PasteApp", 
    description: "Online clipboard that allows users to log in with multiple devices to share copied text in real-time across them.",
    stack: ["Javascript", "React", "Firestore", "Firebase auth"],
    deployurl: undefined,
    github: "url",
    id: 0
  },
  { 
    name: "TasaVE", 
    description: "Reference website for users to get and easily make conversions with the latest official VES/USD exchange rate from the Central Bank of Venezuela.",
    stack: ["Javascript", "React", "TailwindCSS", "BCV-API"],
    deployurl: undefined,
    github: "url",
    id: 1
  },
  { 
    name: "BCV-API", 
    description: "API that allows developers to easily and reliably get the current VES/USD exchange rate. Powers TasaVE.",
    stack: ["Python", "Flask", "Firebase Cloud Functions", "Firestore"],
    deployurl: undefined,
    github: "url",
    id: 2
  },
]

function App() {

  return (
    <div className="main">
      <Header/>
      <Section sectionLabel='ABOUT ME'>
        <p>Computer Science student at Florida International University. Passionate about learning new things and finding new challenges. Currently diving into the world Full-Stack development.</p>
      </Section>
      <Section sectionLabel='EDUCATION'>
      <TitleDate title='Florida International University' date='since Jan 2021'/>
        <ul>
          <li>Computer Science Major 3.86 GPA</li>
        </ul>
        <TitleDate title='Google Tech Exchange' date='Jan 2023 - May 2023'/>
        <ul>
          <li>Learned about Algorithms and Data Structures from Google Engineers.</li>
        </ul>
        <p><b>Relevant Coursework:</b> Applied Data Structures, Database Management, Operating Systems, Computer Architecture, Data Mining, Linear Algebra.</p>
      </Section>
      <Section sectionLabel='EXPERIENCE'>
        <div className="div">
          <TitleDate title='Dataprecio - Python Developer' date='since March 2022'/>
          <ul>
            <li>Replaced a manual process for price data extraction with a fully automated one, drastically reducing the time required, while at the same time increasing scale and reliability.</li>
            <li>Developed a web app that allows users to compare products from various local retailers to find the best deal for them.</li>
          </ul>
        </div>
      </Section>
      <Section sectionLabel='PROJECTS'>
        { projects.map(p => <Project key={p.id} project={p}/>)}
      </Section>
      <Signature/>
      <footer>Copyright 2023 Diego Moreno</footer>
    </div>
  )
}

export default App

// TODO:
// FIX DATAPRECIO TEXT AND TEXT IN GENERAL, A ADD RESUME DOWNLOAD
// SVG HOVER DECORATION LIKE REGULAR LINKS