import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import SortableSecList from './SortableSecList'
import TitleDescFormElement from './FormTitleDesc'
import { addSection, addQuestion } from '../../../redux/features/form/formSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

function Sections(
  { formId, selectSectionRef }: {
    formId: string | undefined,
    selectSectionRef: React.MutableRefObject<HTMLDivElement | null>
  }
) {

  const [savingChanges, setSaving] = useState<boolean>(false)
  const [copyPaperLink, setCopyLink] = useState<boolean>(false)

  const secSeq = useAppSelector((state) => state.form.secSeq)
  const queSeq = useAppSelector((state) => state.form.queSeq)
  const selectedSKey = useAppSelector((state) => state.form.selectedSKey)
  const selectedKey = useAppSelector((state) => state.form.selectedKey)
  const allSections = useAppSelector((state) => state.form.allSections)
  
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if(selectedKey && selectedSKey){
      console.log("selectedKey changed")
      const height = (document.getElementById(`que_${selectedKey.toString()}`)?.offsetTop || 100)
       + (document.getElementById(`que_${selectedKey.toString()}`)?.offsetParent?.offsetTop || 100)
      // console.log(height)
      // console.log(document.getElementById(`que_${selectedKey.toString()}`)?.getClientRects()[0])
      document.documentElement.style.setProperty("--side-btn-height", `${height}px`);
    }
  }, [selectedKey])

  useEffect(() => {
    if(selectedSKey){
      console.log("selectedSKey changed")
      const height = (document.getElementById(`sec_${selectedSKey.toString()}`)?.offsetTop || 100)
      document.documentElement.style.setProperty("--side-btn-height", `${height}px`);
    }
  }, [selectedSKey])

  return (
    <div className='relative bg-slate-200 pl-3 pr-12 my-2 flex space-x-2  w-full max-w-[900px]  slg:max-w-[1000px] mx-auto'>

      <div className='w-full h-full  '>
        {/* {
          JSON.stringify(queSeq)
        } */}
        {/* <TitleDescFormElement /> */}
        <SortableSecList secSeq={secSeq} allSections={allSections} selectedKey={selectedSKey} selectSectionRef={selectSectionRef}/>

        <Button
          variant="primary" 
          className='px-3 py-2 bg-blue-500 rounded-md z-50 mb-3'
          disabled={savingChanges}
          onClick={(event) => {
            event.preventDefault();
            setSaving(true)
            console.log(queSeq)
            console.log("queSeq")
            console.log(secSeq)
            console.log("queSeq")
            console.log(allSections)
            console.log("allQuestions")
            setSaving(false)
          }}>
          Save
        </Button>
      </div>

      {/* Side Button to add new question */}
      <div className='side-button absolute hidden sm:flex flex-col space-y-2  w-fit py-2 px-1 rounded-lg h-[120px] bg-white  border border-gray-200'>
        
        <button
          className='w-fit mx-auto rounded-full p-0.5  hover:bg-gray-100'
          onClick={(event) => { event.preventDefault(); dispatch(addSection({}));  }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sign-intersection w-5 h-5" viewBox="0 0 16 16">
            <path d="M7.25 4v3.25H4v1.5h3.25V12h1.5V8.75H12v-1.5H8.75V4z"/>
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"/>
          </svg>
        </button>
        <button
          className='w-fit mx-auto rounded-full p-0.5  hover:bg-gray-100'
          onClick={(event) => { event.preventDefault(); dispatch(addQuestion({}));  }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-[1.25rem] rounded-full border-2 border-gray-500 ">
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-[1.5rem] p-0.5">
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
      </div>
      {/* Side Button to add new question in sm mode*/}
      <button
          className='w-fit sm:hidden fixed bottom-[140px] right-4 mx-auto rounded-full p-2 bg-purple-600 text-white hover:bg-purple-500'
          onClick={(event) => { event.preventDefault(); dispatch(addSection({}));  }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-[1.75rem] h-[1.75rem]" viewBox="0 0 16 16">
            <path d="M7.25 4v3.25H4v1.5h3.25V12h1.5V8.75H12v-1.5H8.75V4z"/>
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z"/>
          </svg>
        </button>
      <button
        className='w-fit sm:hidden fixed bottom-20 right-4 mx-auto rounded-full p-2 bg-purple-600 text-white hover:bg-purple-500'
        onClick={(event) => { event.preventDefault(); dispatch(addQuestion({})); }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.75rem] h-[1.75rem]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        <div className='opacity-40 '></div>
      </button>
      <button
        className='w-fit sm:hidden fixed bottom-5 right-4 mx-auto rounded-full p-2 bg-purple-600 text-white hover:bg-purple-500'
        onClick={(event) => {
          event.preventDefault();
          navigator.clipboard.writeText(window.location.href)
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[1.75rem] h-[1.75rem]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
        <div className='opacity-40 '></div>
      </button>

    </div>
  )
}


export default Sections