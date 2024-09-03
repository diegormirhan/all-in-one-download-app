import { NextResponse } from "next/server";

export async function GET(req) {
  // Obter a URL do parâmetro de consulta usando `req.nextUrl.searchParams`
  const url = req.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    // Usar 'HEAD' para obter apenas os cabeçalhos da resposta
    const response = await fetch(url, { method: 'HEAD' });

    if (!response.ok) {
      throw new Error(`Failed to fetch headers: ${response.statusText}`);
    }

    let contentType = response.headers.get('content-type');

    // Retornar o tipo de conteúdo na resposta JSON
    return NextResponse.json({ fileType: contentType }, { status: 200 });
  } catch (error) {
    console.error('Error detecting file type:', error);
    return NextResponse.json({ error: 'An error occurred while detecting the file type' }, { status: 500 });
  }
}
