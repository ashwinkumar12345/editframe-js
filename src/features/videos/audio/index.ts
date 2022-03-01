import { AudioMethod, CompositionInterface, LayerAttribute, PrimitiveType } from 'constant'
import { Media } from 'features/videos/media'
import { ValidationErrorText } from 'strings'
import { logValidationError, validatePresenceOf, validateValueIsOfType } from 'utils'

export class Audio extends Media {
  constructor({ composition, id }: { composition: CompositionInterface; id: string }) {
    super({ composition, id })
  }

  [AudioMethod.setVolume](volume: number): this | void {
    try {
      validatePresenceOf(volume, ValidationErrorText.REQUIRED_FIELD(LayerAttribute.volume))
      validateValueIsOfType(AudioMethod.setVolume, LayerAttribute.volume, volume, PrimitiveType.number, true)

      let newVolume = volume

      if (volume > 1) {
        newVolume = 1
      } else if (volume < 0) {
        newVolume = 0
      }

      return this._updateAttribute(LayerAttribute.volume, newVolume)
    } catch ({ stack }) {
      logValidationError(stack)
    }
  }

  [AudioMethod.setMuted](): this {
    return this._updateAttribute(LayerAttribute.volume, 0)
  }
}
