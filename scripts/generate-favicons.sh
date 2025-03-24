#!/bin/bash

# Convert SVG to PNG favicons
convert public/favicon.svg -resize 16x16 public/favicon-16x16.png
convert public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert public/favicon.svg -resize 192x192 public/android-chrome-192x192.png
convert public/favicon.svg -resize 512x512 public/android-chrome-512x512.png
convert public/favicon.svg -resize 180x180 public/apple-touch-icon.png

# Create ICO file with multiple sizes
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico 