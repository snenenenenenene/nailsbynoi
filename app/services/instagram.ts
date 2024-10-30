export async function getInstagramFeed() {
	const INSTAGRAM_TOKEN = process.env.INSTAGRAM_TOKEN;
	const response = await fetch(
	  `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${INSTAGRAM_TOKEN}`
	);
	const data = await response.json();
	return data.data;
  }