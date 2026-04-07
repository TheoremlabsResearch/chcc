'use client'

import { useEffect, useRef, useState } from 'react'

// [lat, lng, intensity] — intensity 0–1 scaled to metro population
const HINDU_POPULATION_DATA: [number, number, number][] = [
  // Northeast / Mid-Atlantic
  [40.7128, -74.006, 1.0],    // New York / NJ metro (~700k)
  [40.6501, -74.151, 0.9],    // Jersey City / Newark
  [40.7282, -74.0776, 0.85],  // Jersey City
  [40.5795, -74.1502, 0.7],   // Staten Island corridor
  [40.9176, -74.1719, 0.75],  // Parsippany / Morris County NJ
  [40.7282, -74.4774, 0.7],   // Edison NJ (large Indian hub)
  [40.5187, -74.4121, 0.65],  // Woodbridge NJ
  [38.9072, -77.0369, 0.75],  // Washington DC metro
  [38.8816, -77.0910, 0.7],   // Arlington VA
  [38.9696, -77.3861, 0.65],  // Chantilly / Ashburn VA (large Indian hub)
  [37.3541, -79.1811, 0.3],   // Roanoke VA
  [39.9526, -75.1652, 0.6],   // Philadelphia PA
  [40.0583, -74.4057, 0.55],  // Trenton / Princeton NJ
  [42.3601, -71.0589, 0.55],  // Boston MA
  [42.3006, -71.3588, 0.45],  // Framingham MA
  [41.7658, -72.6851, 0.35],  // Hartford CT
  [41.3083, -72.9279, 0.3],   // New Haven CT

  // Southeast
  [33.749, -84.388, 0.7],     // Atlanta GA metro
  [33.9526, -84.5499, 0.6],   // Marietta / Cobb County GA
  [33.8839, -84.2157, 0.55],  // Decatur / DeKalb GA
  [35.2271, -80.8431, 0.5],   // Charlotte NC ← CHCC
  [35.7796, -78.6382, 0.35],  // Raleigh NC
  [35.9132, -79.0558, 0.3],   // Chapel Hill / Durham NC
  [36.0999, -80.244, 0.3],    // Winston-Salem NC
  [25.7617, -80.1918, 0.45],  // Miami FL
  [28.5383, -81.3792, 0.4],   // Orlando FL
  [27.9506, -82.4572, 0.4],   // Tampa FL
  [30.3322, -81.6557, 0.3],   // Jacksonville FL
  [30.4383, -84.2807, 0.25],  // Tallahassee FL

  // South / Texas
  [29.7604, -95.3698, 0.75],  // Houston TX (large Indian hub)
  [29.6196, -95.5989, 0.65],  // Sugar Land TX
  [29.6911, -95.4075, 0.6],   // Missouri City TX
  [32.7767, -96.797, 0.65],   // Dallas TX
  [32.9029, -96.9583, 0.6],   // Coppell / Irving TX (large Indian hub)
  [33.1581, -96.8784, 0.55],  // Frisco / Plano TX
  [30.2672, -97.7431, 0.4],   // Austin TX
  [29.4241, -98.4936, 0.3],   // San Antonio TX

  // Midwest
  [41.8781, -87.6298, 0.7],   // Chicago IL
  [42.0334, -87.7173, 0.6],   // Skokie / Evanston IL (large Indian hub)
  [41.8781, -87.9298, 0.5],   // Oak Brook / Schaumburg IL
  [42.3314, -83.0458, 0.5],   // Detroit MI
  [42.5803, -83.0302, 0.55],  // Troy / Troy MI (large Indian hub)
  [42.4706, -83.1499, 0.5],   // Southfield MI
  [39.9612, -82.9988, 0.4],   // Columbus OH
  [41.4993, -81.6944, 0.4],   // Cleveland OH
  [39.1031, -84.512, 0.4],    // Cincinnati OH
  [43.0481, -76.1474, 0.3],   // Syracuse NY
  [44.9778, -93.265, 0.35],   // Minneapolis MN
  [43.0731, -89.4012, 0.3],   // Madison WI
  [43.0389, -76.1475, 0.25],  // Syracuse NY
  [39.7684, -86.1581, 0.4],   // Indianapolis IN
  [38.2527, -85.7585, 0.3],   // Louisville KY

  // West
  [37.3382, -121.8863, 0.85], // San Jose / Silicon Valley CA
  [37.5485, -121.9886, 0.8],  // Fremont CA (very large Indian hub)
  [37.4419, -122.143, 0.75],  // Palo Alto CA
  [37.6879, -122.4702, 0.7],  // San Francisco CA
  [37.8716, -122.2727, 0.65], // Berkeley / Oakland CA
  [34.0522, -118.2437, 0.65], // Los Angeles CA
  [33.749, -117.8731, 0.5],   // Anaheim / Orange County CA
  [34.1478, -118.1445, 0.55], // Pasadena / San Gabriel Valley CA
  [32.7157, -117.1611, 0.4],  // San Diego CA
  [47.6062, -122.3321, 0.6],  // Seattle WA
  [47.6741, -122.1215, 0.55], // Bellevue / Redmond WA (Microsoft hub)
  [45.5051, -122.675, 0.4],   // Portland OR
  [39.7392, -104.9903, 0.35], // Denver CO
  [33.4484, -112.074, 0.4],   // Phoenix AZ
  [36.1699, -115.1398, 0.3],  // Las Vegas NV

  // Mountain / Pacific Northwest
  [40.7608, -111.891, 0.25],  // Salt Lake City UT
  [35.1495, -90.049, 0.25],   // Memphis TN
  [36.1627, -86.7816, 0.35],  // Nashville TN
  [35.4676, -97.5164, 0.3],   // Oklahoma City OK
]

