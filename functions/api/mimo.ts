export async function onRequestPost(context) {
  const apiKey = context.env.MIMO_API_KEY;
  if (!apiKey) {
    return Response.json({ error: 'API key not configured' }, { status: 500 });
  }

  const body = await context.request.json();

  const response = await fetch('https://api.xiaomimimo.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return Response.json(data);
}
