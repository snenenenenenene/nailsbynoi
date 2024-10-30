// app/api/instagram/route.ts
import { NextResponse } from 'next/server';
import { mockInstagramData } from './mock-data';

export async function GET() {
	if (process.env.NODE_ENV === 'development') {
		return NextResponse.json(mockInstagramData.data);
	  }
  try {
    // Instagram Basic Display API endpoint
    const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${INSTAGRAM_TOKEN}`,
      {
        headers: {
          'Accept': 'application/json',
        },
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error(`Instagram API responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Return successful response
    return NextResponse.json(data.data);
  } catch (error) {
    console.error('Instagram API Error:', error);
    
    // Return error response
    return NextResponse.json(
      { error: 'Failed to fetch Instagram feed' },
      { status: 500 }
    );
  }
}