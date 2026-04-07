import type { Metadata } from 'next'
import HinduPopulationMap from './HinduPopulationMap'

export const metadata: Metadata = {
  title: 'Hindu Population in the US | CHCC Charlotte',
  description:
    'Interactive heatmap of Hindu population concentrations across the United States, highlighting the growing Charlotte Hindu community and the need for CHCC.',
}

export default function HinduPopulationMapPage() {
  return <HinduPopulationMap />
}
