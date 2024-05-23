import React, { useState } from 'react'
import { Types } from 'mongoose'

import SortableQueList from './SortableQueList'
import SectionTitleDesc from './SectionTitleDesc'
import { addQuestion, setSelectedSKey } from '../../../redux/features/form/formSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

function SectionEditor(
  { selectQuestionRef, isSelected, secKey }: {
    secKey: string,
    isSelected: string,
    selectQuestionRef: React.MutableRefObject<HTMLDivElement | null>
  }
) {

  const [savingChanges, setSaving] = useState<boolean>(false)
  const [copyPaperLink, setCopyLink] = useState<boolean>(false)

  const queSeq = useAppSelector((state) => state.form.queSeq)
  const selectedKey = useAppSelector((state) => state.form.selectedKey)
  const allQuestions = useAppSelector((state) => state.form.allQuestions)
  
  const dispatch = useAppDispatch()
  
  function handleSecsClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log("handleSecsClick")
    event.preventDefault();

    // if (isSelected === 'true') return;
    dispatch(setSelectedSKey(secKey.toString()))
    console.log(`sec_${secKey.toString()}`)

    const height = (document.getElementById(`sec_${secKey.toString()}`)?.offsetTop || 100)
    document.documentElement.style.setProperty("--side-btn-height", `${height}px`);
    // console.log("\n\nHeight ", document.getElementById(`que_${queKey.toString()}`)?.getBoundingClientRect().top, height)
    // console.log("The property ", document.documentElement.style.getPropertyValue("--side-btn-height"))
  }

  return (
    <div 
      id={`sec_${secKey.toString()}`}
      className='relative  my-2 flex  space-x-2   w-full  max-w-[900px]  slg:max-w-[1000px]  mx-auto ' 
      onClick={handleSecsClick}>
      <div className='w-full h-full  '>
        {/* {
          JSON.stringify(queSeq)
        } */}
        <SectionTitleDesc secKey={secKey} isSelected={isSelected}/>
        {
          (isSelected && isSelected === 'true') && 
            <SortableQueList 
              queSeq={queSeq} 
              allQuestions={allQuestions} 
              selectedKey={selectedKey} 
              selectQuestionRef={selectQuestionRef}
            />
        }

      </div>

      {/* Side Button to add new question */}
      {/* <div className='side-button absolute  hidden sm:flex flex-col space-y-2  w-fit py-2 px-1 rounded-lg h-20 bg-white  border border-gray-200'>
        <button
          className='w-fit mx-auto rounded-full p-0.5  hover:bg-gray-100'
          onClick={(event) => { event.preventDefault(); dispatch(addQuestion({}));  }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 rounded-full border-2 border-gray-500 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </button>
        <button
          className='relative w-fit mx-auto rounded-full p-0.5  hover:bg-gray-100'
          onClick={(event) => {
            event.preventDefault();
            navigator.clipboard.writeText(window.location.href)
            setCopyLink(true)
            setTimeout(() => {
              setCopyLink(false)
            }, 1000)
          }}>
          {
            !copyPaperLink &&
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 p-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
          }
          {
            copyPaperLink &&
            <svg xmlns="http://www.w3.org/2000/svg" fill="#30912f" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          {
            copyPaperLink &&
            <div className='absolute w-fit inline-flex -bottom-10 -left-5 p-1 bg-gray-600 text-white text-xs'>
              Link&nbsp;Copied!
            </div>
          }
        </button>
      </div> */}
      {/* Side Button to add new question in sm mode*/}
      {/* <button
        className='w-fit sm:hidden fixed bottom-5 right-4 mx-auto rounded-full p-2 bg-purple-600 text-white hover:bg-purple-500'
        onClick={(event) => { event.preventDefault(); dispatch(addQuestion({})); }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        <div className='opacity-40 '></div>
      </button>
      <button
        className='w-fit sm:hidden fixed bottom-20 right-4 mx-auto rounded-full p-2 bg-purple-600 text-white hover:bg-purple-500'
        onClick={(event) => {
          event.preventDefault();
          navigator.clipboard.writeText(window.location.href)
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
        <div className='opacity-40 '></div>
      </button> */}

    </div>
  )
}


export default SectionEditor