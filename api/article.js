export const config = { runtime: 'edge' };

export default async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  const articles = [
    '/speak-spanish-guides/real-argentine-spanish-world-cup',
    '/speak-spanish-guides/ai-learning-spanish-not-enough',
    '/speak-spanish-guides/practice-speaking-spanish-alone',
    '/speak-spanish-guides/how-long-to-learn-spanish',
    '/speak-spanish-guides/spanish-survival-phrases',
  ];

  if (articles.includes(path)) {
    const res = await fetch('https://spanishwithro.framer.website' + path);
    const html = await res.text();
    return new Response(html, {
      headers: { 'content-type': 'text/html; charset=utf-8' }
    });
  }

  return new Response('Not found', { status: 404 });
}
