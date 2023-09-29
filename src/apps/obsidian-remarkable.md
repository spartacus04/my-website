---
title: Obsidian & Remarkable
description: Integrates the reMarkable tablet into an Obsidian workflow by letting users quickly capture and insert their drawings.
categories:
  - obsidian
  - remarkable
  - typescript
  - productivity
image: https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/2023_Obsidian_logo.svg/1200px-2023_Obsidian_logo.svg.png
published: true
---

This a plugin integrating the [reMarkable](https://remarkable.com) paper tablet with the note-taking software [Obsidian](https://obsidian.md). More specifically, it takes a screenshot from your reMarkable (via USB or WiFi, however you prefer), saves it as a .png files in your Vault, optionally post-processes it, and inserts the image in your currently open note.

![Preview of the plugin functionality](https://user-images.githubusercontent.com/669103/123702539-8c2c2f80-d863-11eb-952d-acbb8df0a146.gif)

### Installation

#### Prerequisites

- Set up [reSnap](https://github.com/cloudsftp/reSnap) on your reMarkable tablet and on your computer.
- Set up your reMarkable so you have passwordless access over SSH, see https://www.reddit.com/r/RemarkableTablet/comments/78u90n/passwordless_ssh_setup_for_remarkable_tablet/
- To use the default post processor script setup python3

Now, go to this plugin's settings page and configure them as described below.

#### Settings

Open the settings window for this plugin, and:

- "reSnap executable": Enter the absolute path to the previously installed `reSnap.sh`.
- "reMarkable IP": Enter the IP address of your rM. If you have your rM connected via cable, this should just be `10.11.99.1`. If you want to use this plugin's functionality over WiFi, get the rM's IP via its menu, under _Help > Copyrights and licenses_, and there at the bottom.
- Enter the output folder in your Vault where you would like the plugin to store the images captured from your rM.

### Usage

There are two commands:

- _Insert a drawing from the reMarkable_
- _Insert a landscape-format drawing from the reMarkable_
  They do exactly what they say (the first inserts in portrait mode). Simply use them via the command pane, or configure some keyboard shortcuts.

#### Postprocessing script

Optionally, you can run a post processing script that further modifies the captured images.
The default one is written in python and it

- automatically removes the menu and buttons
- crops away any remaining whitespace
- turns the white background transparent
- inverts the images for better contrast in dark mode

It was used for the example workflow shown in the GIF at the beginning of this file. This script is available as `src/postprocess.py` in this repository.

You can, however, run anything you'd like as a postprocessing script. The only requirements of this plugin is that whatever script you use

- receives one argument: the absolute path to the captured image file
- overwrites this image file in-place, also using the PNG output format

### Tips

- I would recommend installing [Ozan's Image in Editor Plugin](https://github.com/ozntel/oz-image-in-editor-obsidian), which will show you the captured images directly in editor mode.
- If you want to make your rM handwriting searchable, you might like to try the [Obsidian OCR plugin](https://github.com/schlundd/obsidian-ocr-plugin). I've not tested it extensively, but it worked well on some semi-clean handwriting I tried.

### Possible future features

- [ ] Configurable output file name patterns
- [ ] rM cloud integration in the vault

### Disclaimer

This project is not affiliated to, nor endorsed by, reMarkable AS. **I assume no responsibility for any damage done to your device due to the use of this software.**
