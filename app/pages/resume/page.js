
import PageLayout from "../../components/PageLayout";
import ResumeClient from "../../components/ResumeClient";
import { Download } from "lucide-react";

export default function Resume() {
    return (
        <PageLayout>
            <main className="min-h-screen">
                <div className="flex flex-col items-center px-4 py-12">



                    <div className="w-full max-w-[750px]">
                        <ResumeClient />
                    </div>
                    <a
                        href="/documents/resume.pdf"
                        download="Sylvann-Jules-Agawin-Resume.pdf"
                        className="primary mb-8 flex items-center gap-2 rounded-lg px-6 py-3 text-white transition hover:bg-gray-800"
                    >
                        <Download size={20} />
                        Download Resume
                    </a>

                </div>
            </main>
        </PageLayout>
    );
}