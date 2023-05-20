---
sidebar_position: 1
---

# Getting Started

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

### Additional Details
- In ```/boot/cmdline.txt```, edit ```fbcon=font:VGA8x8``` to change the font/size. See [fbcon](https://www.kernel.org/doc/Documentation/fb/fbcon.txt) for more details
- Long holding the "End Call" key (~3 seconds) will trigger the key ```KEY_POWER``` and safely shutdown the Pi
- Holding the "End Call" button during power up will put the keyboard into bootloader mode; it will now appear as a USB storage device and you can drag'n'drop the new firmware (\*.uf2) into the drive and it will reboot with the new firmware

## Join the Beepberry Discord!

[**Discord Invite**](https://discord.gg/QERrSferdF)

### Matrix Bridge

[**#beepberry-general**](https://matrix.to/#/#beepberry-general:beeper.com)

[**#beepberry-dev**](https://matrix.to/#/#beepberry-dev:beeper.com)

[**#beepberry-apps**](https://matrix.to/#/#beepberry-apps:beeper.com)

[**#beepberry-hw**](https://matrix.to/#/#beepberry-hw:beeper.com)

