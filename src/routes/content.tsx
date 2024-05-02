import { createFileRoute } from '@tanstack/react-router'
import Layout from "@/components/layouts/main";
import EmbeddedPDF from '@/components/custom/pdf';

export const Route = createFileRoute('/content')({
  component: Content,
})

function Content() {
    return(
        <Layout>
            <div className="video-responsive flex justify-center items-center rounded-3xl py-24">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/hFubXXE0-bc`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>

            <div>
            <EmbeddedPDF/>
            </div>
        </Layout>
    )
}