export function HowToUse({ socialMedia, mediaType }) {
    return (
        <>
            <div className="space-y-6 w-full px-2 md:px-0">
                <h2 className="text-3xl font-bold mb-4">How To Download Any Media</h2>
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Step 1: Access {socialMedia} and find the desired {mediaType}
                    </h2>
                    <p className="text-gray-600">
                        1. Open {socialMedia} on your prefered device or browser and navigate to the video you want to download.
                    </p>
                    <p className="text-gray-600">
                        2. Click on the three dots on the top of the {mediaType}.
                    </p>
                    <p className="text-gray-600">
                        3. Select "Copy Link" from the menu that appears. This action will copy the {mediaType} url to your clipboard.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Step 2: Paste the Link on this Website
                    </h2>
                    <p className="text-gray-600">
                        1. Go to the this website in your browser.
                    </p>
                    <p className="text-gray-600">
                        2. Find the text box on the homepage that says "Insert your link here."
                    </p>
                    <p className="text-gray-600">
                        3. Paste {socialMedia} {mediaType} link you copied. You can do this by clicking on the "Paste" button, by right-clicking and selecting "Paste" or by pressing "Ctrl + V" or your keyboard (or "Cmd + V" on Mac).
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Step 3: Start the Download
                    </h2>
                    <p className="text-gray-600">
                        1. After pasting the link, click the "Download" button below the text box.
                    </p>
                    <p className="text-gray-600">
                        2. Wait a few seconds while the site processes the link and prepares the {mediaType} for download.
                    </p>
                    <p className="text-gray-600">
                        3. When the {mediaType} is ready, you will be redirected to the page where you can choose which {mediaType} quality you want to download.
                    </p>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Step 4: Save the {mediaType} to your device.
                    </h2>
                    <p className="text-gray-600">
                        1. Click in the download button that appears on the page or if you want, choose the {mediaType} quality you want to download.
                    </p>
                    <p className="text-gray-600">
                        2. Depending on your browser, the {mediaType} will either save automatically to your downloads folder or prompt you to choose a location.
                    </p>
                    <p className="text-gray-600">
                        3. Done! You now have {socialMedia} {mediaType} saved on your device, ready to watch and share with your frineds and family anytime.
                    </p>
                </div>
            </div>
        </>
    )
}