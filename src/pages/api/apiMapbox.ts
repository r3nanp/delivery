const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`

export async function fetchLocalMapBox(local: string): Promise<void> {
  const request = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
  )

  const data = await request.json()

  return data
}
