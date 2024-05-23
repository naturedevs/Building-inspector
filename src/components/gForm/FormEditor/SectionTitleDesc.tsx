import React, { useState } from 'react'
import { Types } from 'mongoose'

import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { setAboutForm, setSectionTitle, setSectionDesc, deleteSection, addSection } from '../../../redux/features/form/formSlice'
import { DndTrigger } from './react-sortable-hoc'

const SectionTitleDesc = ({readOnly, secKey, isSelected}:{
  readOnly?: boolean,
  isSelected: string,
  secKey: string,
}) => {

  const aboutForm = useAppSelector((state)=> state.form.aboutForm)
  const allSections = useAppSelector((state) => state.form.allSections)
  const secSeq = useAppSelector((state) => state.form.secSeq)
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
      <div className='flex flex-row justify-between'>
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
      <div className='flex items-center'>
        
        <div className='flex space-x-2 items-center'>
          {/* copy */}
          <button
            className='h-fit'
            onClick={(event) => {
              event.preventDefault();
              dispatch(addSection({
                prev_id: secKey.toString(),
                newSec: { ...section }
              }))
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
          </button>
          {/* delete */}
          {secSeq.length>1 && <button
            onClick={(event) => {
              // event.preventDefault();
              console.log("deleteSection")
              dispatch(deleteSection({ secKey: secKey.toString() }))
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
          }
        </div>
      </div>
      </div>
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