---
layout: default
title: Install
nav_order: 2
has_children: false
---

# Install

`editframe-js` is the offical Node client for interacting with the Editframe API.

The `editframe-js` library only works in Node environments and does not work in a browser. Use this library only in server environments to protect your API key. 
{: .warning }

Set your npm access token in your shell or `@editframe/shared-types` won't install.

   ```bash
   export NPM_TOKEN=your-token-goes-here
   npm install @editframe/editframe-js
   ```

   or 

   ```bash
   yarn add @editframe/editframe-js
   ```
