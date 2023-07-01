---
sidebar_position: 3
---

# RGB LED

The RGB LED is connected to the RP2040 and can be controlled by the Pi via [I²C](https://en.wikipedia.org/wiki/I²C).

The LED color on the Beepberry is exposed on I2C bus 1 at the chip address `0x1F`.

Controls are available at the following specific data addresses:

| Function | Read   | Write  |
|----------|--------|--------|
| Power    | `0x20` | `0xA0` |
| Red      | `0x21` | `0xA1` |
| Green    | `0x22` | `0xA2` |
| Blue     | `0x23` | `0xA3` |

*Note: write addresses are the read address masked with 0x80.*

Valid RGB values are on the range `0x00` to `0xFF`.

A value of 0 in the power register represents the LED's off state, while any other value represents on.

## Example

To set the RGB values to red and turn the LED on from the command line:

```bash
# Format:
# i2cset -y [i2cbus] [chip-address] [data-address] value
i2cset -y 1 0x1F 0xA1 0xFF
i2cset -y 1 0x1F 0xA2 0x00
i2cset -y 1 0x1F 0xA3 0x00
i2cset -y 1 0x1F 0xA0 0xFF
```
