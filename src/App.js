import { useRef, useState } from "react";

function App() {
  const [taskList, setList] = useState([])
  const [line, setLine] = useState(false)
  const [task, setTask] = useState("")
  const input = useRef()
  const element = useRef()

  const strike = () => {
    setLine(true)
    return input.current.style.textDecoration = line ? 'line-through' : "none"
  }

  const remove = (index) => {
    const allitem = [...taskList]
    allitem.splice(index, 1)
    setList(allitem)
  }

  return (
    <div className="flex justify-center bg-orange-500 h-screen">
      <div className="bg-black h-[55%] w-[30%] self-center flex-col relative rounded-[1rem]">
        <div className="flex flex-col h-[10rem]">
          {taskList.map((e, index) => { return <Compo fun={strike} remove={remove} element={e} elementIn={index} input={input} node={element} /> })}
        </div>
        <div className="translate-y-[8rem] fixed translate-x-[5rem] flex flex-row justify-center gap-1">
          <input type="text" className="border-2 border-red-600 h-[2rem] self-end mb-5" onChange={(event) => {setTask(event.target.value)}} />
          <button className="border-2 border-blue-500 h-[2rem] self-end p-1 mb-5 text-blue-500" onClick={() => {setList([...taskList, task])}}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default App;

function Compo(props) {
  return (<div className="flex flex-row gap-4 w-5rem text-pink-600 mt-7 self-center" ref={props.node}>
    <span key={props.elementIn} ref={props.input}>{props.element}</span>
    <button className="border-2 border-blue-500 text-white p-1" onClick={props.fun}>complete</button>
    <button className="p-1 border-2 border-blue-500 text-white" onClick={props.remove}>delete</button></div>
  )
}