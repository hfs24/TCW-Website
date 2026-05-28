# TCW Manager – Teleconnect Device Control Panel

A lightweight browser-based control panel embedded directly on the TeleConnect device, developed for AKSIL Technologies. The interface enables engineers and operators to remotely configure network settings and manage serial terminal sessions without requiring physical access to the hardware.

## Why It Was Built

TeleConnect devices are commonly accessed over unstable or low-bandwidth wireless connections in field environments. To ensure fast load times and reliable operation, the interface was built entirely with vanilla HTML, CSS, and JavaScript, without external dependencies such as Bootstrap or jQuery.

## What It Does

- Configure Wi-Fi, DHCP, NAT, and Ethernet network settings
- Manage serial terminal sessions (Serial 1 and Serial 2)
- Control session sharing, collaboration, and logging
- Perform system administration tasks:
Hostname configuration
SMTP settings
Firmware updates
Configuration import/export
- Display live device status updates using event listeners and lightweight JSON polling without requiring page refreshes

## Testing

The interface was tested against an ESP8266 microcontroller running a 
simplified version of the device's C++ firmware, used to identify edge cases 
and connection issues in low-bandwidth environments.

## Note

This project was built during commercial employment at AKSIL Technologies. 
The code shared here is a portfolio representation of the work completed.
