---
sidebar_position: 2
---

# Linux Drivers

Linux drivers for the Beepy

## APT repository

To add the driver APT repository and install Beepy drivers, run

```
curl -s --compressed "https://ardangelo.github.io/beepy-ppa/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/beepy.gpg >/dev/null \
&& sudo curl -s --compressed -o /etc/apt/sources.list.d/beepy.list "https://ardangelo.github.io/beepy-ppa/beepy.list" \
&& sudo apt update \
&& sudo apt-get -y install beepy-kbd sharp-drm \
&& sudo shutdown -r now
```

## Peripherals

To Do - This driver provides an interface to read/write to the peripherals on the Beepy

### Battery Level and LED control

The following sysfs entries are available under `/sys/firmware/beepy`:

- `led`: 0 to disable LED, 1 to enable. Write-only
- `led_red`, `led_green`, `led_blue`: set LED color intensity from 0 to 255. Write- only
- `keyboard_backlight`: set keyboard brightness from 0 to 255. Write-only
- `battery_raw`: raw numerical battery level as reported by firmware. Read-only
- `battery_volts`: battery voltage estimation. Read-only
- `battery_percent`: battery percentage estimation. Read-only