const METRO_LABELS: { name: string; lat: number; lng: number; population: string; highlight?: boolean }[] = [
  { name: 'New York / NJ', lat: 40.7128, lng: -74.006, population: '~700,000' },
  { name: 'Bay Area', lat: 37.5485, lng: -121.9886, population: '~350,000' },
  { name: 'Washington DC', lat: 38.9696, lng: -77.3861, population: '~250,000' },
  { name: 'Chicago', lat: 41.8781, lng: -87.6298, population: '~200,000' },
  { name: 'Houston', lat: 29.7604, lng: -95.3698, population: '~200,000' },
  { name: 'Dallas', lat: 32.9029, lng: -96.9583, population: '~150,000' },
  { name: 'Detroit / Troy', lat: 42.5803, lng: -83.0302, population: '~130,000' },
  { name: 'Los Angeles', lat: 34.0522, lng: -118.2437, population: '~150,000' },
  { name: 'Atlanta', lat: 33.749, lng: -84.388, population: '~100,000' },
  { name: 'Seattle', lat: 47.6741, lng: -122.1215, population: '~80,000' },
  { name: 'Boston', lat: 42.3601, lng: -71.0589, population: '~100,000' },
  { name: 'Philadelphia', lat: 39.9526, lng: -75.1652, population: '~90,000' },
  { name: '★ Charlotte NC', lat: 35.2271, lng: -80.8431, population: '~50,000', highlight: true },
]

