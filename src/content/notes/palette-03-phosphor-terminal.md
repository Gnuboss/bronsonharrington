---
title: "Palette 03: Phosphor Terminal"
seoTitle: "Palette 03: Phosphor Terminal Style Tile | Bronson Harrington"
description: The first dark palette edition. Phosphor green on near-black glass, amber for links and warnings, and VT323 pixel type. See the full style tile.
date: 2026-11-14
tags: [palette, design]
styleTile: "03"
---

Edition 03 is the first dark one, and the first to change the type. It arrived with the Authority Engine relaunch: the home page now reads like a terminal session, so the whole site follows. Same grid, same components, a very different screen.

## The palette

**Near-black glass** (#050805) for the paper. It has a hint of green in it, like an old CRT that's switched on but idle.

**Phosphor green** (#3DFF7A) is the ink: headings and body text, over 15:1 against the paper. Softer greens for body copy and labels are mixed from it at build time.

**Amber** (#FFB000) is the accent and the highlight: links, labels and the keyboard focus ring. In a wall of green text, anything clickable needs to stand apart, and amber is the colour terminals have always used for warnings.

**Deep green** (#1F9E48) takes the heavy rules above cards and lists.

## What changed under the hood

A dark paper broke one assumption. Form errors used to be a fixed dark red, darkened further if a palette needed it. Against near-black that turned olive, which doesn't read as an error at all. Dark editions now start from a light red (#FF6B6B), at over 7:1. As always, every text colour is checked against WCAG AA before the site builds.

There's also a faint scanline layer over the whole page. It's decoration only: it never catches a click and it doesn't change any contrast measurement.

## The type

**VT323** for headings: a pixel face drawn from old terminal type. It has one weight, so headings never get a faked bold, and it runs small, so display sizes step up. **JetBrains Mono** now sets the body as well as the structural layer, and takes over from VT323 for the smallest headings, where pixel type gets hard to read.

The earlier editions keep their own notes: [01 Swiss Terminal](/notes/palette-01-swiss-terminal/) and [02 Nutcracker](/notes/palette-02-nutcracker/).
