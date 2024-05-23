import React, { useState } from 'react'
import { Types } from 'mongoose'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setAboutForm, setSectionTitle, setSectionDesc } from '../../../redux/features/form/formSlice'
import { DndTrigger } from './react-sortable-hoc'

const SectionTitleDesc = ({readOnly, secKey, isSelected}:{
  readOnly?: boolean,
  isSelected: string,
  secKey: string,
}) => {

  const aboutForm = useAppSelector((state)=> state.form.aboutForm)
  const allSections = useAppSelector((state) => state.form.allSections)
  const section = allSections[secKey];
  // console.log("SectionTitleDesc")
  // console.log(secKey)
  const dispatch = useAppDispatch()
  const borderTopColor =  (isSelected && isSelected === 'true')?"border-t-cyan-400":"border-t-purple-800";
  console.log(isSelected)
  console.log(borderTopColor)
  const [titleErr, setTitleErr] = useState<boolean>(section.title.length > 150 || section.title.length < 3)
  return (
    <div className={'flex flex-col space-y-1 w-full  pt-0 pb-3 px-3 bg-white border-t-8 rounded-lg ' + borderTopColor}>
      
      <DndTrigger
        className='w-full dnd-trigger  hover:cursor-move flex  items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-6 mx-auto">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </DndTrigger>
      {
        titleErr &&
        <div className='flex text-xs text-red-800 items-center pt-1'>
          <svg aria-hidden="true" className="flex-shrink-0 inline w-3  h-3 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <div>
            Title length should be between 3 to 150
          </div>
        </div>
      }
      <input
        className='text-2xl border-b-2 border-gray-200  outline-none focus:outline-none focus:ease-in focus:duration-300 focus:border-purple-900 py-1 '
        style={{ fontWeight: '500px' }}
        value={section?.title || ''}
        placeholder='Untitle Form'
        disabled={(readOnly)?true:false}
        onChange={(event) => {
          event.preventDefault();
          // console.log(event.target.value.length,event.target.value.length > 3 || event.target.value.length <10)
          if(event.target.value.length >= 3 && event.target.value.length <150) setTitleErr(false)
          else setTitleErr(true)
          dispatch(setSectionTitle(event.target.value))
        }}
      />
      <input
        onFocus={(event) => { event.target.select() }}
        value={section?.desc || ''}
        disabled={(readOnly)?true:false}
        placeholder='Form Description'
        className='text-xs border-b-2 border-gray-200  outline-none focus:outline-none focus:ease-in focus:duration-300 focus:border-purple-900 py-1 '
        onChange={(event) => { 
          event.preventDefault(); 
          if(event.target.value.length >150) return
          dispatch(setSectionDesc(event.target.value))
        }}
      />
    </div>
  )
}

export default SectionTitleDesc