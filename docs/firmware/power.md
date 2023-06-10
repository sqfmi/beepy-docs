---
sidebar_position: 2
---

# Power Management & Battery

The onboard RP2040 controls the power to the Pi, as well as measuring the battery level with its ADC. The Beepberry can be safely shutdown by holding the "End Call" button on the keyboard.

## Examples

### Battery Level Reporting

To read the battery voltage on the Beepberry, you can read from the register `0x17` over I2C.

This is a read-only register, it is 2 bytes in size.

It returns a 16 bit value from the ADC (VREF = 3.3V). On the Beepberry there is a voltage divider, so the battery voltage can be calculated as **VBAT = 3.3V \* (value/4095) \* 2**.

#### Command-line Example
First release the I2C bus from the keyboard driver, then read 1 word (2 bytes) from I2C bus 1, address 0x1F, register 0x17
```bash
sudo modprobe -r bbqX0kbd
sudo i2cget -y 1 0x1F 0x17 w
```

### Sleep/Wake

To Do