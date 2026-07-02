export const config = { runtime: 'edge' };

export default async function handler(request) {
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || url.pathname;
  
  const articles = [
    '/speak-spanish-guides/real-argentine-spanish-world-cup',
    '/speak-spanish-guides/ai-learning-spanish-not-enough',
    '/speak-spanish-guides/practice-speaking-spanish-alone',
    '/speak-spanish-guides/how-long-to-learn-spanish',
    '/speak-spanish-guides/spanish-survival-phrases',
  ];

  if (!articles.includes(path)) {
    return new Response('Not found', { status: 404 });
  }

  const res = await fetch('https://spanishwithro.framer.website' + path, {
    headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'text/html' }
  });
  const html = await res.text();
  return new Response(html, {
    headers: { 'content-type': 'text/html; charset=utf-8' }
  });
}
