import React, { Link } from 'react'
import Pdf from '../components/pdf'
import cvPDF from '../cv.pdf'

export default function Test() {
	return (
		<div className="me">
			<div className="pdf-container">
				<Pdf pdf={cvPDF} />
			</div>
		</div>
	)
}
