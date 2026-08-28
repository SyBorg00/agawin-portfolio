"use client";

import dynamic from "next/dynamic";

const ResumeViewer = dynamic(
    () => import("./ResumeViewer"),
    {
        ssr: false,
        loading: () => (
            <div className="flex justify-center py-20">
                <p>Loading resume...</p>
            </div>
        ),
    }
);

export default function ResumeClient() {
    return <ResumeViewer />;
}