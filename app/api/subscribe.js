export default async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
  
    try {
      const response = await fetch('https://backend.repodex.ai/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: req.body.email }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        return res.status(response.status).json(data);
      }
  
      return res.status(200).json(data);
  
    } catch (error) {
      return res.status(500).json({ error: 'Unexpected error.' });
    }
  };
  