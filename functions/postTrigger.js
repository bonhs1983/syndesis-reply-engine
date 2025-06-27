export async function handler(event) {
  const body = JSON.parse(event.body);
  const eventType = body.event;
  const timestamp = body.timestamp;

  return {
    statusCode: 200,
    body: JSON.stringify({
      response: `Triggered by ${eventType} at ${timestamp}`
    })
  };
}
