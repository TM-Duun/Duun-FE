import { useState } from "react";
import { Btn, DWrapper, DropList, ListItems } from "../DropDown/DropDownStyles" 

export default function CategoryDropDown(){
    const options=["조회순",'최신순','인기순']
    const [isOpen, setIsOpen] = useState(false);
    const [selectOption,setSelecetOption] = useState(options[0]);

    const onToggle = () => setIsOpen(!isOpen);
    
    const onOptionClicked = (value:string) => {
      setSelecetOption(value);
      setIsOpen(false);
    };
    return (
      <DWrapper>
        <Btn onClick={onToggle}>{selectOption} 
          <img src="/homedata/down_arrow.svg"/>
        </Btn>
        {isOpen && (
          // <div style={{position:'absolute', width:'100%',zIndex:'102'}}>
          <DropList className="dropdown-list">
          {options.map((option, index) => (
            <ListItems key={index} className="dropdown-list-item" onClick={()=>onOptionClicked(option)}>
              {option}
            </ListItems>
          ))}
        </DropList>
        // </div>
      )}
      </DWrapper>
    );
  }
  