import React, { useState } from 'react'

import SortableQueList from './SortableQueList'
import TitleDescFormElement from './FormTitleDesc'
import { addQuestion } from '../../../redux/features/form/formSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'

function FormEditor(
  { formId, selectQuestionRef }: {
    formId: string | undefined,
    selectQuestionRef: React.MutableRefObject<HTMLDivElement | null>
  }
) {

  const [savingChanges, setSaving] = useState<boolean>(false)
  const [copyPaperLink, setCopyLink] = useState<boolean>(false)

  const queSeq = useAppSelector((state) => state.form.queSeq)
  const selectedKey = useAppSelector((state) => state.form.selectedKey)
  const allQuestions = useAppSelector((state) => state.form.allQuestions)
  
  const dispatch = useAppDispatch()
  
  return (
    <div className='relative  my-2 pl-2 pr-10 flex px-0.5 space-x-2   w-full  max-w-[900px]  slg:max-w-[1000px]  mx-auto '>
      <div className='w-full h-full  '>
        {/* {
          JSON.stringify(queSeq)
        } */}
        <TitleDescFormElement />
        <SortableQueList queSeq={queSeq} allQuestions={allQuestions} selectedKey={selectedKey} selectQuestionRef={selectQuestionRef}/>

        <button
          className='px-3 py-1 bg-purple-200 z-50'
          disabled={savingChanges}
          onClick={(event) => {
            event.preventDefault();
            setSaving(true)
            console.log(queSeq)
            console.log("queSeq")
            console.log(allQuestions)
            console.log("allQuestions")
            setSaving(false)
            // console.log(aboutForm)
            // console.log("aboutForm")
            // saveForm(queSeq, allQuestions, aboutForm)
              // .finally(() => {
                // setSaving(false)
              // })
          }}>
          Submit
        </button>
      </div>



    </div>
  )
}


export default FormEditor