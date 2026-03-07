'use client'

import { useEffect, useRef, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { importLibrary, setOptions } from '@googlemaps/js-api-loader'
import { useAxeptioConsent } from '@/contexts/AxeptioConsentContext'
import { AxeptioConsentButton } from '../AxeptioConsentButton/AxeptioConsentButton'
import './GoogleMap.scss'

const zonePaths: google.maps.LatLngLiteral[] = [
  // replace with actual coordinates of the service area
  { lat: 45.19, lng: 5.69 },
  { lat: 45.21, lng: 5.74 },
  { lat: 45.175, lng: 5.785 },
  { lat: 45.145, lng: 5.735 },
  { lat: 45.16, lng: 5.675 },
]

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY

let configured = false
const LOADING_MESSAGE = 'Chargement de la carte'

/** Vendor name configured in the Axeptio dashboard for Google Maps */
const CONSENT_VENDOR = 'gmaps'
const UNAVAILABLE_MESSAGE =
  'La carte n’est pas disponible pour le moment. Vous pouvez me contacter pour vérifier votre zone d’intervention.'

export function GoogleMap() {
  const mapDivRef = useRef<HTMLDivElement | null>(null)
  const { vendors, ready, openConsentManager } = useAxeptioConsent()
  const gmapsGranted = ready && vendors[CONSENT_VENDOR] === true
  const [statusMessage, setStatusMessage] = useState<string | null>(
    apiKey ? LOADING_MESSAGE : UNAVAILABLE_MESSAGE,
  )

  useEffect(() => {
    if (!gmapsGranted) return
    if (!mapDivRef.current) return

    if (!apiKey) {
      console.error('Missing NEXT_PUBLIC_GOOGLE_MAP_API_KEY')
      return
    }

    if (!configured) {
      setOptions({
        key: apiKey,
        v: 'weekly',
      })
      configured = true
    }

    let polygon: google.maps.Polygon | null = null
    let cancelled = false

    async function loadMap() {
      try {
        const { Map } = (await importLibrary('maps')) as google.maps.MapsLibrary
        if (cancelled) return
        if (!mapDivRef.current) return

        const map = new Map(mapDivRef.current, {
          center: { lat: 45.18587458715183, lng: 5.736610765941948 },
          zoomControl: true,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        })

        polygon = new google.maps.Polygon({
          paths: zonePaths,
          strokeOpacity: 1,
          strokeWeight: 2,
          fillOpacity: 0.2,
          clickable: false,
        })
        polygon.setMap(map)

        const bounds = new google.maps.LatLngBounds()
        zonePaths.forEach((p) => bounds.extend(p))
        map.fitBounds(bounds)
        setStatusMessage(null)
      } catch (err) {
        console.error('Google Maps load error', err)
        setStatusMessage(UNAVAILABLE_MESSAGE)
      }
    }

    loadMap()

    return () => {
      cancelled = true
      polygon?.setMap(null)
      polygon = null
    }
  }, [gmapsGranted])

  if (!gmapsGranted) {
    return (
      <div className="google-map google-map--placeholder">
        <div className="google-map__placeholder-overlay">
          <FaMapMarkerAlt
            className="google-map__placeholder-icon"
            size={40}
          />
          <p className="google-map__placeholder-text">
            Pour afficher la carte Google Maps, veuillez accepter les cookies
            correspondants.
          </p>
          <AxeptioConsentButton />
        </div>
      </div>
    )
  }

  return (
    <div
      className={`google-map${statusMessage !== null ? ' google-map--has-status' : ''}`}
    >
      <div
        ref={mapDivRef}
        className="google-map__canvas"
        role="img"
        aria-label="Carte de la zone d’intervention autour de Grenoble"
      />
      <p
        className="google-map__status"
        role="status"
        hidden={statusMessage === null}
      >
        <span>{statusMessage}</span>
        {statusMessage === LOADING_MESSAGE && (
          <span
            className="google-map__loader"
            aria-hidden="true"
          >
            <span className="google-map__dot" />
            <span className="google-map__dot" />
            <span className="google-map__dot" />
          </span>
        )}
      </p>
    </div>
  )
}
