---
title: "Palette 02: Nutcracker"
seoTitle: "Palette 02: Nutcracker Style Tile | Bronson Harrington"
description: The festive palette edition. Cream paper, navy ink, a deep wine red and a bright red, with a cool blue for focus. See the full style tile.
date: 2026-11-01
tags: [palette, design]
styleTile: "02"
---

Edition 02 is the festive one. Navy, cream and two reds is the nutcracker soldier's uniform, so that's the name. The structure hasn't changed. Same grid, same type, same components, new colours. The palette came from [coolors.co](https://coolors.co/palette/780000-c1121f-fdf0d5-003049-669bbc).

## The palette

**Cream paper** (#FDF0D5) instead of edition 01's cool off-white. It's warmer and reads like the inside of a holiday card.

**Navy ink** (#003049) for text. It's the first edition where the ink isn't near-black, and it's still over 12:1 against the paper.

**Deep wine red** (#780000) is the accent: links, labels and the menu button's shadow. The palette's brighter red was the obvious pick, but the contact form shows errors in red. Wine-coloured links never get mistaken for an error message.

**Bright red** (#C1121F) takes the heavy rules above cards and lists. It's where the festive colour shows most, on lines that carry structure, not text.

**Steel blue** (#669BBC) is the highlight: the keyboard focus ring, callouts, and the tick on a correctly filled form field. As it comes from the palette it's too pale to see against cream, so the build darkens it to #5488A7 to reach 3:1 contrast. The tile shows both values.

## What changed under the hood

Two smaller tones got the same treatment: the faint label grey and the form field borders, both darkened slightly to stay readable. Nothing is picked by eye. Every text colour is checked against WCAG AA before the site builds, and the build stops if anything fails.

One fix came out of this edition. Valid form fields used to follow the accent colour. With a red accent, a correctly filled field would have looked like an error, so valid fields now follow the highlight colour instead.

## The type

Unchanged: **Inter** for headings and body, **JetBrains Mono** for the structural layer.

Edition 01 is still there in [its own note](/notes/palette-01-swiss-terminal/), with its tile in the original colours.
