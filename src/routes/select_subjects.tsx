/* imports */
import React, { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@radix-ui/react-label'
import Layout from '@/components/layouts/main'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

const SelectSubject: React.FC = () => {
	const [total, setTotal] = useState(0)
	let subjs: any = []
	
	console.log(subjs)
	const pay = (event: any) => {
		if (event) {
			setTotal(total + 70)
		} else {
			setTotal(total - 70)
		}

		// maths checkbox
		if (document.getElementById('mat')?.ariaChecked == 'true') {
			subjs.push(1)
		} else {			
			let index = subjs.indexOf(1)
			subjs.splice(index, 1)
		}

		// english language checkbox
		if (document.getElementById('eng')?.ariaChecked == 'true') {
			subjs.push(2)
		} else {			
			let index = subjs.indexOf(2)
			subjs.splice(index, 1)
		}

		// science language checkbox
		if (document.getElementById('sci')?.ariaChecked == 'true') {
			subjs.push(3)
		} else {			
			let index = subjs.indexOf(3)
			subjs.splice(index, 1)
		}

		// agriculture language checkbox
		if (document.getElementById('agr')?.ariaChecked == 'true') {
			subjs.push(4)
		} else {			
			let index = subjs.indexOf(4)
			subjs.splice(index, 1)
		}

		// religious language checkbox
		if (document.getElementById('rel')?.ariaChecked == 'true') {
			subjs.push(5)
		} else {			
			let index = subjs.indexOf(5)
			subjs.splice(index, 1)
		}

		// social studies language checkbox
		if (document.getElementById('soc')?.ariaChecked == 'true') {
			subjs.push(6)
		} else {			
			let index = subjs.indexOf(6)
			subjs.splice(index, 1)
		}
	};
	

	return (
		<Layout>
			<main className='bg-[url(/pattern.jpeg)] bg-cover flex flex-col items-center h-screen text-lg'>

				{/* header */}
				<h1 className='mt-20 pt-10 text-3xl text-black-300'>
					Please select subjects to subscribe to
				</h1>

				{/* grey section */}
				<section className='bg-slate-300 flex flex-col items-center rounded-3xl m-5 p-10 w-fit'>
					<div className='flex justify-end text-center px-4 p-5'>

						<div className='flex flex-col'>
							<div className='m-2'>
								<Checkbox id='mat' onCheckedChange={(event) => pay(event)} />
								<Label className='px-2'>Mathematics</Label>
							</div>

							<div className='m-2'>
								<Checkbox id='eng' onCheckedChange={(event) => pay(event)} />
								<Label className='px-2'>English Language</Label>
							</div>

							<div className='m-2'>
								<Checkbox id='sci' onCheckedChange={(event) => pay(event)} />
								<Label className='px-2'>Science</Label>
							</div>
			
							<div className='m-2'>
								<Checkbox id='agr' onCheckedChange={(event) => pay(event)} />
								<Label className='px-2'>Agriculture</Label>
							</div>

							<div className='m-2'>
								<Checkbox id='rel' onCheckedChange={(event) => pay(event)} />
								<Label className='px-2'>Religious & Moral Education</Label>
							</div>

							<div className='m-2'>
								<Checkbox id='soc' onCheckedChange={(event) => pay(event)} />
								<Label className='px-2'>Social Studies</Label>
							</div>
						</div>
					</div>

					{/* total */}
					<div className='bg-white rounded-lg px-5 py-2 mb-2'>
						<p>
							Total: P{total}.00
						</p>
					</div>

					{/* buttons */}
					<div className=' my-5'>
						<Button className='mx-2' type='button'>
							<Link to='/'>
								Cancel payment
							</Link>
						</Button>
						<Button className='bg-purple-700 mx-2' disabled={total == 0} type='submit' >
							<Link to='/billing/$total' params={{total: total as unknown as string}}>
								Subscribe now
							</Link>
						</Button>
					</div>
				</section>
			</main>
		</Layout>
	)
};

export const Route = createFileRoute('/select_subjects')({
	component: SelectSubject,
});