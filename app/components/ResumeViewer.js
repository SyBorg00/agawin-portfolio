"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

export default function ResumeViewer() {
    const [numPages, setNumPages] = useState(null);

    return (
        <div className="flex w-full justify-center">
            <Document
                file="/documents/resume.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                <div className="flex flex-col items-center">
                    {Array.from({ length: numPages || 0 }, (_, index) => (
                        <div
                            key={index}
                            className="mb-8 flex flex-col items-center"
                        >
                            <div className="bg-white shadow-xl">
                                <Page
                                    pageNumber={index + 1}
                                    width={750}
                                    renderTextLayer={true}
                                    renderAnnotationLayer={true}
                                />
                            </div>

                            <span className="mt-3 text-sm text-gray-500">
                                Page {index + 1} of {numPages}
                            </span>
                        </div>
                    ))}
                </div>
            </Document>
        </div>
    );
}