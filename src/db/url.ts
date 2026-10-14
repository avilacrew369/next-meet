export function getDatabaseUrl(): string {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set.');
  }

  const url = new URL(databaseUrl);

  if (!url.searchParams.has('sslmode')) {
    url.searchParams.set('sslmode', 'require');
  }

  if (!url.searchParams.has('uselibpqcompat')) {
    url.searchParams.set('uselibpqcompat', 'true');
  }

  return url.toString();
}
