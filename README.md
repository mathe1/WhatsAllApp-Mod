# modified WhatsAllApp-Mod

#### Unfortunately, due to a change in the code of Whatsapp, this extension no longer runs. I hope it can be fixed soon...
## As long as there is no solution in sight, you can still track a single contact by [WhatsAppOnlineTracker](https://github.com/mathe1/WhatsAppOnlineTracker) - my rebuilt project!

### Forgot the rest on this page ...

This is a more moded version of [WhatsAllApp](https://github.com/LoranKloeze/WhatsAllApp/) and moded by [#@R! ()M B@TR@ (ohari5336)](https://ohari5336.in)

Get the extension only from /Dist-folder.

What's New in This WhatsAllApp-Mod Version (now 2.31):
* added green background at selected contact whose online now
* added alert.mp3 when phone is disconnected, and logging that
* the log is more informative now and displaying every variable period sec.
* button to collect automatic all your numbers, or the Top20 numbers of last chats

#### Nice log at the console
time> status contact name [phone number] is online 
 ``` 
 22:38:55> +++++ Tim [491234567890] ✅
 22:39:06> 00:10 Tim [491234567890] is online
 22:39:17> ----- Tim ❌ left after 00:22
(108) 💦 Hydrating 22 numbers for 11.086s
 ```
If nobody is online, all variable count of sec it shows the 💦 hydrating to indicate activity. It counts up until something else happens.
If you don't like the sounds, replace online.mp3 and offline.mp3 to your own sounds...

#### How to do?

After you installed this chrome extension, start web.whatsapp.com and login at your account...

1. Select the telephone numbers to be monitored in the overlay under "Lists" and carry out the search.
2. Open the devTools and show the console

#### Some known issues

* Sometimes a contact is permanently displayed and logged online even though it has been offline for a long time. Then it helps if the contact is selected directly (in the app or on the web) to update the status. Or the extension doesn't know anymore if someone has gone online. Also, if it was shorter than 10 sec. I don't know what this is related to, but when the contacts are "searched" again, it works again. - Maybe fixed by variable hydrating delay...

* Scrolling in contact list while a contact is online, the green status background will misplaced

#### combined with this nice script

I was inspired by the script [WhatsappTracker](https://github.com/electronixxx/WhatsappTracker) to improve the log to track a single contact. I [forked](https://github.com/mathe1/WhatsappTracker) this script now, because some things were changed in WhatsApp-code at least...
