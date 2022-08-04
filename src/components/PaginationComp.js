import { useEffect, useState } from "react";
import { Col } from "react-bootstrap"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"

export default function PaginationComp({ pages, setCurrentPage, ContentPerPage }) {




    const numOfPages = [];

    for (let i = 1; i <= pages; i++) {
        numOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1)

    useEffect(() => {
        setCurrentPage(currentButton)
    }, [currentButton, setCurrentPage])




    return (
        <div className="clearfix p-5 ">
            <ul className="pagination justify-content-center border-0" >
                <Col>
                    <li className={`${currentButton === 1 ? 'page-item disabled' : 'page-item'} float-start  `}><a href="#!" className="page-link BTN_pagi"
                        onClick={() => setCurrentButton((prev) => prev === 1 ? prev : prev - 1)}
                    ><ChevronLeft /></a></li>
                </Col>
                
                    {
                        numOfPages.map((page, index) => {
                            return (
                                <li key={index}
                                 className={`${currentButton === page ? 'page-item active  ' : 'page-item '}` }>
                                    <a href="#!" className="page-link  " onClick={() => setCurrentButton(page)}
                                >{page}</a></li>
                            )

                        })
                    }
             
                <Col className="float-end">
                    <li className={`${currentButton === numOfPages.length ? 'page-item disabled' : 'page-item'} float-end `}><a href="#!" className="page-link BTN_pagi"
                        onClick={() => setCurrentButton((prev) => prev === numOfPages.length ? prev : prev + 1)}
                    ><ChevronRight /></a></li>
                </Col>
            </ul>
        </div>
    )
}
