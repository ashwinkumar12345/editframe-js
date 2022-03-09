import {
  AudioLayer,
  FilterLayer,
  LayerAlignment,
  LayerAttribute,
  LayerBase,
  LayerHorizontalAlignment,
  LayerHorizontalAlignmentValue,
  LayerLottie,
  LayerText,
  LayerTrim,
  LayerVerticalAlignmentValue,
  LayerVisualMedia,
  LayerWaveform,
  PrimitiveType,
  WaveformStyleValue,
} from 'constant'
import { ValidationErrorText } from 'strings'
import { validateValueIsOfType } from 'utils/validation'
import { validateFilter } from 'utils/video/filters'

const filterUndefined = (maybeUndefined: unknown) => maybeUndefined !== undefined

export const validateLayerAlignment = (
  callerName: string,
  { horizontalAlignment, verticalAlignment }: LayerAlignment
): string[] => {
  const errors: string[] = []
  const acceptedVerticalValues = Object.values(LayerVerticalAlignmentValue)

  errors.push(validateHorizontalAlignment(callerName, LayerAttribute.horizontalAlignment, horizontalAlignment))

  if (verticalAlignment && !acceptedVerticalValues.includes(verticalAlignment)) {
    errors.push(
      ValidationErrorText.MUST_BE_TYPE(
        callerName,
        LayerAttribute.verticalAlignment,
        verticalAlignment,
        acceptedVerticalValues.join(', ')
      )
    )
  }

  return errors.filter(filterUndefined)
}

export const validateLayerAudio = (callerName: string, options: AudioLayer): string[] => {
  const errors: string[] = []

  errors.push(validateValueIsOfType(callerName, LayerAttribute.volume, options.volume, PrimitiveType.number))

  return errors.filter(filterUndefined)
}

export const validateLayerBase = (callerName: string, { length, start }: LayerBase): string[] => {
  const errors: string[] = []

  errors.push(validateValueIsOfType(callerName, LayerAttribute.start, start, PrimitiveType.number))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.length, length, PrimitiveType.number))

  return errors.filter(filterUndefined)
}

export const validateLayerFilter = (callerName: string, { filter }: FilterLayer): string[] => {
  const errors: string[] = []

  validateFilter(callerName, LayerAttribute.filter, filter).forEach((error) => errors.push(error))

  return errors.filter(filterUndefined)
}

export const validateHorizontalAlignment = (
  callerName: string,
  layerAttribute: string,
  horizontalAlignment: LayerHorizontalAlignment
): string | undefined => {
  const acceptedHorizontalValues = Object.values(LayerHorizontalAlignmentValue)

  if (horizontalAlignment && !acceptedHorizontalValues.includes(horizontalAlignment)) {
    return ValidationErrorText.MUST_BE_TYPE(
      callerName,
      layerAttribute,
      horizontalAlignment,
      acceptedHorizontalValues.join(', ')
    )
  }

  return undefined
}

export const validateLayerLottie = (callerName: string, { data }: LayerLottie): string[] => {
  const errors: string[] = []

  errors.push(validateValueIsOfType(callerName, LayerAttribute.data, data, PrimitiveType.object))

  return errors.filter(filterUndefined)
}

export const validateLayerText = (
  callerName: string,
  { fontFamily, fontSize, maxFontSize, maxHeight, maxWidth, text, textAlign }: LayerText
): string[] => {
  const errors: string[] = []

  errors.push(validateValueIsOfType(callerName, LayerAttribute.fontFamily, fontFamily, PrimitiveType.string))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.fontSize, fontSize, PrimitiveType.number))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.maxFontSize, maxFontSize, PrimitiveType.number))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.maxHeight, maxHeight, PrimitiveType.number))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.maxWidth, maxWidth, PrimitiveType.number))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.text, text, PrimitiveType.string))
  errors.push(validateHorizontalAlignment(callerName, LayerAttribute.textAlign, textAlign))

  return errors.filter(filterUndefined)
}

export const validateLayerTrim = (callerName: string, { trim }: LayerTrim): string[] => {
  const errors: string[] = []

  errors.push(
    validateValueIsOfType(
      callerName,
      ValidationErrorText.SUB_FIELD(LayerAttribute.trim, LayerAttribute.start),
      trim?.start,
      PrimitiveType.number
    )
  )

  errors.push(
    validateValueIsOfType(
      callerName,
      ValidationErrorText.SUB_FIELD(LayerAttribute.trim, LayerAttribute.end),
      trim?.end,
      PrimitiveType.number
    )
  )

  return errors.filter(filterUndefined)
}

export const validateLayerVisualMedia = (
  callerName: string,
  { backgroundColor, color, x, y }: LayerVisualMedia
): string[] => {
  const errors: string[] = []

  errors.push(validateValueIsOfType(callerName, LayerAttribute.backgroundColor, backgroundColor, PrimitiveType.string))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.color, color, PrimitiveType.string))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.x, x, PrimitiveType.number))
  errors.push(validateValueIsOfType(callerName, LayerAttribute.y, y, PrimitiveType.number))

  return errors.filter(filterUndefined)
}

export const validateLayerWaveform = (callerName: string, { style }: LayerWaveform): string[] => {
  const errors: string[] = []

  errors.push(validateValueIsOfType(callerName, LayerAttribute.style, style, PrimitiveType.string))

  const acceptedWaveformStyles = Object.values(WaveformStyleValue)

  if (style && !acceptedWaveformStyles.includes(style)) {
    errors.push(
      ValidationErrorText.MUST_BE_TYPE(callerName, LayerAttribute.style, style, acceptedWaveformStyles.join(', '))
    )
  }

  return errors.filter(filterUndefined)
}
