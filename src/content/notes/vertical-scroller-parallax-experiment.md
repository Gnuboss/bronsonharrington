---
title: "Diving through Growth OS: a parallax scroller experiment"
seoTitle: "A Parallax Scroller Experiment in SVG | Bronson Harrington"
description: How I built a vertical scroller from layered SVG and parallax, why it tells Growth OS as an ocean dive, and the one line that made it stutter.
date: 2026-11-02
tags: [lab, design, performance]
---

I was browsing game assets on GraphicRiver, looking at [layered background packs](https://graphicriver.net/item/game-backgrounds/23474148) made for slot and match-3 games: skies, sea, rocks and palms, painted as separate layers so a game can slide them at different speeds. That's parallax, and it's what makes a flat scene feel deep. It made me wonder what this site would feel like as a vertical scroller.

So I built one. [Try it here](/lab/scroller/): scroll down and you dive from the sky to the seabed.

## Why an ocean

An ocean is a natural vertical scroller, and it happens to tell [Growth OS](/framework/) better than a diagram does.

**Domination is the surface.** Being recommended, cited and chosen. It's what everyone sees, and what most people try to start with.

**Growth is the open water.** Content, topical depth and a footprint that keeps expanding. Most of the volume lives here, out of sight.

**Foundations is the seabed.** Position, a site built properly, technical health. Nobody sees it. Nothing above it holds without it.

Reading top to bottom, you see the story in the order the market experiences it, and finish at the part that actually decides the outcome.

## How it's built

The scene is original artwork, drawn as SVG in the same flat style as the rest of the site, and split into seven layers: sky and sun, clouds, the sea surface with distant islands, light rays, sea life, and the seabed with bedrock beneath it.

Each layer moves at its own speed as you scroll. The sky barely moves; the seabed moves with the page. That difference is the whole effect. A few things keep it light:

- **Drawn once.** Every layer is rendered once. Scrolling only changes each layer's position, which the browser hands to the graphics chip, so the scene is never repainted.
- **Sized to the scroll.** Each layer is exactly as tall as the distance it travels, so nothing runs out before the bottom.
- **Palette-driven.** Every colour comes from the site's palette tokens, so the ocean reskins with each [palette edition](/notes/palette-02-nutcracker/).
- **Polite.** Visitors who prefer reduced motion get a still scene.

A depth gauge on the right works like a game's HUD: the needle tracks how deep you are, and each mark is a jump link.

## The line that made it stutter

The first version scrolled badly on a slowed-down phone: 48 long tasks in three seconds of scrolling. The culprit was the depth needle. I was updating it through a CSS variable set on the root of the page, and changing a variable there makes the browser recalculate styles for the entire document, on every frame.

Moving the needle directly instead took it from 48 long tasks to 1. It's a good reminder that with scroll effects the expensive part is rarely the drawing. It's asking the browser to re-check everything else while you draw.

## What's next

The same engine works for any world with a direction: a climb up a mountain, a rocket launch, roots growing down into soil. I'd like to try a "player" that descends with you, and more of the game feel: glowing creatures in the deep, a sub, a diver. For now it lives in the [lab](/lab/), where experiments belong.
