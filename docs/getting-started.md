---
sidebar_position: 1
---

# Getting Started

Follow the steps to setup your Beepy. Out of the box, the display will only show static. If you see yellow lines on the display, **it is the screen protector** and can be removed.

## Software Setup

1. Use the [Raspberry Pi Imager tool](https://www.raspberrypi.com/software/) to flash an SD card with the Raspberry Pi OS Lite image
    - Choose OS - Raspberry Pi OS (other) - ***Raspberry Pi OS Lite (32-bit) image***
    - Click the gear icon ⚙ (or press ```CTRL + SHIFT + X```) to set the username, password, hostname, WiFi, and enable SSH
    - Make sure your computer and the Pi are on the same WiFi network in order to SSH in later

2. Update Beepy's firmware

    - Download the [latest firmware image](https://github.com/sqfmi/i2c_puppet/releases/latest/download/i2c_puppet.uf2)
    - Slide the power switch off (left if facing up)
    - Connect the Beepy to your computer via USB-C
    - While holding the "End Call" key (top right on the keypad), slide the power switch on
    - The Beepy will present itself as a USB mass storage device, drag'n'drop the new firmware (i2c_puppet.uf2) into the drive and it will reboot with the new firmware
    - Note: The LED will remain green until driver packages below are installed and the system has rebooted

3. SSH into your Beepy and install the driver packages
   
    ```bash
    ssh <USER>@<HOST>
    ```
    where `USER` is the username name created during Step 1, and `HOST` is the hostname (e.g. beepy.local) or the IP address of your Beepy
    - To get the IP address of your Beepy, you can:
        - Check your router's config page for the list of connected device and look for the IP address
        - Run a network scan using the command `sudo arp-scan --localnet`. This will list IP addresses of all devices in your local network
    - Once you SSH in, proceed with installing the packages using the following commands:

```
curl -s --compressed "https://ardangelo.github.io/beepy-ppa/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/beepy.gpg >/dev/null \
&& sudo curl -s --compressed -o /etc/apt/sources.list.d/beepy.list "https://ardangelo.github.io/beepy-ppa/beepy.list" \
&& sudo apt update \
&& sudo apt-get -y install beepy-kbd sharp-drm \
&& sudo shutdown -r now
```

4. Your Beepy is now ready, enjoy!

    - Review the [default symbol keymap](https://beepy.sqfmi.com/img/symbol-keys.png) 

## Hardware Setup

If you are installing your own Raspberry Pi Zero or any other SBC, make sure all the mounting pins are properly aligned to each hole before tightening the screws. **If you cannot see the pin through a header hole, then it is not properly mounted**. You can move the board around until all the pins "click" into place.

<img alt="Beepy Raspberry Pi Zero mounting diagram" src='/img/beepy-header-mount-diagram.jpg' width='600' />


The USB-C port at the bottom powers and charges the Beepy. **Do not power the Raspberry Pi Zero through its Micro-USB port (PWR IN).**

## Additional Details
- In ```/boot/cmdline.txt```, edit ```fbcon=font:VGA8x8``` to change the font/size. See [fbcon](https://www.kernel.org/doc/Documentation/fb/fbcon.txt) for more details
- Long holding the "End Call" key (5 seconds) will trigger the key ```KEY_POWER``` and safely shutdown the Pi
    - The LED will turn red until OS shutdown has completed
    - Wait another few seconds until the disk activity light on the Pi has turned off to ensure disks are synced
- After shutting down using the "End Call" key, holding the key for 1 second will turn the Pi back on

## Join the Beepy Discord!

[**Discord Invite**](https://discord.gg/QERrSferdF)

### Matrix Bridge

[**#beepy-general**](https://matrix.to/#/#beepberry-general:beeper.com)

[**#beepy-dev**](https://matrix.to/#/#beepberry-dev:beeper.com)

[**#beepy-apps**](https://matrix.to/#/#beepberry-apps:beeper.com)

[**#beepy-hw**](https://matrix.to/#/#beepberry-hw:beeper.com)
