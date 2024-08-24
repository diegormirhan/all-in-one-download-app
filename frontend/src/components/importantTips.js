import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export function ImportantTips({classes, tip1, tip2, tip3}) {
    return (
        <>
            <Alert className={`m-auto w-11/12 md:w-4/5 xl:w-3/5 my-14 ${classes}`}>
                <Terminal className="h-4 w-4" />
                <AlertTitle className="text-lg font-semibold">Important Tips</AlertTitle>
                <AlertDescription>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-md">
                        <li><strong>Ensure that the social media profile is public:</strong> media from private accounts cannot be downloaded.</li>
                        <li><strong>Check your internet connection:</strong> Downloads may fail if the connection is unstable.</li>
                        <li><strong>Respect copyrights:</strong> Use the downloaded media for personal use only and do not redistribute without permission.</li>
                    </ul>
                </AlertDescription>
            </Alert>
        </>
    )
}

