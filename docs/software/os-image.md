---
sidebar_position: 1
---

# OS Image

The base OS image is [Raspberry Pi OS Lite 32-bit](https://downloads.raspberrypi.org/raspios_lite_armhf/images/raspios_lite_armhf-2023-05-03/2023-05-03-raspios-bullseye-armhf-lite.img.xz) (Debian version 11 bullseye, Kernel 6.1)

## Optimizing Boot Speed

To Do - Optimized boot script to reduce boot up time

## Optimizing Battery Life
### Pi Zero 2W Settings
**Restrict munber of cores to limit peak power use** - the Zero 2W can be limitid to use two cores and is still much faster tnah the pi zero, but peak power use is nearly half of what 4 cores will use.
* sudo vi /boot/cmdline.txt
* Add "maxcpus=2" after "console=tty1".
* Reboot

## Optimizing Apps for small screens
**top** - You can reduce the number of columns shown by default so that it shows more useful information on the sharp display.  
* ssh to the beepberry (the needed menu doesn't render correctly on the small screen)
* run "top"
* type "f" to enter the columns config screen
* use the up and down keys to move, and space to remove the "\*" from all of the columns except: PID, USER, S, %CPU, %MEM, COMMAND
* type "q" to return to the main screen
* type "W" (capital w) to save the config.
* type "q" to quit.  Then go back to the beepberry and top should have a nice setup.

