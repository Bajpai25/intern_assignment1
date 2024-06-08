import React,{useState} from 'react'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ColorPalette from './ColorPalette';
import { Link } from 'react-router-dom';

function Color() {
    
    const [colors, setColors] = useState([
        '#FF5733', '#33FF57', '#3357FF', '#F333FF',
        '#FF33A1', '#A1FF33', '#33FFF5', '#F5FF33'
      ]);

  return (
    <div>
     <DndProvider backend={HTML5Backend}>
      <ColorPalette colors={colors} setColors={setColors} />
    </DndProvider>   
    <Link to="/"><button>Go back</button></Link>
    </div>
  )
}

export default Color
