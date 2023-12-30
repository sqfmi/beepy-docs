---
sidebar_position: 1
---

# Keyboard Firmware

The keyboard firmware is a fork of [i2c_puppet](https://github.com/solderparty/i2c_puppet) with a few additional features to support the Beepy.

You can download the latest version of the Beepy firmware here: https://github.com/ardangelo/beepberry-rp2040/releases/latest/download/i2c_puppet.uf2

## Basic key mappings

- Call is mapped to Control
- "Berry" key is mapped to Tmux prefix (customize the prefix in the keymap file)
- Touchpad click enters Meta mode (see the section on Meta mode). Double click enters touchpad scroll mode
- Back is mapped to Escape
- Holding "End Call" safely shuts down the Pi
- Physical Alt is mapped to symbols printed on the keycap
- Symbol is mapped to AltGr (Right Alt), mapped to more symbols via the keymap file
- Physical Alt + Enter is mapped to Tab

## Alt and Sym modifiers

The alternate symbols printed directly on the Beepy keys are triggered by pressing the physical Alt key, then the key on which the symbol is printed. For additional symbols not printed directly on the keys, the Sym key is used.

### Symbol key map

<img src="/img/symbol-keys.png" width="100%"/>

### Sticky modifier keys

The keyboard driver supports sticky modifier keys. Holding a modifier key (Shift, Alt, Sym) while typing an alpha keys will apply the modifier to all alpha keys until the modifier is released.

One press and release of the modifier will enter sticky mode, applying the modifier to the next alpha key only. If the same modifier key is pressed and released again in sticky mode, it will be canceled.

Visual mode indicators are drawn in the top right corner of the display, with indicators for Shift, Physical Alt, Control, Alt, Symbol, and Meta mode.

## Meta mode

Meta mode is a modal layer that assists in rapidly moving the cursor and scrolling with single keypresses. To enter Meta mode, click the touchpad button once. Then, the following keymap is applied, staying in Meta mode until dismissed:

- E: up, S: down, W: left, D: right
    - Why not WASD? This way, you can place your thumb in the middle of all four of these keys, and more fluidly move the cursor without mistyping
- R: Home, F: End, O: PageUp, P: PageDown
- Q: Alt+Left (back one word), A: Alt+Right (forward one word)
- T: Tab (dismisses Meta mode)
- X: Apply Control to next key (dismisses Meta mode)
- C: Apply Alt to next key (dismisses Meta mode)
- 0: Toggle display black/white inversion
- N: Decrease keyboard backlight brightness
- M: Increase keyboard backlight brightness
- $: Toggle keyboard backlight
- Touchpad click (while in Meta mode): Enable touchpad scroll mode (up and down arrrow keys)
   - Other Meta mode keys will continue to work as normal
   - Exiting meta mode will also exit touchpad scroll mode
   - Subsequent clicks of the touchpad will type Enter.
- Esc: ("Back" button): exit meta mode

Typing any other key while in Meta mode will exit Meta mode and send the key as if it was typed normally.

## `sysfs` Interface

The following sysfs entries are available under `/sys/firmware/beepy`:

- `led`: 0 to disable LED, 1 to enable. Write-only
- `led_red`, `led_green`, `led_blue`: set LED color intensity from 0 to 255. Write- only
- `keyboard_backlight`: set keyboard brightness from 0 to 255. Write-only
- `battery_raw`: raw numerical battery level as reported by firmware. Read-only
- `battery_volts`: battery voltage estimation. Read-only
- `battery_percent`: battery percentage estimation. Read-only

## Module parameters

Write to `/sys/module/beepy_kbd/parameters/<param>` to set, or unload and reload the module with `beepy-kbd param=val`.

- `touchpad`: one of `meta` or `keys`
    - `meta`: default, will use the touchpad button to enable or disable Meta mode
    - `keys`: touchpad always on, swiping sends arrow keys, clicking sends Enter

## Custom Keymap

The Alt and Sym keymaps and the Tmux prefix sent by the "Berry" key can be edited in the file `/usr/share/kbd/keymaps/beepy-kbd.map`. To reapply the keymap without rebooting, run `loadkeys /usr/share/kbd/keymaps/beepy-kbd.map`.
