// pages/api/newsletter.ts
export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    try {
      // Send the email to your API
      const response = await fetch('https://backend.repodex.ai/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      res.status(200).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'error', error: error.message });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
};
