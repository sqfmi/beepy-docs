---
sidebar_position: 3
---

# RGB LED

The RGB LED is connected to the RP2040, and can be controlled by the Pi via i2c by writing to specific registers.

## Examples

### Set RGB color

To get/set the LED color on the Beepberry, you can read/write to the following registers over I2C. The values can be 0x00 - 0xFF.

```
REG_LED_R = 0x21
REG_LED_G = 0x22
REG_LED_B = 0x23
```

**Note: When writing to the registers, mask address with 0x80 e.g. to read use address 0x21, to write use address 0xA1**

To turn the LED on/off, you can write to the register `0x20`. A value of 0 turns the LED off, while any other value turns it on.

#### Command-line Example
First release the I2C bus from the keyboard driver, then set the RGB values to red and turn the LED on.
```bash
sudo modprobe -r bbqX0kbd
sudo i2cset -y 1 0x1F 0xA1 0xFF
sudo i2cset -y 1 0x1F 0xA2 0x00
sudo i2cset -y 1 0x1F 0xA3 0x00
sudo i2cset -y 1 0x1F 0xA0 0xFF
```

### Blink on trigger

To Do