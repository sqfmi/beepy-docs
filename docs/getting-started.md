---
sidebar_position: 1
---

# Getting Started

## Software Setup

1. Use the [Raspberry Pi Imager tool](https://www.raspberrypi.com/software/) to flash an SD card with the latest Raspberry Pi OS image
    - Choose the ***Raspberry Pi OS Lite (32-bit) image***
    - Click the gear icon ⚙ to also setup WiFi and enable SSH

2. SSH into the Pi and update the kernel and reboot
```
sudo apt-get update && sudo apt-get install raspberrypi-kernel
```
```
sudo shutdown -r now
```

3. After reboot, SSH into the Pi again and run the setup script
```
curl -s https://raw.githubusercontent.com/beeper/beepberry/main/raspberrypi/setup.sh | bash
```

4. Your Beepberry is now ready, enjoy!

## Hardware Setup

If you are installing your own Raspberry Pi Zero W or any other SBC, make sure all the mounting pins are properly aligned to each hole before tightening the screws. **If you cannot see the pin through a header hole, then it is not properly mounted**. You can move the board around until all the pins "click" into place.

<img alt="Beepberry Raspberry Pi Zero mounting diagram" src='/img/beepberry-header-mount-diagram.jpg' width='600' />

## Firmware Update

To update the Beepberry's firmware:

1. Slide the power switch off (left if facing up)
2. Connect the Beepberry to your computer via USB-C
3. While holding the "End Call" key (top right on the keypad), slide the power switch on
4. The Beepberry will present itself as a USB mass storage device, drag'n'drop the new firmware (\*.uf2) into the drive and it will reboot with the new firmware

The latest Beepberry firmware can be found here: [**i2c_puppet.uf2**](https://github.com/sqfmi/i2c_puppet/raw/main/i2c_puppet.uf2)

## Additional Details
- In ```/boot/cmdline.txt```, edit ```fbcon=font:VGA8x8``` to change the font/size. See [fbcon](https://www.kernel.org/doc/Documentation/fb/fbcon.txt) for more details
- Long holding the "End Call" key (~3 seconds) will trigger the key ```KEY_POWER``` and safely shutdown the Pi

## Join the Beepberry Discord!

[**Discord Invite**](https://discord.gg/QERrSferdF)

### Matrix Bridge

[**#beepberry-general**](https://matrix.to/#/#beepberry-general:beeper.com)

[**#beepberry-dev**](https://matrix.to/#/#beepberry-dev:beeper.com)

[**#beepberry-apps**](https://matrix.to/#/#beepberry-apps:beeper.com)

[**#beepberry-hw**](https://matrix.to/#/#beepberry-hw:beeper.com)

