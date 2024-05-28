/* imports */
import React, { useRef, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/components/layouts/main'
import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const PaymentReceipt: React.FC = () => {
    const [emailClicked, setEmailClicked] = useState(false)
    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const pdfRef = useRef()
    const paid = 140
    const email = '202006269@ub.ac.bw'

    let items = 'Mathematics, Science'
    let paymentDate = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()

    const paymentId: any = new URLSearchParams(window.location.search).get(
        'payment_intent'
    );

    const downloadPDF = () => {
        const input = pdfRef.current
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight) - 0.07
            const imgX = (pdfWidth - imgWidth * ratio) / 2
            const imgY = 30
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
            pdf.save('Subscription Receipt.pdf')
        })
    };

    const sendNotification = async () => {
		try {
			console.log('In sendNotification()')
            setEmailClicked(true)

			await fetch('http://10.0.19.248:4242/send-notification', {
				method: 'POST',
				mode: 'cors',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: email }),
			})
				
		} catch (error) {
			console.error(error)
		}
	};

    // html
    return (
        <Layout>
            <main className='bg-[url(/pattern.jpeg)] bg-cover flex flex-col items-center h-screen text-lg'>
                {/* header */}
                <h1 className='mt-20 pt-10 text-3xl text-black-300'>
                    Payment successful
                </h1>

                <section className='mt-5 p-5 rounded-2xl w-1/4' ref={pdfRef}>
                    {/* image */}
                    <div className='border-solid border-black flex justify-center'>
                        <img className='bg-white ' src='motswanamind-logo.png' height={250} width={250}></img>
                    </div>

                    <h2 className='text-xl text-center my-3'>
                        Motswana Mind Subsciption Receipt
                        <hr className='my-3' />
                    </h2>

                    {/* receipt */}
                    <div className='m-2'>
                        <span className='font-bold'>Payment ID: </span>
                        {paymentId}
                    </div>

                    <div className='m-2'>
                        <span className='font-bold'>Date: </span>
                        {paymentDate}
                    </div>

                    <div className='m-2'>
                        <span className='font-bold'>Paid: </span>
                        P{paid}.00
                    </div>

                    <div className='m-2'>
                        <span className='font-bold'>Items: </span>
                        {items}
                    </div>
                </section>

                {/* buttons */}
                <div className=' my-5'>
                    <Button className='bg-purple-700 mx-2' disabled={emailClicked} onClick={sendNotification} type='button'>
                        Email
                    </Button>
                    <Button className='bg-purple-700 mx-2' onClick={downloadPDF} type='button'>
                        Download PDF
                    </Button>
                    <Button className='bg-purple-700 mx-2' type='button'>
                        <Link to='/learn'>
                            Proceed
                        </Link>
                    </Button>
                </div>
            </main>
        </Layout>
    )
};

export const Route = createFileRoute('/paymentreceipt')({
    component: PaymentReceipt,
});