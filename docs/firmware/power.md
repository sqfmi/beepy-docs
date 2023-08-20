---
sidebar_position: 2
---

# Power Management & Battery

The onboard RP2040 controls the power to the Pi, as well as measuring the battery level with its ADC. The Beepy can be safely shutdown by holding the "End Call" button on the keyboard.

## Examples

### Battery Level Reporting

The following sysfs entries are available under `/sys/firmware/beepy` to read the system battery level:

- `battery_raw`: raw numerical battery level as reported by firmware. Read-only
- `battery_volts`: battery voltage estimation. Read-only
- `battery_percent`: battery percentage estimation. Read-only

## Script

The following script is an example to calculate a voltage estimation from the raw battery level:

```
#!/bin/sh

V=$(cat /sys/firmware/beepy/battery_raw)

V=$(echo "obase=10; ibase=16; $V" | bc)
echo "$V * 3.3 * 2 / 4095" | bc -l | cut -c1-5
```

### Sleep/Wake

To Do