# Figma SigFig plugin

This plugin cleans crypto text layers in Figma:

- Rounds down to **n** significant figures
- Adds and corrects comma thousandth delimiters
- retains crypto symbols i.e. "BTC, ETH, etc"

### Examples:

```
12345678.12345678 > 12,345,678
12,3456,78.12     > 12,345,678
23.12345678 BTC   > 23.123456 BTC
```

## How to use

This plugin is only available via developer mode. As this is quite a barebones plugin, we won't be submitting it to Figma community, nor does our non-Organization plan allows for internal plugin sharing. You'd have to clone or download this repository to your computer to use it. Cloning via Git is recommended, so you can keep it up to date.

After cloning or downloading `figma-sigfig` to a permanent location in your computer, go to Figma and select from the menu: `Plugins > Development > Import plugin from manifest`, then select `manifest.json` from where you saved the `figma-sigfig` folder.

You should now be able to run the plugin via the `COMMAND + /` command.

Select one or more text layers, then trigger the plugin command via `COMMAND + /`. Type "figma-sigfig" into the search to run the plugin. Your text layer(s) should be cleaned.

## Credits

Author(s): Aen

---

## Contributing

These are to-dos for improving the plugin. Please feel free to contribute:

- Properly support user locale via `Intl`
- UI and UX improvements
- Adopt official Figma styles for plugin UI styling
- More robust string correction for fiat values e.g. `$99,999.99 USD`
- Support for date formatting
- FigJam support (untested)

Pull requests welcomed!