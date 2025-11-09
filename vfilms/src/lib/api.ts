export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function postContact(payload: ContactPayload, signal?: AbortSignal) {
  const res = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  });
  
  // Successful backends sometimes return 201; accept 200–299
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `Request failed with ${res.status}`);
  }
  
  return res.json().catch(() => ({}));
}
