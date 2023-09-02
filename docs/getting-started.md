---
sidebar_position: 1
---

# Getting Started

## Hardware Setup

If you are installing your own Raspberry Pi Zero W or any other SBC, make sure all the mounting pins are properly aligned to each hole before tightening the screws. **If you cannot see the pin through a header hole, then it is not properly mounted**. You can move the board around until all the pins "click" into place.

<img alt="Beepy Raspberry Pi Zero mounting diagram" src='/img/beepy-header-mount-diagram.jpg' width='600' />

The USB-C port at the bottom powers and charges the Beepy. **Do not power the Raspberry Pi Zero through its Micro-USB port (PWR IN).**

## Updating Firmware

The Beepy device firmware is updated to add new device features and capabilities. Before setting up your Beepy, please make sure you update the device firmware.

- Download the [latest firmware image](https://github.com/sqfmi/i2c_puppet/releases/latest/download/i2c_puppet.uf2)
- Slide the power switch off (left if facing up)
- Connect the Beepy to your computer via USB-C
- While holding the "End Call" key (top right on the keypad), slide the power switch on
- The Beepy will present itself as a USB mass storage device, drag'n'drop the new firmware (\*.uf2) into the drive and it will reboot with the new firmware

## Choose an Operating System

There are two supported choices of operating system to run on your Beepy:

- Buildroot: a slimmed-down, Beepy-centric image with a fast boot
- Raspbian: a powerful, customizable distribution with all the bells and whistles

## Setting up a Buildroot System

Buildroot is automatically set up with Beepy device drivers and a set of useful software, compatible with the Raspberry Pi Zero 2 W. Tailored for on-the-go communication, it ships with the following applications:

* `gomuks` - Beeper command line client
* `mosh` - Mobile remote shell
* `w3m` - Text based browser
* `aerc` - Command line email client
* Python 3

To use the Beepy Buildroot image, download and flash the latest release here:

https://github.com/ardangelo/beepberry-buildroot/releases

To configure a Wi-Fi network, open the boot partition on your PC and rename the file `wlan/ssid_goes_here.psk` to `wlan/<your_network_name>.psk` and edit its contents, replacing `passphrase_goes_here` with the network passphrase.

The initial boot will take about 30 seconds to resize disk partitions to fill your SD card. Subsequent boots take around 8 seconds from power-on to Tmux.

Review the [default symbol keymap](/docs/keyboard)

## Setting up a Raspbian System

1. Use the [Raspberry Pi Imager tool](https://www.raspberrypi.com/software/) to flash an SD card with the latest Raspberry Pi OS image
    - Choose OS - Raspberry Pi OS (other) - ***Raspberry Pi OS Lite (32-bit) image***
    - Click the gear icon ⚙ to set up a new user, WiFi, and enable SSH

2. SSH into the Pi and install driver packages. The LED will remain green until drivers are installed and the system has rebooted

```
curl -s --compressed "https://ardangelo.github.io/beepy-ppa/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/beepy.gpg >/dev/null \
&& sudo curl -s --compressed -o /etc/apt/sources.list.d/beepy.list "https://ardangelo.github.io/beepy-ppa/beepy.list" \
&& sudo apt update \
&& sudo apt-get -y install beepy-kbd sharp-drm \
&& sudo shutdown -r now
```

3. Your Beepy with Raspbian is now ready, enjoy!

    - Review the [default symbol keymap](/docs/keyboard)

## Powering off your Beepy

Long holding the "End Call" key (5 seconds) will trigger the key ```KEY_POWER``` and safely shutdown the Pi. The LED will turn red until OS shutdown has completed.

Please wait another few seconds until the disk activity light has turned off to ensure disks are synced.

After shutting down using the "End Call" key, holding the key for 1 second will turn the Pi back on

## Changing Font Size

In ```/boot/cmdline.txt```, edit ```fbcon=font:VGA8x8``` to change the font/size. The next largest size is `VGA8x16`. See [fbcon](https://www.kernel.org/doc/Documentation/fb/fbcon.txt) for more details.


## Join the Beepy Discord!

[**Discord Invite**](https://discord.gg/QERrSferdF)

### Matrix Bridge

[**#beepy-general**](https://matrix.to/#/#beepberry-general:beeper.com)

[**#beepy-dev**](https://matrix.to/#/#beepberry-dev:beeper.com)

[**#beepy-apps**](https://matrix.to/#/#beepberry-apps:beeper.com)

[**#beepy-hw**](https://matrix.to/#/#beepberry-hw:beeper.com)

