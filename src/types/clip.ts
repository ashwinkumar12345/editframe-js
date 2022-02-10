import { Resolution } from './common'
import { VideoLayer } from './video'

/* eslint-disable camelcase */
export type ClipRequestOptions = {
  metadata?: object
  share?: boolean
  title?: string
}

export type ClipEncodeConfig = ClipRequestOptions & {
  clip: { id: any; resolution?: Resolution; volume?: number }
  layers: Array<VideoLayer>
}
/* eslint-enable camelcase */
