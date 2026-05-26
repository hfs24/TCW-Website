# TCW Manager – Teleconnect Device Control Panel

A browser-based control panel embedded directly on the Teleconnect device, 
built for AKSIL Technologies. The interface allows engineers to remotely 
configure network settings and manage terminal sessions without needing 
physical access to the hardware.

## Why It Was Built

The Teleconnect device is accessed over a wireless connection that is often 
weak or unstable in field environments. Using external libraries like Bootstrap 
or jQuery would have made the interface too heavy to load reliably, so the 
decision was made to build entirely in vanilla HTML, CSS, and JavaScript with 
no dependencies.

## What It Does

- Configure WiFi, DHCP, NAT, and ethernet network settings
- Manage serial terminal sessions (Serial 1 and Serial 2)
- Control session collaboration and logging
- System administration — hostname, SMTP, firmware updates, config import/export
- Live device status updates pushed to the UI using event listeners and JSON 
  polling, without page refreshes

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla — no external libraries or frameworks)

## Testing

The interface was tested against an ESP8266 microcontroller running a 
simplified version of the device's C++ firmware, used to identify edge cases 
and connection issues in low-bandwidth environments.

## Note

This project was built during commercial employment at AKSIL Technologies. 
The code shared here is a portfolio representation of the work completed.
