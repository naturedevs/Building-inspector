import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { GFormI } from '../../pages/gform/types';
import { IUser } from '../../redux/types';
import { setQueSeq, setSecSeq, setAllSections } from '../../redux/features/form/formSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { API_ROUTES, MSG } from "../../utils/constants"
import toast from 'react-hot-toast';

const NavBar = ({ currentState, setCurrentState, createNewForm }: {
  currentState?: "Edit" | "Preview" | "Res",
  setCurrentState?: React.Dispatch<React.SetStateAction<"Edit" | "Preview" | "Res">>,
  createNewForm?: () => void
}) => {
  const [dropdownToggle, setToggle] = useState<boolean>(false)
  const [items, setItems] = useState<GFormI[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [item, setItem] = useState<GFormI>({
    _id: '0',
    name:'default'
  });
  
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleChange = (d:GFormI) => {
    console.log("handlechange")
    setItem(d);
  }

  useEffect(() => {
    fetchItems();
  },[])

  useEffect(() => {
    // TODO: update form data from form id
    // dispatch(setQueSeq());
    // dispatch(setSecSeq());
    // dispatch(setAllSections());
  },[item])

  const fetchItems = async () => {
      setLoading(true);
      fetch(API_ROUTES.FORM_API, {
        method: "GET"
      })
      .then((response) => response.json())
      .then((data : GFormI[]) => {
        setLoading(false);
        setItems(data);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <header className='flex px-5 py-2 bg-white  items-center w-full  rounded-lg justify-between'>
      {/* <Link to='/' className='w-fit flex items-center space-x-1'> */}
        {/* <img src={'/google-form.svg'} className="w-12 h-12" /> */}
        {/* <span className='font-bold text-lg text-gray-500'>Form</span> */}
      {/* </Link> */}
      {
        currentState && setCurrentState &&
        <div className=' space-x-5 mx-auto w-fit h-fit text-xs hidden'>
          <button
            className={`font-medium rounded-full ${(currentState === 'Edit') ? 'bg-purple-100 p-2.5 text-black' : 'text-black bg-white'}`}
            onClick={(event) => { event.preventDefault(); setCurrentState('Edit') }}
          >Questions</button>
          <button
            className={`font-medium rounded-full ${(currentState === 'Res') ? 'bg-purple-100 p-2.5 text-black' : 'text-black bg-white'}`}
            onClick={(event) => { event.preventDefault(); setCurrentState('Res') }}
          >Responses</button>
          {/* <button className='font-medium pb-2' >Settings</button> */}
          <button
          className={`font-medium rounded-full ${(currentState === 'Preview') ? 'bg-purple-100 p-2.5 text-black' : 'text-black bg-white'} flex items-center space-x-2`}
            onClick={(event) => { event.preventDefault(); setCurrentState('Preview') }}
          >
            Preview
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      }
      <Select name="colors" options={items.map(d=>{
          return {
              ...d,
              value: d.name,
              label: d.name
          }
          })} 
          value={item} onChange={handleChange} className="w-[200px]" id=""
          menuPlacement='auto' classNamePrefix="Select2" defaultValue={[items[0]]}
      />
      <div className='flex items-center w-fit space-x-3'>
        
      </div>
    </header>
  )
}

export default NavBar;
