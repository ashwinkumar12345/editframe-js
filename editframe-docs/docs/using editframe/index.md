---
layout: default
title: Basic Usage
nav_order: 4
has_children: false
---

# Basic usage

To make calls to the Editframe API, you need a Client ID and an application-specific API token. You can access these from the Editframe Developer Portal. 

You can provide the following library variables during instantiation:

   ```bash
   const { Editframe } = require('@editframe/editframe-js')
   // or
   import { Editframe, CommonResolutions } from '@editframe/editframe-js'

   const CLIENT_ID = 'XXXXXXXXXXXXXXXXXXXXXXX'
   const TOKEN = 'XXXXXXXXXXXXXXXXXXXXXXX'

   const editframe = new Editframe({ clientId: CLIENT_ID, token: TOKEN })
   const composition = await editframe.new({ dimensions: CommonResolutions._1080pVertical })
   // or
   const composition = await editframe.new({ dimensions: { height: 1920, width: 1080 } })
   ```

To retrieve applications registered to a user:

   ```bash
   await editframe.applications.all()
   ```

To retrieve videos belonging to an authorized application:

   ```bash
   await editframe.videos.all()
   ```

To retrieve an encoding / encoded video:

   ```bash
   await editframe.videos.get('yKOqd7QnJZ')
   ```

To construct a video clip from images and audio:

   ```bash
   const composition = editframe.videos.new({ dimensions: { height: 700, width: 700 }, duration: 12 })
   const imageOne =
  'https://media0.giphy.com/media/gK99k8iMtKeJ2/giphy.gif?cid=ecf05e47iow5n0ep2sb40lm4bh8kvs7sckmh6af7zwwdurvi&rid=giphy.gif&ct=g'
   const imageTwo =
  'https://media4.giphy.com/media/52Ywm818WNeuI/giphy.gif?cid=ecf05e4778nj4l3n55qqacjclcj0nf0ux9cqnbv1lsl0d0r2&rid=giphy.gif&ct=g'
   const imageThree =
  'https://media4.giphy.com/media/2csuIJj6TmuKA/giphy.gif?cid=ecf05e47zc9z0u2nh4skss842n5fiyu07unyxt8derf9ax1u&rid=giphy.gif&ct=g'
   const logo = fs.createReadStream(path.resolve('./logo.png'))
   const audioFile = 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3'

   composition.addImage(imageOne, { format: 'fill', start: 0, length: 4 })
   composition.addImage(imageTwo, { format: 'fill', start: 4, length: 8 })
   composition.addImage(imageThree, { format: 'fill', start: 8, length: 12 })
   composition.addImage(logo, { x: 'center', y: 'center' })
   composition.addAudio(audioFile)

   await composition.encode()
   ```

To trim an existing video clip:

   ```bash
   const composition = await editframe.videos.new({ backgroundColor: '#ffffff' }, './clip.mp4')
   composition.setTrim({ start: 0, end: 10 })
   composition.encode()
   ```

To add a filter to an existing video clip:

   ```bash
   const composition = await editframe.videos.new({ backgroundColor: '#ffffff' }, './clip.mp4')
   composition.addFilter({ filter: { filterName: 'grayscale' } })
   composition.addFilter({ filter: { filterName: 'fadeIn', options: { color: '#d0d0d0', duration: 3 } } })
   composition.encode()
   ```