// pages/api/proxy.js
import { NextResponse } from 'next/server';

export async function GET(req) {
  const url = req.nextUrl.searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const headers = new Headers({
      'Content-Type': response.headers.get('Content-Type'),
      'Content-Disposition': `attachment; filename="all-in-one-media"`,
      'Access-Control-Allow-Origin': '*'
    });

    return new NextResponse(response.body, { headers });

  } catch (error) {
    return NextResponse.json({ error: 'Error fetching file' }, { status: 500 });
  }
}
