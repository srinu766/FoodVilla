import { useState } from "react"

const Section =({title, discription, isVisible, setIsVisible})=>{
        return(
            <div className="p-5 m-5 border border-black text-white bg-zinc-700">
                <h3 className="font-bold text-xl">{title}</h3>
                {
                    isVisible ? (  
                    <> 
                    <button className="cursor-pointer underline" onClick={()=>setIsVisible(false)}>hide</button><p>{discription}</p></>
                        ) : (
                    <button className="cursor-pointer underline" onClick={()=>setIsVisible(true )}>Show</button>)
                }
        
            </div>
        )
}

const Instamart =()=>{

    const [visibleSection, setVisibleSection]  = useState("about");

    return(

        <div>
        <h1 className="font-bold text-4xl p-2 m-2">Instamart page</h1>
        <Section
        title={"About"}
        discription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        isVisible ={visibleSection == "about"}
        setIsVisible={()=>setVisibleSection(visibleSection == "about" ? "" : "about")} 
        />
         <Section
        title={"Team"}
        discription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        isVisible={visibleSection == "team"}
        setIsVisible={()=>setVisibleSection(visibleSection == "team" ? " " : "team")}
       
        
        />
         <Section
        title={"Careers"}
        discription={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        isVisible={visibleSection == "career"}
        setIsVisible={()=>setVisibleSection(visibleSection == "career" ? " " : "career")}
        />
        
        </div>
    )
}
export default Instamart;