export enum FilterName {
  brightness = 'brightness',
  contrast = 'contrast',
  fadeIn = 'fadein',
  fadeOut = 'fadeout',
  grayscale = 'grayscale',
  lighten = 'lighten',
  negative = 'negative',
  saturation = 'saturation',
  sobel = 'sobel',
  vintage = 'vintage',
}

export enum FilterKey {
  brightness = 'brightness',
  color = 'color',
  contrast = 'contrast',
  duration = 'duration',
  saturation = 'saturation',
}

export interface FilterBrightness {
  [FilterKey.brightness]: number
}

export interface FilterContrast {
  [FilterKey.contrast]: number
}

export interface FilterFadeIn {
  [FilterKey.color]: string
  [FilterKey.duration]: number
}

export interface FilterSaturation {
  [FilterKey.saturation]: number
}

export interface FilterOptions {
  [FilterName.brightness]: FilterBrightness
  [FilterName.contrast]: FilterContrast
  [FilterName.fadeIn]: FilterFadeIn
  [FilterName.fadeOut]: undefined
  [FilterName.grayscale]: undefined
  [FilterName.lighten]: undefined
  [FilterName.negative]: undefined
  [FilterName.saturation]: FilterSaturation
  [FilterName.sobel]: undefined
  [FilterName.vintage]: undefined
}