export default function HinduPopulationMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [loaded, setLoaded] = useState(false)
  const [activeMetro, setActiveMetro] = useState<(typeof METRO_LABELS)[0] | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || mapInstanceRef.current) return

    // Load Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    // Load Leaflet JS then heat plugin
    const leafletScript = document.createElement('script')
    leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    leafletScript.onload = () => {
      const heatScript = document.createElement('script')
      heatScript.src = 'https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js'
      heatScript.onload = () => initMap()
      document.head.appendChild(heatScript)
    }
    document.head.appendChild(leafletScript)

    function initMap() {
      const L = (window as any).L
      if (!mapRef.current || mapInstanceRef.current) return

      const map = L.map(mapRef.current, {
        center: [39.5, -98.35],
        zoom: 4,
        minZoom: 3,
        maxZoom: 10,
      })

      mapInstanceRef.current = map

      // Dark tile layer for contrast
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
        {
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map)

      // Heatmap layer
      L.heatLayer(HINDU_POPULATION_DATA, {
        radius: 40,
        blur: 30,
        maxZoom: 10,
        max: 1.0,
        gradient: {
          0.0: '#2d1b69',
          0.2: '#7b2d8b',
          0.4: '#c0392b',
          0.6: '#e67e22',
          0.8: '#f1c40f',
          1.0: '#ffffff',
        },
      }).addTo(map)

      // Charlotte marker (highlighted)
      const charlotteIcon = L.divIcon({
        className: '',
        html: `<div style="
          background:#F47C36;
          border:3px solid #fff;
          border-radius:50%;
          width:16px;height:16px;
          box-shadow:0 0 12px #F47C36,0 0 24px #F47C36;
          animation: pulse 1.5s infinite;
        "></div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })

      L.marker([35.2271, -80.8431], { icon: charlotteIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:sans-serif;min-width:180px">
            <strong style="color:#F47C36;font-size:14px">★ Charlotte, NC</strong><br/>
            <span style="color:#555">Hindu Population: ~50,000</span><br/>
            <span style="color:#555">Home of the proposed <strong>CHCC</strong></span><br/>
            <a href="/donate" style="color:#F47C36;font-weight:600">Support the Center →</a>
          </div>`,
          { maxWidth: 220 }
        )
        .openPopup()

      // Other metro markers
      METRO_LABELS.filter(m => !m.highlight).forEach(metro => {
        const icon = L.divIcon({
          className: '',
          html: `<div style="
            background:#a855f7;
            border:2px solid rgba(255,255,255,0.6);
            border-radius:50%;
            width:10px;height:10px;
          "></div>`,
          iconSize: [10, 10],
          iconAnchor: [5, 5],
        })
        L.marker([metro.lat, metro.lng], { icon })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:sans-serif">
              <strong>${metro.name}</strong><br/>
              <span style="color:#555">Hindu Population: ${metro.population}</span>
            </div>`
          )
      })

      setLoaded(true)
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-saffron text-sm font-semibold uppercase tracking-widest mb-2">Community Context</p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Hindu Population in the United States
          </h1>
          <p className="text-gray-400 max-w-2xl text-base">
            An estimated <strong className="text-white">3.2 million</strong> Hindus live in the United States —
            one of the fastest-growing faith communities. This map shows population concentrations
            by metro area, highlighting Charlotte&apos;s growing community and the need for CHCC.
          </p>
        </div>
      </div>

      {/* Map */}
      <div className="relative">
        {!loaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-950">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-saffron border-t-transparent rounded-full animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading map…</p>
            </div>
          </div>
        )}
        <div ref={mapRef} style={{ height: '60vh', minHeight: '480px', width: '100%' }} />
      </div>

      {/* Legend + Stats */}
      <div className="bg-gray-900 border-t border-gray-800 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <span className="text-gray-400 text-sm font-medium">Population Density:</span>
            <div className="flex items-center gap-2">
              <div className="h-3 w-32 rounded-full" style={{background:'linear-gradient(to right,#2d1b69,#7b2d8b,#c0392b,#e67e22,#f1c40f,#fff)'}} />
              <span className="text-xs text-gray-500">Low → High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white shadow-lg shadow-orange-500/50" />
              <span className="text-xs text-gray-400">Charlotte NC (CHCC)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 border border-white/50" />
              <span className="text-xs text-gray-400">Major metro</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'US Hindu Population', value: '3.2M+', sub: '~1% of US population' },
              { label: 'Charlotte Metro', value: '~50,000', sub: 'One of fastest-growing' },
              { label: 'Annual Growth Rate', value: '4–6%', sub: 'Driven by tech immigration' },
              { label: 'States with 100k+', value: '8 states', sub: 'CA, NY, NJ, TX, IL, VA, GA, MI' },
            ].map(stat => (
              <div key={stat.label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-saffron mb-1">{stat.value}</div>
                <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-gray-500 text-xs">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Metro table */}
          <h2 className="text-white font-heading text-xl font-semibold mb-4">Top Metro Areas</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400">
                  <th className="text-left py-2 pr-4">Metro Area</th>
                  <th className="text-right py-2 pr-4">Est. Hindu Population</th>
                  <th className="text-left py-2">Notable Hubs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[
                  { metro: 'New York / New Jersey', pop: '~700,000', hubs: 'Edison NJ, Jersey City, Parsippany' },
                  { metro: 'San Francisco Bay Area', pop: '~350,000', hubs: 'Fremont, San Jose, Cupertino' },
                  { metro: 'Washington DC / NoVA', pop: '~250,000', hubs: 'Ashburn, Chantilly, Herndon VA' },
                  { metro: 'Chicago, IL', pop: '~200,000', hubs: 'Skokie, Schaumburg, Oak Brook' },
                  { metro: 'Houston, TX', pop: '~200,000', hubs: 'Sugar Land, Missouri City, Katy' },
                  { metro: 'Dallas–Fort Worth, TX', pop: '~150,000', hubs: 'Coppell, Frisco, Plano' },
                  { metro: 'Los Angeles, CA', pop: '~150,000', hubs: 'Artesia, Cerritos, Torrance' },
                  { metro: 'Detroit / Troy, MI', pop: '~130,000', hubs: 'Troy, Southfield, Novi' },
                  { metro: 'Boston, MA', pop: '~100,000', hubs: 'Framingham, Waltham, Marlborough' },
                  { metro: 'Atlanta, GA', pop: '~100,000', hubs: 'Alpharetta, Suwanee, Duluth' },
                  { metro: 'Seattle, WA', pop: '~80,000', hubs: 'Bellevue, Redmond, Kirkland' },
                  { metro: '★ Charlotte, NC', pop: '~50,000', hubs: 'South Charlotte, Ballantyne, Fort Mill SC', highlight: true },
                ].map(row => (
                  <tr key={row.metro} className={row.highlight ? 'bg-orange-950/30 text-orange-300' : 'text-gray-300'}>
                    <td className="py-2 pr-4 font-medium">{row.metro}</td>
                    <td className="py-2 pr-4 text-right font-mono">{row.pop}</td>
                    <td className="py-2 text-gray-400 text-xs">{row.hubs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-xs mt-6">
            Data sources: Pew Research Center (2023), American Community Survey, Association of Statisticians of American Religious Bodies.
            Population figures are estimates and may vary. Charlotte figure reflects greater metro area including Mecklenburg, Union, and York counties.
          </p>
        </div>
      </div>
    </div>
  )
}
