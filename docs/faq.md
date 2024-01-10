---
sidebar_position: 6
---

# FAQ

### What's a Beepy?

Beepy is a portable computing device, with a beautiful high contrast, high resolution display, and a tactile keyboard + touchpad, it is the ultimate everyday hacking gadget.

Powered by the Raspberry Pi Zero W (or any other compatible SBCs), you can use it as a chat device (supporting all chat networks on Beeper e.g. iMessage/WhatsApp/Signal/etc. ), or use it as a hackable handheld cyberdeck, running any Linux application that runs on the Pi.

### What is Beeper?

Beeper is a universal chat app. It’s a single app to chat with friends on 15 different chat networks.

Learn more at https://www.beeper.com

### Does it have LTE/4G/5G/LoRA/Zigbee/GPS/etc. connectivity?

Additional connectivity can be expanded via USB or GPIO ports.

### Does Beepy come with a case?

No, but you can [3D print your own case](/docs/3D). We'll be offering a case soon. Beepy can also be used as is (with the addition of a rubber band).

### My Beepy LED is always on

You may be running an older version of the firmware, follow the firmware flashing instructions to [**update the firmware**](/docs/getting-started#software-setup).

### I just opened the box and have no idea what to do

First you need to follow the instructions to [flash an SD card with the OS](/docs/getting-started), then make sure the battery is charged by plugging in the USB C port and flipping the power switch. 

### Help, the screen is stuck displaying a very striking static pattern, even after I've flashed the SD card

Follow the [Getting Started](/docs/getting-started#software-setup) guide and run the install script before the screen can display anything.

### I set my WiFi SSID and password in the Pi imager but it can't seem to connect

The Pi Zero W only supports 2.4GHz WiFi networks. Make sure you're not trying to connect to a 5GHz network.

### I prefer a white background with black text

You can invert the display mode by running `echo 1 | sudo tee /sys/module/sharp_drm/parameters/mono_invert`

### My display contrast is too low

You can modify the display constrast by changing the value in `/sys/module/sharp_drm/parameters/mono_cutoff` - the default is 32.

If this is your first time booting up and you see a mostly blank screen with a vague raspberry shape in the top left and some scattered patches of black towards the middle then your image is probably set to boot into the desktop environment. You can make the desktop more legible by setting a `mono_cutoff` of `195` or disable it through `raspi-config`.

### How do I find out the IP address of Beepy on my network?

You can check your router's config page for the list of connected device and look for the IP address

-or-

Run a network scan using the command `sudo arp-scan --localnet`. This will list IP addresses of all devices in your local network
