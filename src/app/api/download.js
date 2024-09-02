import stream from 'stream';

export async function downloadFile(url, title) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
  

    res.setHeader('Content-Type', response.headers.get('Content-Type'));
    res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf');
    await pipeline(response.body, res);

    const downloadUrl = URL.createObjectURL(await new Response(stream).blob());
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setTimeout(() => URL.revokeObjectURL(downloadUrl), 100);
}
