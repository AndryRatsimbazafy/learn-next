export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Node's default 250ms per-address timeout is too short for the Neon connection,
    // causing ETIMEDOUT. Give each IPv4/IPv6 attempt more time.
    const net = await import('node:net');
    net.setDefaultAutoSelectFamilyAttemptTimeout(2000);
  }
}
