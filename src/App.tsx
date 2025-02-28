import { useState } from 'react';
import SelectTask from './components/selectTask/SelectTask';
import Stars from './components/Stars/Stars';
import './App.css';
import Listing from './components/offersList/Listing';
import data from "./components/offersList/etsy.json";


function App() {
  // eslint-disable-next-line prefer-const
  let [ curTask, setCurTask ] = useState('STARS');
  const tasks = [
    { taskName: 'STARS', solving: <Stars count={1} key={'STARS'} />},
    { taskName: 'OFFERSLIST', solving: <Listing items={data} key={'OFFERSLIST'} /> },
  ];

  return (
    <>
      <SelectTask tasks={tasks} setTask={(task: string) => setCurTask(curTask = task)} curTask={curTask} />      
      <div>        
        { tasks.filter(task => task.taskName === curTask).map(task => task.solving) }
      </div>
    </>
  )
}

export default App;
