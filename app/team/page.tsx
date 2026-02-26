import Convener from "../components/convener"
import MobileTeam from "../components/mobileteam"
import { getStudentTeam } from "@/lib/studentsteam";
import Team from "../components/team";



export default async function Page(){
  const teamMembers = await getStudentTeam(); 
    return(
    
    <main className="pt-20">
        
       <div className="hidden lg:block">
         <Convener  />
         <Team teamMembers = {teamMembers}/>
       </div>
       <div className="block lg:hidden">
         <MobileTeam />
         <Team teamMembers = {teamMembers}/>
       </div>
        
    </main>
    
  
    
    

    
)
}