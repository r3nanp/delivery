/* eslint-disable no-use-before-define */
import 'leaflet/dist/leaflet.css'
import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { Container } from './styles'

const DefaultPinIcon = L.icon({
  iconUrl: '/pin.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

L.Marker.prototype.options.icon = DefaultPinIcon

// const mapPackageIcon = L.icon({
//   iconUrl: '/package.svg',
//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [170, 2]
// })

function Map(): JSX.Element {
  return (
    <Container>
      <MapContainer
        zoom={15}
        center={[-3.7281, -38.5279]}
        zoomControl={false}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_ACCESS_MAPBOX_TOKEN}`}
        />

        <Marker icon={DefaultPinIcon} position={[-3.7281, -38.5279]} />
      </MapContainer>
    </Container>
  )
}

export default Map
