export default async function handleDownload(url, title) {
    const response = await fetch(url);

    const blob = await response.blob();
    const urlObject = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = urlObject;
    a.download = title
    a.click();
}
