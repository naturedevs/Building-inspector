import { useEffect, useRef, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Sections from '../../components/gForm/FormEditor/Sections';

import Select from 'react-select';
import { API_ROUTES, MSG } from "../../utils/constants";
import { GFormI } from "./types";

export default function Section1() {

	const { formId } = useParams()
	const [formData, setFormData] = useState<GFormI[]>([]);
	const selectSectionRef = useRef<HTMLDivElement | null>(null)

  	useEffect(() => { 
		
  	}, [formId])

  	useEffect(() => {
		
		let timeoutID: number | null = null;
		function EventFun(event: Event) {
			if (timeoutID) clearTimeout(timeoutID);
			timeoutID = setTimeout(() => {
				let curr_pos = selectSectionRef.current?.offsetTop    // document.documentElement.style.getPropertyValue("--side-btn-height")
				//@ts-ignore
				let window_pos = event.target.scrollTop
				//@ts-ignore
				let view_window_height = event.target.offsetHeight

				if(curr_pos){
					if(curr_pos < window_pos + 30){
						document.documentElement.style.setProperty("--side-btn-height",(window_pos + 30).toString()+"px")
						// console.log('\nset 1',     (window_pos + 30).toString()+"px",'\n')
					}else if(curr_pos > window_pos + view_window_height - 200 ){
						document.documentElement.style.setProperty("--side-btn-height",(window_pos + view_window_height - 200).toString()+"px")
						// console.log('\nset 2',    (window_pos + view_window_height - 200).toString()+"px" ,'\n')
					}else{
						document.documentElement.style.setProperty("--side-btn-height",(curr_pos).toString()+"px")
						// console.log('\nset 3',     (curr_pos).toString()+"px"  ,'\n')
					}
				} 
				else {
					document.documentElement.style.setProperty("--side-btn-height", (window_pos + 30).toString() + "px")
				}
			}, 100);
		}

		const scrollableDiv = document.querySelector("#scrolling-paper");
		scrollableDiv?.addEventListener("scroll", EventFun);
		return () => {
			scrollableDiv?.removeEventListener('scroll', EventFun)
		}

  	},[]);

	useEffect(() => {
		fetchFormData();
	}, [])

	type FormData = {
		value: string;
		label: string;
	};
	 
	const fetchFormData = async () => {
      fetch(API_ROUTES.FORM_API, {
        method: "GET"
      })
      .then((response) => response.json())
      .then((data : GFormI[]) => {
			const itemArray = [];
			for (let i = 0; i < data.length; i++) {
				const itemData: FormData = { value: '', label: ''};
				for (let key in data[i]) {
					if (key === '_id') {
						itemData.value = data[i][key];
					} else if (key === 'name') {
						itemData.label = data[i][key];
					}
				}
				itemArray.push(itemData);
			}
			setFormData(itemArray);
      })
      .catch((error) => {
			console.log(error);
      });
  };
  
	return (
		<div className='main-container container-fluid mt-3'>
			<Row>
				<Col xl={12}>
					<Card className="custom-card">
						<Card.Body>
							<div className="input-group mb-3 flex justify-content-center justify-content-sm-between">
								<div className='input-group w-50 py-1' style={{minWidth:250}}>
									<Select name="colors" options={formData} className="default basic-multi-select" id="choices-multiple-default"
										menuPlacement='auto' classNamePrefix="Select2" defaultValue={[formData[0]]}
									/>
								</div>
							</div>
							<div id="scrolling-paper" className="table-responsive">
								<main className="flex space-x-2 w-full">
									<Sections formId={formId} selectSectionRef={selectSectionRef}/>
								</main>
							</div>
						</Card.Body>
						{/* <Card.Body>
							<div className="position-relative d-flex flex-column w-100 h-100 hidden custom-bg-purple " style={{ minWidth: '352px' }}>
								<div className='absolute   top-0 start-0 w-100 bg-none hidden sm:block z-50 '>
									<Select name="colors" options={formData} className="default basic-multi-select" id="choices-multiple-default"
										menuPlacement='auto' classNamePrefix="Select2" defaultValue={[formData[0]]}
									/>
								</div>
								<div id="scrolling-paper" className='w-full relative pt-28 sm:pt-28 justify-center  h-full'>
									<main className="flex space-x-2 w-full">
										<Sections formId={formId} selectSectionRef={selectSectionRef}/>
									</main>
								</div>
							</div>
						</Card.Body> */}
					</Card>
				</Col>
			</Row>
		</div>
	)
}