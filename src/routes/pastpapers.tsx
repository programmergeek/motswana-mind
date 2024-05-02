import { createFileRoute } from '@tanstack/react-router'
import Layout from '@/components/layouts/main'
import EmbeddedPDF from '@/components/custom/pdf';

export const Route = createFileRoute('/pastpapers')({
  component: Pastpapers,
})

function Pastpapers() {
    return(
        <Layout>
            <div className='mx-32 mt-24 h-screen'>
            <EmbeddedPDF />
            </div>
        </Layout>
    )
}