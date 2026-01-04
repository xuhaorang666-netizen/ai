interface Env {
  MIMO_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const API_URL = 'https://api.xiaomimimo.com/v1/chat/completions';
  const apiKey = context.env.MIMO_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await context.request.json();
    
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to proxy request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
