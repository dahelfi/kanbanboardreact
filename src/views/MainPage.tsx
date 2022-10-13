import { useState}from 'react'
import { Header } from '../components/Header'
import { generateHash } from '../services/hash'
import { TabelementType } from '../types/tabelement'
import { BoardElement } from './BoardElement'
import { BacklogElement } from './BacklogElement'
import { AddTaskElement } from './AddTaskElement'
import { HelpElement } from '../components/HelpElement'
import { OverviewContainer } from '../components/OverviewContainer'

const tabElementsArray = [{
  id: generateHash(4),
  name: "Board",
  shownElement: <BoardElement/>
},{
  id: generateHash(4),
  name: "Backlog",
  shownElement: <BacklogElement/>
},{
  id: generateHash(4),
  name: "Add Task",
  shownElement: <AddTaskElement/>
},{
  id: generateHash(4),
  name: "Help",
  shownElement: <HelpElement/>
}]

export const MainPage = () => {
  const [tabElements, setTabelements] = useState<TabelementType[]>(tabElementsArray as TabelementType[]);
  const [activeTab, setActiveTab] = useState <string>(tabElements[0].id);

  const testFunction = (id: string)=>{
    setActiveTab((id));
  }

  return (
    <div style={{display: "flex", alignItems: "center", height: "100vh", width: "100vw"}}>
      <Header onChangeElement={testFunction} tabElements={tabElements} activeTab={activeTab}/>
      <OverviewContainer elementArray={tabElements} activeTab={activeTab}/>
    </div>
  )
}
